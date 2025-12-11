import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Mail, Lock, LogIn, User, ArrowLeft } from 'lucide-react';

const TestUserLogin = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleTestLogin = async (e) => {
    e.preventDefault();
    setError('');

    if (email !== 'test@gmail.com' || password !== 'test') {
      setError('Неверный email или пароль.');
      return;
    }

    setIsLoggingIn(true);
    
    const testUser = {
      id: 'test_user_123',
      username: 'Тестовый_Пользователь',
      email: 'test@gmail.com',
      avatar: null,
      createdAt: new Date().toISOString()
    };

    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      
      login(testUser);
      
      navigate('/');
    } catch (error) {
      console.error('Ошибка входа:', error);
      setError('Произошла ошибка при входе');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleAutoFill = () => {
    setEmail('test@gmail.com');
    setPassword('test');
  };

  return (
    <div className = "min-h-screen bg-black flex items-center justify-center p-4">
      <div className = "bg-blue-950/30 border border-gray-800 rounded-xl p-8 max-w-md w-full">
        <button
            onClick = {() => navigate(-1)}
            className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mb-8 text-[17px]
              lg:text-[20px]
              2xl:text-[20px]">
            <ArrowLeft className="w-4 h-4
              lg:w-5 lg:h-5
              2xl:w-5 2xl:h-5" />
            <span>Назад</span>
        </button>
        <div className = "text-center mb-8">
          <div className = "w-20 h-20 mx-auto mb-4 rounded-full bg-blue-300/50 flex items-center justify-center">
            <User className = "w-10 h-10 text-blue-950" />
          </div>
          <h2 className="text-2xl text-white mb-2 font-body
            lg:text-4xl
            2xl:text-4xl"
            >Войти в аккаунт</h2>
        </div>

        <form onSubmit = {handleTestLogin} className="space-y-4">
          {error && (
            <div className = "bg-red-900/30 border border-red-700/50 rounded-lg p-3">
              <p className = "text-red-300 text-sm">{error}</p>
            </div>
          )}

          <div>
            <label className="block text-gray-300 mb-2 text-lg
              lg:text-xl
              2xl:text-xl"
              >Email</label>
            <div className = "relative">
              <Mail className = "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type = "email"
                value = {email}
                onChange = {(e) => setEmail(e.target.value)}
                placeholder = "Введите email"
                className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-200/50 transition-colors text-lg
                  lg:text-xl
                  2xl:text-xl"
                required
              />
            </div>
          </div>

          <div className = 'pb-[20px]'>
            <label className="block text-gray-300 mb-2 text-lg
              lg:text-xl
              2xl:text-xl"
              >Пароль</label>
            <div className = "relative">
              <Lock className = "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type = "password"
                value = {password}
                onChange = {(e) => setPassword(e.target.value)}
                placeholder = "Введите пароль"
                className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-200/50 transition-colors text-lg
                  lg:text-xl
                  2xl:text-xl"
                required
              />
            </div>
          </div>

          <button
            type = "submit"
            disabled = {isLoggingIn}
            className = {`w-full py-3 rounded-lg text-lg transition-all flex items-center justify-center space-x-2 ${
              isLoggingIn
                ? 'bg-gray-700 cursor-not-allowed'
                : 'bg-blue-200/30 text-gray-300 hover:bg-blue-200/70 hover:text-black'
            }`}>
            {isLoggingIn ? (
              <>
                <div className = "w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Вход...</span>
              </>
            ) : (
              <>
                <LogIn className = "w-5 h-5" />
                <span>Войти</span>
              </>
            )}
          </button>
        </form>

        <div className = "mt-6 pt-6 border-t border-gray-800">
          <div className = "bg-gray-900/30 rounded-lg p-4 mb-4">
            <h4 className="text-white mb-2 text-lg
              lg:text-xl
              2xl:text-xl"
              >Тестовые данные:</h4>
            <div className = "space-y-1 text-m">
              <div className = "flex">
                <span className = "text-gray-400 w-24">Email:</span>
                <span className = "text-white">test@gmail.com</span>
              </div>
              <div className = "flex">
                <span className = "text-gray-400 w-24">Пароль:</span>
                <span className = "text-white">test</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestUserLogin;