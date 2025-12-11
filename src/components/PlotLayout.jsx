import React from 'react'
import bg3 from '../img/plot/plot.jpg'

const HomeLayout = ({ children }) => {
  return (
     <div className = "relative w-full overflow-x-hidden min-h-screen">
      <div 
        className = "absolute inset-0 -z-10 2xl:min-h-[885vh] lg:min-h-[710vh] min-h-[224vh]"
        style = {{
          backgroundImage: `url(${bg3})`,
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