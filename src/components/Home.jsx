import React from 'react'
import Header from './Header'
import '../input.css'
import logo from '../img/main/logo white.png'
import pic1 from '../img/main/1.png'
import pic2 from '../img/main/2.jpg'
import pic3 from '../img/main/3.jpg'
import pic4 from '../img/main/4.png'
import pic5 from '../img/main/5.png'
import pic6 from '../img/main/6.png'
import pic7 from '../img/main/7.png'
import pic8 from '../img/main/8.jpg'
import Footer from './Footer'
import HomeLayout from './HomeLayout';
import Texture from './Texture'

const Home = () => {
  return (
    <div className = "">
      <HomeLayout background = "../img/main.jpg">

      <Texture></Texture>

      <Header></Header>

        <section className = "relative">
          <img
            src = { logo }
            alt = "logo"
            className = "absolute ml-[3.5%] w-[45%] mt-[10%] z-10 2xl:ml-[4%]" />
          <h3 className="absolute font-fairfax text-[0.4em] text-[#b3b5b0] ml-[27.5%] mt-[27.5%] z-20 text-right leading-[1.1]
            lg:text-[1.5em]
            2xl:ml-[30%] 2xl:text-[2rem]">
            больше, чем просто<br />
            инди-игра
          </h3>
        </section>

        <section className="absolute mt-[57%] ml-[52%] mb-[5%]">
          <h2 className="absolute font-ustroke text-[#E0E1DD] text-[45%] mt-[14.8%] ml-[50%] filter drop-shadow-[0_0_20px_rgba(0,0,0,0.497)]
            2xl:text-[3rem] 2xl:ml-[48%] 2xl:mt-[13.8%]
            lg:text-[200%] lg:ml-[47%] lg:mt-[13.8%]">
            Описание
          </h2>
          <div className="font-boopee text-[#E0E1DD] text-[0.5em] text-justify w-[80%] mt-[25%] ml-[11%] leading-[1.2]
            2xl:text-[2.7rem]
            lg:text-[2.1em]">
            Sally Face – мрачная приключенческая игра о парне по имени Сал Фишер, чье лицо скрывает протез.
            Он общается с призраками через свою игровую консоль, узнавая их тайны. Вскоре Сал и его друзья
            натыкаются на нечто ужасное, что отбрасывает тень на их тихий городок. Это история, рассказанная в пяти эпизодах.
            Первый из них — лишь краткое вступление, которое раскрывается во всей полноте в последующих главах.
          </div>
        </section>

        <section className="absolute mt-[111%]
          2xl:mt-[108.5%]
          lg:mt-[110%]">
          <h2 className="flex font-ustroke text-[#E0E1DD] text-[50%] ml-[5%] filter drop-shadow-[0_0_20px_rgba(255,255,255,0.497)]
            2xl:text-[3.5em]
            lg:text-[220%]">
            Скриншоты из игры
          </h2>
          <div className="mt-[5%] ml-[4.2%] filter drop-shadow-[0_0_20px_rgba(0,0,0,0.497)]">
            <div className="flex flex-wrap justify-center">
              <img src={pic1} className="w-[20%] mr-[4.5%] mb-[5%]
                hover:scale-110 transition duration-300" alt="" />
              <img src={pic2} className="w-[20%] mr-[4.5%] mb-[5%]
                hover:scale-110 transition duration-300" alt="" />
              <img src={pic3} className="w-[20%] mr-[4.5%] mb-[5%]
                hover:scale-110 transition duration-300" alt="" />
              <img src={pic4} className="w-[20%] mr-[4.5%] mb-[5%]
                hover:scale-110 transition duration-300" alt="" />
              <img src={pic5} className="w-[20%] mr-[4.5%] mb-[5%]
                hover:scale-110 transition duration-300" alt="" />
              <img src={pic6} className="w-[20%] mr-[4.5%] mb-[5%]
                hover:scale-110 transition duration-300" alt="" />
              <img src={pic7} className="w-[20%] mr-[4.5%] mb-[5%]
                hover:scale-110 transition duration-300" alt="" />
              <img src={pic8} className="w-[20%] mr-[4.5%] mb-[5%]
                hover:scale-110 transition duration-300" alt="" />
            </div>
          </div>
        </section>

        <div className="absolute mt-[158%] w-[100%]
          2xl:mt-[150%]
          lg:mt-[150%]">
          <Footer />
        </div>
      </HomeLayout>
    </div>
  );
};

export default Home;