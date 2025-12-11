import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  // Загрузка данных из localStorage при монтировании
  useEffect(() => {
    const savedUser = localStorage.getItem('sallyFace_user');
    const savedCart = localStorage.getItem('sallyFace_cart');
    
    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        setUser(parsedUser);
        
        // Корзина только для авторизованного пользователя
        if (savedCart && parsedUser) {
          try {
            setCart(JSON.parse(savedCart));
          } catch (error) {
            console.error('Error parsing saved cart:', error);
            localStorage.removeItem('sallyFace_cart');
          }
        }
      } catch (error) {
        console.error('Error parsing saved user:', error);
        localStorage.removeItem('sallyFace_user');
      }
    }
    
    setLoading(false);
  }, []);

  // Сохранение корзины только для авторизованного пользователя
  useEffect(() => {
    if (!loading && user) {
      localStorage.setItem('sallyFace_cart', JSON.stringify(cart));
    }
  }, [cart, loading, user]);

  const login = (userData) => {
    const userWithoutPassword = { ...userData };
    delete userWithoutPassword.password;
    setUser(userWithoutPassword);
    localStorage.setItem('sallyFace_user', JSON.stringify(userWithoutPassword));
    
    // Восстановление корзины пользователя
    const savedCart = localStorage.getItem('sallyFace_cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error('Error restoring cart:', error);
      }
    }
  };

  const logout = () => {
    if (user) {
      localStorage.setItem('sallyFace_cart', JSON.stringify(cart));
    }
    
    setUser(null);
    setCart([]);
    localStorage.removeItem('sallyFace_user');
  };

  const addToCart = (item) => {
    if (!user) return false; // Только для авторизованных
    
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    
    if (existingItem) {
      setCart(cart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: (cartItem.quantity || 1) + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
    
    return true;
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId, quantity) => {
    if (quantity < 1) {
      removeFromCart(itemId);
      return;
    }
    
    setCart(cart.map(item =>
      item.id === itemId ? { ...item, quantity } : item
    ));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    if (!user) return "0.00";
    return cart.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0).toFixed(2);
  };

  const getCartCount = () => {
    if (!user) return 0;
    return cart.reduce((count, item) => count + (item.quantity || 1), 0);
  };

  const isAuthenticated = () => {
    return !!user;
  };

  const value = {
    user,
    cart,
    loading,
    isAuthenticated,
    login,
    logout,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartCount
  };

  if (loading) {
    return (
      <div className = "min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-purple-950 to-gray-900">
        <div className = "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};