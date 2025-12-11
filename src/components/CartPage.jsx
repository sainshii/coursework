import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ShoppingBag, Trash2, Plus, Minus, ArrowLeft, CreditCard, Truck, Shield, Package, CheckCircle, AlertCircle } from 'lucide-react';
import Header from './Header';
import Texture from './Texture';

const CartPage = () => {
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);
  const { cart, removeFromCart, getCartTotal } = useAuth();
  const navigate = useNavigate();

  const handleCheckout = () => {
    setShowSuccessNotification(true);
  };

  const calculateItemTotal = (item) => {
    return (item.price * (item.quantity || 1)).toFixed(2);
  };

  if (cart.length === 0) {
    return (
      <div className = "min-h-screen bg-black text-gray-200 font-body">

      <Texture></Texture>

      <Header></Header>

      <div className="container mx-auto px-4 py-[2rem]
        lg:py-[4rem]
        2xl:py-[4rem]">
        <div className = "max-w-4xl mx-auto">
          <div className = "text-center mb-8">
            <button
              onClick = {() => navigate('/merch')}
              className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mb-8 text-[15px]
                lg:text-[30px]
                2xl:text-[30px]">
              <ArrowLeft className="w-3 h-3
                lg:w-5 lg:h-5
                2xl:w-5 2xl:h-5" />
              <span>Вернуться к мерчу</span>
            </button>
            
            <div className='mt-[10px]
              lg:mt-[50px]
              2xl:mt-[50px]'>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-blue-950/40 flex items-center justify-center
                lg:w-32 lg:h-32
                2xl:w-32 2xl:h-32">
                <ShoppingBag className="w-5 h-5 text-gray-600
                  lg:w-16 lg:h-16
                  2xl:w-16 2xl:h-16" />
              </div>
              <h1 className="text-xl mb-4 font-heading
                lg:text-4xl
                2xl:text-4xl"
                >КОРЗИНА ПУСТА</h1>
              <p className="text-gray-400 text-[13px] mb-8
                lg:text-[25px]
                2xl:text-[25px]"
                >Добавьте товары из каталога, чтобы продолжить покупки</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }

  return (
    <div className = "min-h-screen bg-black text-gray-200 font-body">
      
      <Texture></Texture>

      <Header></Header>
      
      <div className="container mx-auto px-4 py-[2rem]
        lg:py-[6rem]
        2x:py-[4rem]">
        <div className = "max-w-7xl mx-auto">

          <div className = "flex md:flex-row md:items-center mb-8 gap-4">
            <div className = "w-full">
              <button
                onClick = {() => navigate('/merch')}
                className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mb-4 text-[15px]
                  lg:text-[25px]
                  2xl:text-[25px]">
                <ArrowLeft className="w-3 h-3
                  lg:w-5 lg:h-5
                  2xl:w-5 2xl:h-5" />
                <span>Вернуться к мерчу</span>
              </button>

              <div className = "flex justify-center w-full">
                <h1 className="text-[20px] font-heading
                  lg:text-[40px]
                  2xl:text-[40px]"
                  >ВАША КОРЗИНА</h1>
              </div>
            </div>
          </div>


          <div className="bg-blue-950/30 border border-gray-800 rounded-xl p-[20px] mb-[20px]
            lg:p-[30px]
            2xl:p-[30px]">
            <div className = "flexitems-center justify-between mb-6">
              <h2 className="text-lg font-body
                lg:text-4xl
                2xl:text-4xl">ТОВАРЫ В КОРЗИНЕ</h2>
            </div>

            <div className = "space-y-4">
              {cart.map((item) => (
                <div 
                  key = {item.id} 
                  className = "p-4 bg-black/20 rounded-lg border border-gray-700 hover:border-blue-300/50 transition-colors">
                  <div className="flex gap-4 flex-col
                    lg:flex-row
                    2xl:lg:flex-row">

                    {/* Картинка */}
                    <div className="w-[100px] h-[100px] rounded-lg overflow-hidden bg-gray-800 flex-shrink-0
                      lg:w-32 lg:h-32
                      2xl:w-32 2xl:h-32">
                      <img src = {item.image} alt = {item.name} className = "w-full h-full object-cover" />
                    </div>

                    {/* Все кроме описания */}
                    <div className = "flex-1">
                      <div className = "flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-[15px] mb-1
                            lg:text-[25px]
                            2xl:text-[25px]">{item.name}</h3>
                          <p className="text-gray-400 text-[12px]
                            lg:text-[15px]
                            2xl:text-[15px]">{item.category}</p>
                        </div>
                        <div className = "text-right">
                          <div className="text-2xl text-blue-200/80
                            lg:text-3xl
                            2xl:text-3xl">
                            ${calculateItemTotal(item)}
                          </div>
                        </div>
                      </div>

                      {/* Описание */}
                      {item.description && (
                        <p className="text-gray-400 text-[13px] mb-4
                          lg:text-[17px]
                          2xl:text-[17px]">"{item.description}"</p>
                      )}

                      {/* Удаление */}
                      <div className = "flex items-center justify-end">
                        <button
                          onClick = {() => removeFromCart(item.id)}
                          className="flex items-center space-x-2 text-red-400 hover:text-red-300 transition-colors text-sm
                            lg:text-xl
                            2xl:text-xl">
                          <Trash2 className="w-3 h-3
                            lg:w-5 lg:h-5
                            2xl:w-5 2xl:h-5" />
                          <span>Удалить</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Правая колонка: Итого и оформление */}
          <div className = "bg-blue-950/30 border border-gray-800 rounded-xl p-6">
            <p className="text-2xl mb-4 font-body text-center
              lg:text-4xl lg:mb-6
              2xl:text-4xl 2xl:mb-6"
              >ИТОГО: ${getCartTotal()}</p>
            <button
              onClick = {handleCheckout}
              className="w-full py-2 rounded-lg bg-blue-200/30 hover:bg-blue-300/50 transition-all text-sm mb-4 flex items-center justify-center space-x-3
                lg:text-lg lg:py-4
                2xl:text-lg 2xl:py-4">
              <CreditCard className="w-4 h-4
                lg:w-6 lg:h-6
                2xl:w-6 2xl:h-6" />
              <span>ПЕРЕЙТИ К ОПЛАТЕ</span>
            </button>

            {showSuccessNotification && (
              <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-[90%] max-w-md bg-white rounded-xl p-6 shadow-2xl
                lg:w-full
                2xl:w-full">
                <div className = "flex flex-col items-center text-center">
                  <div className = "w-16 h-16 rounded-full bg-gradient-to-br from-green-700 to-emerald-700 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill = "none" stroke = "currentColor" viewBox = "0 0 24 24" xmlns = "http://www.w3.org/2000/svg">
                      <path strokeLinecap = "round" strokeLinejoin = "round" strokeWidth = "2" d = "M5 13l4 4L19 7"></path>
                    </svg>
                  </div>

                  <h3 className="text-lg text-black mb-2 font-body font-bold
                    lg:text-2xl
                    2xl:text-2xl">Оплата прошла успешно!</h3>
                  <p className="text-black mb-6 text-sm
                    lg:text-lg
                    2xl:text-lg">Спасибо за ваш заказ. Вы будете перенаправлены на главную страницу.</p>

                  <div className = "flex flex-col w-full space-y-3">
                    <button 
                      onClick = {() => {setShowSuccessNotification(false); navigate('/');}}
                      className = "w-full py-3 rounded-lg bg-blue-950/70 hover:bg-blue-800/50 hover:text-black transition-all text-white">Ок
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;