import React from 'react'
import Header from './Header'
import Footer from './Footer'
import HistoryLayout from './HistoryLayout'
import Texture from './Texture'

const History = () => {
  return (
    <div className = "">
      <HistoryLayout background = "../img/history.jpg">

      <Texture></Texture>

      <Header></Header>

        <section className = "relative flex justify-end">
          <div className="pt-[3.19rem] pr-[1.3rem] mt-[4.5%] flex text-[18px]
            lg:pt-[11.3rem] lg:pr-[3.4rem]
            2xl:pt-[15.5em] 2xl:pr-[6rem]">
            <h2 className="pl-[18rem] text-[#E0E1DD] font-ustroke text-[7px]
              lg:text-[35px] lg:mt-[6px]
              2xl:text-[2.6em]">
              История
            </h2>
            <h1 className="font-ustroke text-[20px] absolute pt-0 pl-[13.3rem] mt-[3%] filter drop-shadow-[0_0_20px_rgba(0,0,0,0.497)]
              lg:right-[20px] lg:text-[80px] lg:mt-[2.8%] lg:pr-[1.5rem]
              2xl:text-[5.5em] 2xl:pr-[4rem] 2xl:mt-[2.8%]">
              создания
            </h1>
          </div>
        </section>


        <section className="absolute mt-[30%] w-full leading-[1.2]
          2xl:mt-[28.8%]
          lg:mt-[28.8%] lg:leading-[1.1]">
          <h2 className="text-black flex font-ustroke text-[60%] m-[1%] mb-[1%] pl-[0.5rem] filter drop-shadow-[0_0_20px_rgba(0,0,0,0.497)]
            lg:text-[350%] lg:pl-[2rem]
            2xl:text-[3.5em] 2xl:pl-[2rem]">
            Первые идеи
          </h2>
          <p className="font-boopee text-[0.41em] text-justify w-[48%] m-[1%] pl-[0.5rem] filter drop-shadow-[0_0_20px_rgba(0,0,0,0.497)] 
            lg:text-[1.65em] lg:w-[48%] lg:pl-[2rem]
            2xl:text-[2.4em] 2xl:w-[48%] 2xl:pl-[2rem]">
            Примерно в <span className = "text-[#415A77]">2006</span> или <span className = "text-[#415A77]">2007 году </span> 
            Стив нарисовал жутковатого персонажа, и внезапно ему в голову пришло имя – 
            «<span className = "text-[#415A77]">Sally Face</span>». В течение следующих недель Гэбри стал представлять, 
            каким был бы этот герой. Мальчик с лицом девочки, живущий в многоквартирном доме, полном
            странных жильцов. Его лучший друг – ленивый растаман в плаще,
            который бы жил в подвале. <span className = "text-[#415A77]">Так родились образы Сала и Ларри.</span>
          </p>
          <p className="font-boopee text-[0.41em] text-justify w-[48%] m-[1%] pl-[0.5rem] filter drop-shadow-[0_0_20px_rgba(0,0,0,0.497)]
            lg:text-[1.65em] lg:w-[48%] lg:pl-[2rem]
            2xl:text-[2.4em] 2xl:w-[48%] 2xl:pl-[2rem]">
            Спустя несколько месяцев Стив уже придумал биографию для Сала, а
            также мир, в котором он живёт. Постепенно сформировался ансамбль
            персонажей и множество историй, которые можно было бы рассказать в
            этой вселенной. <span className = " text-[#415A77]">Целью</span> Гэбри было создать нечто, напоминающее
            мультфильмы 90-х, такие как <span className = "text-[#415A77]">Doug, Ren and Stimpy</span>, 
            <span className = "text-[#415A77]"> Hey Arnold!</span> или 
            <span className = "text-[#415A77]"> Rock's Modern Life</span>, но с более мрачными темами и зрелыми сюжетами.
          </p>
        </section>


        <div className="flex justify-center">
          <p className="font-boopee text-[#E0E1DD] absolute mt-[77%] text-center text-[0.3rem] w-[90%]
            lg:text-[1.5rem] lg:mt-[73.5%]
            2xl:text-[2em] 2xl:pt-[50px] 2xl:mt-[73%]">
            Позже Стив собрал нескольких друзей, которые увлекались рисованием и анимацией, чтобы создать мультсериал по
            мотивам Sally Face. <span className = "text-[#778DA9]">Все были в восторге от идеи</span>, поэтому команда с энтузиазмом начала работу. Но из-за занятости на
            работе и учёбе никто не мог уделять проекту достаточно времени. Через некоторое время команда распалась, и идея мультсериала ушла в долгий ящик.
            Sally Face оставалась в глубинах сознания ещё <span className = "text-[#778DA9]">семь лет</span>, пока Гэбри занимался другими проектами.
          </p>
        </div>


        <section className="absolute mt-[88%] ml-[52%] leading-[1.3]
          lg:mt-[87%] lg:leading-[1.2]
          2xl:mt-[87%] 2xl:leading-[1.2]">
          <h2 className="font-ustroke text-[#E0E1DD] text-[60%] text-right w-[95%] filter drop-shadow-[0_0_20px_rgba(255,255,255,0.497)]
            lg:text-[230%]
            2xl:text-[3.2em]">
            Возвращение к идее
          </h2>
          <p className="font-boopee text-[#E0E1DD] text-justify text-[0.4em] w-[93%] m-[2%] pt-[0.5em]
            lg:text-[1.65em] lg:pt-[0em]
            2xl:text-[2.4em] 2xl:pt-[0.5em]">
            В <span className = " text-[#778DA9]">2010 году</span> Стив вместе с друзьями основал небольшую инди-студию
            <span className = "text-[#778DA9]"> Wither Studios</span>. В <span className = "text-[#778DA9]">2013 году</span> они выпустили мобильную
            игру <span className = "text-[#778DA9]">Crowman & Wolfboy</span>. Она получила хорошие отзывы от игроков и
            критиков, а количество загрузок превысило 600 000. Однако финансово
            проект оказался <span className = "text-[#778DA9]">провальным</span>. Студия планировала расширения
            и дополнения для игры, но из-за нехватки средств от идеи пришлось
            отказаться. Это сильно огорчило Гэбри, ведь у него были грандиозные
            планы на продолжение.
          </p>
          <p className="font-boopee text-[#E0E1DD] text-justify text-[0.4em] w-[93%] m-[2%]
            lg:text-[1.65em]
            2xl:text-[2.4em]">
            К <span className = "text-[#778DA9]">концу 2014 года</span> команда столкнулась с трудностями в поиске нового
            направления, и двое из участников ушли. Это был тяжёлый удар, так
            как они были не только отличными художниками, но и друзьями Стива.
          </p>
          <p className="font-boopee text-[#E0E1DD] text-justify text-[0.4em] w-[93%] m-[2%]
            lg:text-[1.65em]
            2xl:text-[2.4em]">
            Эти события подтолкнули Гэбри к мысли заняться собственным
            проектом. Sally Face <span className = "text-[#778DA9]">снова возникла в сознании</span>. Стив подумал, что из
            этой идеи могла бы получиться отличная приключенческая игра. В <span className = "text-[#778DA9]">2015 году</span> он пересмотрел оригинальную концепцию и адаптировал её <span className="lightblue-text text-[#778DA9]">под формат игры из пяти эпизодов</span>. Гэбри начал работу над первым
            эпизодом в свободное время, параллельно с основной работой и участием в деятельности Wither Studios.
          </p>
        </section>


        <section className="absolute mt-[145%] ml-[2%] leading-[1.4]
          lg:mt-[143%] lg:leading-[1.2]
          2xl:mt-[143%] 2xl:leading-[1.2]">
          <h2 className="flex font-ustroke text-[#E0E1DD] m-[1%] text-[60%] mb-[1%] filter drop-shadow-[0_0_20px_rgba(255,255,255,0.497)]
            lg:text-[300%] lg:mb-[2%]
            2xl:text-[3.5em] 2xl:mb-[2%]">
            Личная борьба
          </h2>
          <p className="font-boopee text-[#E0E1DD] text-[0.3em] w-[46%] text-justify m-[1%]
            lg:text-[1.6em] lg:w-[48%]
            2xl:text-[2.4em] 2xl:w-[48%]">
            В <span className = "text-[#778DA9]">феврале 2016 года</span> Стив неожиданно потерял работу из-за массовых сокращений.
            Поиски новой работы <span className = "text-[#778DA9]">шли плохо</span>, и он решил сосредоточиться на завершении первого
            эпизода Sally Face. У Гэбри были кое-какие сбережения, а также выплаты по безработице,
            поэтому он мог позволить себе сделать паузу в поисках работы. Но выбор привёл к серьёзным
            разногласиям с <span className = "text-[#778DA9]">супругой</span>, которая <span className = "text-[#778DA9]">не поддерживала</span>
            стремления Стива и категорически отказалась идти на компромисс. Это стало причиной большого разлада в их отношениях.
          </p>
          <p className="font-boopee text-[#E0E1DD] text-[0.3em] w-[46%] text-justify m-[1%]
            lg:text-[1.6em] lg:w-[48%]
            2xl:text-[2.4em] 2xl:w-[48%]">
            <span className = "text-[#778DA9]">Тем летом</span> Гэбри переехал к родителям, чтобы разобраться в ситуации.
            В этот период он завершил разработку первого эпизода Sally Face: <span className = "text-[#778DA9]">Странные соседи</span>.
            Он был выпущен в <span className = "text-[#778DA9]">августе 2016 года</span> на платформе <span className = "text-[#778DA9]">itch.io</span>,
            но продажи были <span className = "text-[#778DA9]">крайне низкими</span>. Гэбри изо всех сил старался привлечь
            внимание к игре, но успеха не было. Денежные средства
            начали заканчиваться, поэтому он решил запустить <span className = "text-[#778DA9]">краудфандинговую кампанию</span>, чтобы привлечь
            финансирование и внимание.
          </p>
        </section>


        <section className="mt-[201.5%] leading-[1.25]
          lg:mt-[200%]
          2xl:mt-[200%]">
          <h2 className="font-ustroke text-[80%] text-center filter drop-shadow-[0_0_20px_rgba(0,0,0,0.497)]
            lg:text-[300%]
            2xl:text-[3.5em] 2xl:pt-[0.2em]">
            Первые успехи и новые испытания
          </h2>
          <div className="float-left w-[44%] text-justify mt-[3%] ml-[1.5%] font-boopee text-[0.41em] filter drop-shadow-[0_0_20px_rgba(0,0,0,0.497)]
            lg:text-[1.68em] lg:mt-[3%]
            2xl:text-[2.5em] 2xl:pt-[0.3em] 2xl:mt-[3%]">
            <p className = "m-[1%]">
              <span className = "text-[#415A77]">Осенью 2016 года</span> Стив вернулся в Питтсбург, чтобы попытаться спасти брак
              и пройти терапию вместе с супругой.
              <span className = "text-[#415A77]"> В ноябре</span> он смог собрать более 13 000 долларов через краудфандинг. К
              счастью, игра начала привлекать внимание
              крупных ютуберов, которые начали проходить первый эпизод. <span className = "text-[#415A77]">Это сильно помогло в популяризации Sally Face</span>.
              <span className = "text-[#415A77]"> В декабре</span> Гэбри выпустил игру в <span className = "text-[#415A77]">Steam</span>, 
              и она получила тёплый приём. Это позволило ему наконец-то полностью сосредоточиться на создании игры, не беспокоясь о финансах.
            </p>
            <p className = "m-[1%]">
              Однако вскоре произошла <span className = "text-[#415A77]">новая трагедия</span>: один из близких родственников Стива пропал,
              оставив записку, намекающую на суицид. <span className = "text-[#415A77]">Это были самые тяжёлые недели в жизни разработчика</span>.
            </p>
          </div>
          <div className="float-right w-[44%] text-justify mt-[3%] mr-[1.5%] mb-[5%] font-boopee text-[0.4em] filter drop-shadow-[0_0_20px_rgba(0,0,0,0.497)]
            lg:text-[1.65em] lg:mt-[3%]
            2xl:text-[2.4em] 2xl:pt-[0.3em] 2xl:mt-[3%]">
            <p className = "m-[1%]">
              <span className = "text-[#415A77]">К счастью</span>, его нашли живым, и после долгого восстановления ситуация улучшилась.
              <span className = "text-[#415A77]"> Но это событие сильно замедлило разработку второго эпизода</span>. Даже после
              возвращения домой Гэбри долго боролся с депрессией.
            </p>
            <p className = "m-[1%]">
              Работа над вторым эпизодом помогла Стиву справиться с внутренними переживаниями.
              Однако <span className = "text-[#415A77]">весной 2017 года</span> брак окончательно распался, и жена ушла к другому человеку.
              Гэбри с супругой были вместе <span className = "text-[#415A77]">8 лет</span>, и это стало <span className = "text-[#415A77]">огромным ударом</span> для него.
              Разработка игры на какое-то время остановилась.
            </p>
            <p className = "m-[1%]">
              Со временем Стив смог снова сосредоточиться на работе.
              <span className = "text-[#415A77]"> Создание игры помогло ему выйти из депрессии</span>. Вдохновение давали отзывы и
              поддержка фанатов, которые ждали продолжения.
            </p>
          </div>
        </section>

        <div className="absolute mt-[37%] w-[100%]
          lg:mt-[39%]
          2xl:mt-[45em]">
          <Footer />
        </div>

    </HistoryLayout>
    </div>
  );
};

export default History;



// const History = () => {
//   return (
//     <div>
//         <section className = 'sec1'>
//             <Header></Header>

//             <section className = "cover21">
//                 <div className = "titles21">
//                     <h2 className = "title20">История</h2>
//                     <h1 className = "subtitle21">создания</h1>
//                 </div>
//                 <img src = { snow } className = "snow" alt = ''/>
//             </section>

//             <section className = "block21">
//                 <h2 className = "title21">Первые идеи</h2>
//                 <p className = "text21">
//                     Примерно в <span className = "blue-text">2006</span> или <span className = "blue-text">2007 году</span> Стив нарисовал
//                     жутковатого персонажа,
//                     и внезапно ему в голову пришло имя – «<span className = "blue-text">Sally Face</span>». В течение
//                     следующих недель Гэбри стал представлять, каким был бы этот герой.
//                     Мальчик с лицом девочки, живущий в многоквартирном доме, полном
//                     странных жильцов. Его лучший друг – ленивый растаман в плаще,
//                     который бы жил в подвале. <span className = "blue-text">Так родились образы Сала и Ларри.</span>
//                 </p>
//                 <p className = "text21">
//                     Спустя несколько месяцев Стив уже придумал биографию для Сала, а
//                     также мир, в котором он живёт. Постепенно сформировался ансамбль
//                     персонажей и множество историй, которые можно было бы рассказать в
//                     этой вселенной. <span className = "blue-text">Целью</span> Гэбри было создать нечто, напоминающее
//                     мультфильмы 90-х, такие как <span className = "blue-text">Doug, Ren and Stimpy</span>, <span className = "blue-text">Hey
//                     Arnold!</span> или <span className = "blue-text">Rock’s Modern Life</span>, но с более мрачными темами и
//                     зрелыми сюжетами.
//                 </p>
//             </section>

//             <div className = "block22">
//                 <p className = "text22">
//                     Позже Стив собрал нескольких друзей, которые увлекались рисованием и анимацией, чтобы создать мультсериал по
//                     мотивам Sally Face. <span className = "lightblue-text">Все были в восторге от идеи</span>, 
//                     поэтому команда с энтузиазмом начала работу. Но из-за занятости на работе и учёбе никто не мог уделять
//                     проекту достаточно времени. Через некоторое время команда распалась, и идея мультсериала ушла в долгий ящик.
//                     Sally Face оставалась в глубинах сознания ещё <span className = "lightblue-text">семь лет</span>, пока Гэбри
//                     занимался другими проектами.
//                 </p>
//             </div>

//             <section className = "block23">
//                 <h2 className = "title22">Возвращение к идее</h2>
//                 <p className = "text23">
//                     В <span className = "lightblue-text">2010 году</span> Стив вместе с друзьями основал небольшую инди-студию
//                     <span className = "lightblue-text"> Wither Studios</span>. В <span className = "lightblue-text">2013 году</span> они
//                     выпустили мобильную
//                     игру <span className = "lightblue-text">Crowman & Wolfboy</span>. Она получила хорошие отзывы от игроков и
//                     критиков, а количество загрузок превысило 600 000. Однако финансово
//                     проект оказался <span className = "lightblue-text">провальным</span>. Студия планировала расширения
//                     и дополнения для игры, но из-за нехватки средств от идеи пришлось
//                     отказаться. Это сильно огорчило Гэбри, ведь у него были грандиозные
//                     планы на продолжение.
//                 </p>
//                 <p className = "text23">
//                     К <span className = "lightblue-text">концу 2014 года</span> команда столкнулась с трудностями в поиске нового
//                     направления, и двое из участников ушли. Это был тяжёлый удар, так
//                     как они были не только отличными художниками, но и друзьями Стива.
//                 </p>
//                 <p className = "text23">
//                     Эти события подтолкнули Гэбри к мысли заняться собственным
//                     проектом. Sally Face <span className = "lightblue-text">снова возникла в сознании</span>. Стив подумал, что из
//                     этой идеи могла бы получиться отличная приключенческая игра. В <span className = "lightblue-text">2015
//                     году</span> он пересмотрел оригинальную концепцию и адаптировал её <span className = "lightblue-text">под
//                     формат игры из пяти эпизодов</span>. Гэбри начал работу над первым
//                     эпизодом в свободное время, параллельно с основной работой и
//                     участием в деятельности Wither Studios.
//                 </p>
//             </section>

//             <section className = "block24">
//                 <h2 className = "title23">Личная борьба</h2>
//                 <p className = "text24">
//                     В <span className = "lightblue-text">феврале 2016 года</span> Стив неожиданно потерял работу из-за массовых
//                     сокращений.
//                     Поиски новой работы <span className = "lightblue-text">шли плохо</span>, и он решил сосредоточиться на завершении
//                     первого эпизода Sally Face. У Гэбри были кое-какие сбережения, а также выплаты по безработице,
//                     поэтому он мог позволить себе сделать паузу в поисках работы. Но выбор привёл к серьёзным
//                     разногласиям с <span className = "lightblue-text">супругой</span>, которая 
//                     <span className = "lightblue-text"> не поддерживала</span> стремления Стива и категорически отказалась идти на компромисс. 
//                     Это стало причиной большого разлада в их отношениях.
//                 </p>
//                 <p className = "text24">
//                     <span className = "lightblue-text">Тем летом</span> Гэбри переехал к родителям, чтобы разобраться в ситуации.
//                     В этот период он завершил разработку первого эпизода Sally Face: <span className = "lightblue-text">Странные соседи</span>.
//                     Он был выпущен в <span className = "lightblue-text">августе 2016 года</span> на платформе <span
//                     className = "lightblue-text">itch.io</span>, но продажи были <span className = "lightblue-text">крайне низкими</span>. 
//                     Гэбри изо всех сил старался привлечь внимание к игре, но успеха не было. Денежные средства
//                     начали заканчиваться, поэтому он решил запустить <span className = "lightblue-text">краудфандинговую
//                     кампанию</span>, чтобы привлечь финансирование и внимание.
//                 </p>
//             </section>

//             <section className = "block25">
//                 <h2 className = "title24">Первые успехи и новые испытания</h2>
//                 <div className = "text25">
//                     <p className = "text27">
//                         <span className = "blue-text">Осенью 2016 года</span> Стив вернулся в Питтсбург, чтобы попытаться спасти брак
//                         и пройти терапию вместе с супругой.
//                         <span className = "blue-text"> В ноябре</span> он смог собрать более 13 000 долларов через краудфандинг. К
//                         счастью, игра начала привлекать внимание
//                         крупных ютуберов, которые начали проходить первый эпизод. <span className = "blue-text">Это сильно помогло в
//                         популяризации Sally Face</span>.
//                         <span className = "blue-text">В декабре</span> Гэбри выпустил игру в <span className = "blue-text">Steam</span>, и
//                         она получила тёплый приём. Это позволило ему наконец-то полностью сосредоточиться
//                         на создании игры, не беспокоясь о финансах.
//                     </p>
//                     <p className = "text27">
//                         Однако вскоре произошла <span className = "tblue-text">новая трагедия</span>: один из близких родственников
//                         Стива пропал,
//                         оставив записку, намекающую на суицид. <span className = "blue-text">Это были самые тяжёлые недели в жизни
//                         разработчика</span>.
//                     </p>
//                 </div>

//                 <div className = "text26">
//                     <p className = "text27">
//                         <span className = "blue-text">К счастью</span>, его нашли живым, и после долгого восстановления ситуация
//                         улучшилась.
//                         <span className = "blue-text"> Но это событие сильно замедлило разработку второго эпизода</span>. Даже после
//                         возвращения домой Гэбри долго боролся с депрессией.
//                     </p>
//                     <p className = "text27">
//                         Работа над вторым эпизодом помогла Стиву справиться с внутренними переживаниями.
//                         Однако <span className = "blue-text">весной 2017 года</span> брак окончательно распался, и жена ушла к другому
//                         человеку.
//                         Гэбри с супругой были вместе <span className = "blue-text">8 лет</span>, и это стало 
//                         <span className = "blue-text">огромным ударом</span> для него. Разработка игры на какое-то время остановилась.
//                     </p>
//                     <p className = "text27">
//                         Со временем Стив смог снова сосредоточиться на работе.
//                         <span className = "blue-text"> Создание игры помогло ему выйти из депрессии</span>. Вдохновение давали отзывы и
//                         поддержка фанатов, которые ждали продолжения.
//                     </p>
//                 </div>
//             </section>

//             {/* <img src = { texture2 } className = "texture" alt = ''/> */}
//         </section>

//         <Footer></Footer>
//     </div>
//   )
// }

// export default History