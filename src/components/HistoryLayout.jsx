import React from 'react'
import bg2 from '../img/history/history.jpg'

const HomeLayout = ({ children }) => {
  return (
     <div className = "relative w-full min-h-screen">
      <div 
        className = "absolute inset-0 -z-10 2xl:min-h-[530vh] lg:min-h-[430vh] min-h-[105vh]"
        style = {{
          backgroundImage: `url(${bg2})`,
          backgroundSize: '100%',
          backgroundAttachment: 'scroll',
        }}
      />
      <div className = "relative z-20">
        {children}
      </div>
    </div>
  );
};

export default HomeLayout