import React from 'react'
import bg from '../img/main/main.jpg'

const HomeLayout = ({ children }) => {
  return (
     <div className = "relative w-full min-h-screen">
      <div 
        className = "absolute inset-0 -z-10 2xl:min-h-[300vh] lg:min-h-[240vh]"
        style = {{
          backgroundImage: `url(${bg})`,
          backgroundSize: '100%',
        }}
      />
      <div className = "relative z-20">
        {children}
      </div>
    </div>
  );
};

export default HomeLayout