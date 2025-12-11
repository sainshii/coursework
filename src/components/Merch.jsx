import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../input.css';
import Header from './Header';
import Footer from './Footer';
import { ChevronRight, Package, Lock, ShoppingBag, Check, X, UserPlus, LogIn } from 'lucide-react';
import larry from '../img/merch/Sally_larrysshirt_c68a5aa5-4dc4-411c-a317-5659ed962673_2048x2048.png';
import nockfell from '../img/merch/Sally_nockfellraglan_royal_grande.png';
import hat from '../img/merch/mockup-dacdd8ad_2048x2048_7b7f2b75-f700-4f0c-947e-8fe8fc240d6f_grande.png';
import mask from '../img/merch/all-over-print-premium-face-mask-black-6008c7ceb74f7_grande.png';
import backpack from '../img/merch/mockup-3c0789ec_2048x2048_b938305e-6de5-4919-a29d-e62359d82bbc_2048x2048.png';
import sanityfalls from '../img/merch/unisex-basic-softstyle-t-shirt-black-6008c92b24f39_grande.png';
import Texture from './Texture';

const Merch = () => {
  const { user, addToCart, getCartCount, cart, removeFromCart } = useAuth();
  const navigate = useNavigate();
  const [showAuthNotification, setShowAuthNotification] = useState(false);
  const [recentlyAdded, setRecentlyAdded] = useState({});
  const [notification, setNotification] = useState(null);
  const [itemToAdd, setItemToAdd] = useState(null);
  const [notificationType, setNotificationType] = useState('add');

  const merchandise = [
    {
      id: 1,
      name: "Футболка Ларри",
      price: 29.99,
      category: "ОДЕЖДА",
      image: larry,
      description: " Хочешь быть как Ларри? Его фирменная футболка — твоя! Логотип SF на 100% хлопке. "
    },
    
    {
      id: 2,
      name: "Кепка",
      price: 23.99,
      category: "АКСЕССУАРЫ",
      image: hat,
      description: " Кепки для отцов — не только для отцов. У этой модели лаконичный дизайн и регулируемый размер. "
    },

    {
      id: 3,
      name: "Nockfell High Raglan",
      price: 32.79,
      category: "ОДЕЖДА",
      image: nockfell,
      description: " Продемонстрируй свою школьную гордость в бейсбольной футболке Nockfell High School. "
    },

    {
      id: 4,
      name: "Маска с логотипом SF",
      price: 17.99,
      category: "АКСЕССУАРЫ",
      image: mask,
      description: " Идеальная посадка и стиль в деталях. Многоразовая маска с регулируемой переносицей и эластичными завязками. "
    },

    {
      id: 5,
      name: "Sanity Falls",
      price: 29.99,
      category: "ОДЕЖДА",
      image: sanityfalls,
      description: " Логотип «Sanity Falls» на футболке премиум-качества: 100% хлопок. "
    },
    
    {
      id: 6,
      name: "Рюкзак Sally Face",
      price: 44.99,
      category: "АКСЕССУАРЫ",
      image: backpack,
      description: " Этот рюкзак среднего размера — именно то, что нужно для ежедневного использования или занятий спортом. "
    }
  ];

  const isItemInCart = (itemId) => {
    return cart.some(item => item.id === itemId);
  };

  const getItemQuantity = (itemId) => {
    const item = cart.find(item => item.id === itemId);
    return item ? item.quantity || 1 : 0;
  };

  const handleAddToCart = (item) => {
    if (!user) {
      setItemToAdd(item);
      setNotificationType('add');
      setShowAuthNotification(true);
      return;
    }

    const success = addToCart(item);
    if (success) {
      setRecentlyAdded(prev => ({
        ...prev,
        [item.id]: true
      }));

      setTimeout(() => {
        setRecentlyAdded(prev => ({
          ...prev,
          [item.id]: false
        }));
        setNotification(null);
      }, 3000);
    }
  };

  const handleRemoveFromCart = (item) => {
    if (!user) return;
    
    setTimeout(() => {
      removeFromCart(item.id);
      
      setTimeout(() => {
        setNotification(null);
      }, 2000);
    }, 300);
  };

  const handleCloseAuthNotification = () => {
    setShowAuthNotification(false);
    setItemToAdd(null);
  };

  const goToCart = () => {
    if (user) {
      navigate('/cart');
    } else {
      setNotificationType('cart');
      setShowAuthNotification(true);
    }
  };

  return (
    <div className = 'bg-black min-h-screen'>

      <Texture></Texture>

      <Header />

      {/* Уведа об авторизации */}
      {showAuthNotification && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-[10px] bottom-[20rem]
          lg:bottom-[10rem]
          2xl:bottom-[50rem] 2xl:p-[0px]">
          <div className="bg-white rounded-xl p-6 shadow-2xl w-full max-w-[35rem]
            lg:w-full
            2xl:w-full 2xl:max-w-[60rem]">
            <div className = "flex items-start justify-between mb-4">
              <div className = "flex items-center space-x-3">
                <Lock className = "w-6 h-6 text-black" />
                <div>
                  <h3 className="text-[15px] font-body font-bold text-black
                    lg:text-[25px]
                    2xl:text-[25px]">
                    {notificationType === 'add' && itemToAdd 
                      ? `Добавить "${itemToAdd.name}" в корзину?` 
                      : 'Доступ к корзине'
                    }
                  </h3>
                  
                  <p className="text-gray-400 text-[12px]
                    lg:text-sm
                    2xl:text-sm">
                    {notificationType === 'add'
                      ? 'Для добавления товаров в корзину требуется авторизация'
                      : 'Для просмотра корзины требуется авторизация'
                    }
                  </p>
                </div>
              </div>

              <button
                onClick = {handleCloseAuthNotification}
                className = "text-black hover:text-blue-950/60 transition duration-400">
                <X className = "w-5 h-5" />
              </button>
            </div>
            
            <div className = "flex flex-col items-center space-y-3">
              <button
                onClick = {() => { navigate('/login'); setShowAuthNotification(false);}}
                className="w-full py-2 px-[5rem] rounded-lg border border-blue-800/40 bg-blue-950/10 hover:bg-blue-950/60 transition duration-400 text-black hover:text-white flex items-center justify-center space-x-2
                  lg:w-[60%]
                  2xl:w-[40%]">
                <LogIn className="w-4 h-4
                  lg:w-5 lg:h-5
                  2xl:w-5 2xl:h-5" />
                <span className='text-[12px]
                  lg:text-[100%]
                  2xl:text-[100%]'
                  >ВОЙТИ В АККАУНТ</span>
              </button>
            </div>
          </div>
        </div>
      )}



      <main className="container mx-auto px-4 py-[2.5rem]
        lg:py-[4rem]
        2xl:py-[4rem]">
        <div className = "max-w-7xl mx-auto">

          <div className = "mb-16">
            <div className = "text-center mb-12">
              <div className = "inline-flex items-center space-x-4 mb-8">
                <div className = "w-20 h-px bg-gradient-to-r from-transparent via-blue-400/70 to-transparent"></div>
                <span className="text-[8px] tracking-widest text-gray-400 uppercase font-body
                  lg:text-sm
                  2xl:text-sm">Коллекция архивных материалов</span>
                <div className = "w-20 h-px bg-gradient-to-l from-transparent via-blue-400/70 to-transparent"></div>
              </div>
              <h2 className="text-2xl mb-[5px] tracking-tight font-heading text-white
                lg:text-4xl
                2xl:text-4xl">ОФИЦИАЛЬНЫЙ МЕРЧ</h2>
              <p className="text-gray-400 mx-auto text-[15px] font-body
                lg:text-[25px]
                2xl:text-[25px]">Тёмная тайна начинает раскрываться...</p>
            </div>
          </div>


          {/* Карточки */}
          <div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {merchandise.map((item) => {
              const isInCart = isItemInCart(item.id);
              const quantity = getItemQuantity(item.id);

              return (
                <div 
                  key = {item.id}
                  className = {`group relative bg-gradient-to-br from-gray-900/50 to-blue-500/30 border border-gray-800 rounded-xl overflow-hidden hover:border-blue-400/60 transition-all duration-500 hover:scale-[1.02] flex flex-col`}>
                  
                  {/* Картинки */}
                  <div className = "relative h-[400px] overflow-hidden bg-white/30">
                    <img src = {item.image} alt = {item.name} className = "w-[400px] h-auto group-hover:scale-105 transition-transform duration-500 object-contain" />
                    <div className = "absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                  </div>
              
                  {/* Содержание */}
                  <div className = "p-6 flex flex-col flex-grow">
                    <div className = "flex justify-between mb-3">
                      <div>
                        <div className="text-[10px] tracking-widest text-gray-400 mb-1 font-body text-left
                          lg:text-[15px]
                          2xl:text-[15px]">
                          {item.category}
                        </div>
                        <h3 className="text-[18px] tracking-tight font-heading text-gray-200
                          lg:text-[25px]
                          2xl:text-[25px]">
                          {item.name}
                        </h3>
                      </div>
                      <div className = "text-right">
                        <div className="text-lg bg-blue-200/60 px-5 rounded-full font-body
                          lg:text-3xl
                          2xl:text-3xl">
                          ${item.price}
                        </div>
                      </div>
                    </div>
              
                    {/* Описание */}
                    <div className="mb-6 flex-grow flex items-center">
                      <p className="text-[13px] text-gray-400 font-body text-center w-full
                        lg:text-[17px]
                        2xl:text-[17px]">
                        "{item.description}"
                      </p>
                    </div>

                    {/* Добавить/удалить */}
                    <div className = "space-y-3">
                      <button 
                        onClick = {() => isInCart ? handleRemoveFromCart(item) : handleAddToCart(item)}
                        className = {`w-full py-3 rounded-lg transition-all flex items-center justify-center space-x-2 font-body ${
                          isInCart
                            ? 'bg-red-900/50 hover:bg-red-800/50 border border-red-700/50 hover:border-red-500/50 text-red-300 hover:text-red-200'
                            : 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/40 hover:to-purple-500/40 border border-blue-700/30 hover:border-blue-500/50 text-blue-300 hover:text-blue-200'
                        }`}>
                        {isInCart ? (
                          <>
                            <X className = "w-4 h-4" />
                            <span>УДАЛИТЬ ИЗ КОРЗИНЫ</span>
                          </>
                        ) : (
                          <>
                            <Package className = "w-4 h-4" />
                            <span>ДОБАВИТЬ В КОРЗИНУ</span>
                            <ChevronRight className = "w-4 h-4" />
                          </>
                        )}
                      </button>
                      
                      {/* Перейти в корзину */}
                      <button
                        onClick = {goToCart}
                        className = "w-full py-2 rounded-lg border border-gray-700 hover:border-blue-500 hover:bg-gray-800/30 transition-all text-gray-300 hover:text-white flex items-center justify-center space-x-2 text-sm">
                        <ShoppingBag className = "w-3 h-3" />
                        <span>ПЕРЕЙТИ В КОРЗИНУ {getCartCount() > 0 && `(${getCartCount()})`}</span>
                      </button>
                    </div>
                      
                    {/* Сколько в корзине товаров */}
                    {isInCart && quantity > 0 && (
                      <div className = "mt-3 text-center">
                        <div className = "inline-flex items-center space-x-2 text-[18px] text-blue-400 bg-blue-900/20 px-3 py-1 rounded-full">
                          <Check className = "w-3 h-3" />
                          <span>В корзине: {quantity} шт. • ${(item.price * quantity).toFixed(2)}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Merch;