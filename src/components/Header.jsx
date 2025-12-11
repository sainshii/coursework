import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ShoppingBag, LogOut } from 'lucide-react';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { user, logout } = useAuth();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <header>
          <nav className="text-blue-200/60 fixed top-0 left-0 w-full z-50 backdrop-blur-sm flex items-center
            py-[2px]
            2xl:py-2 2xl:text-2xl
            lg:py-2 lg:text-2xl">
            <div className="flex justify-center flex-1 gap-5 
                text-[8px]
                2xl:gap-14
                lg:gap-14 lg:text-[25px]">
              <button className = "hover:text-gray-200 transition duration-200" onClick = {() => navigate('/')}>Главная</button>
              <button className = "hover:text-gray-200 transition duration-200" onClick = {() => navigate('/history')}>История создания</button>
              <button className = "hover:text-gray-200 transition duration-200" onClick = {() => navigate('/plot')}>Сюжет</button>
              <button className = "hover:text-gray-200 transition duration-200" onClick = {() => navigate('/merch')}>Мерч</button>
            </div>

            <div className = "absolute right-4 flex items-center gap-4">
                {user ? (
                    <div className="flex items-center 
                        2xl:gap-4
                        lg:gap-4">
                        <button 
                            className = "relative p-2 hover:bg-blue-500/20 rounded-full transition duration-200 hover:text-gray-200 group"
                            onClick = {() => navigate('/cart')}>
                            <ShoppingBag className="w-2 h-2
                                2xl:w-6 2xl:h-6
                                lg:w-6 lg:h-6" />
                        </button>
                        
                        <button 
                            className = "p-2 hover:bg-red-500/20 rounded-full transition duration-200 hover:text-gray-200 group"
                            onClick = {handleLogout}>
                            <LogOut className="w-2 h-2
                                2xl:w-6 2xl:h-6
                                lg:w-6 lg:h-6" />
                        </button>
                    </div>
                ) : (
                    <div className = "auth-buttons">
                        <button 
                            className="bg-blue-500/30 hover:bg-blue-500/50 text-white rounded-md transition duration-200 hover:text-gray-200 border-blue-400/30
                                text-[6px] px-[10px] my-[10px]
                                2xl:px-8 2xl:text-[1em] 2xl:border 2xl:rounded-2xl 2xl:mr-[20px]
                                lg:px-8 lg:text-[1em] lg:border lg:rounded-2xl lg:mr-[20px]"
                            onClick = {() => navigate('/login')}>Войти
                        </button>
                    </div>
                )}
            </div>
          </nav>
        </header>
    );
};

export default Header;