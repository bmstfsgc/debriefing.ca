import React, { useState } from "react";
import "./style.css"

type SliderProps = {
    duration:number;
    children: React.ReactNode;
    start: string;
    //onClick: () => void;
  };
  
  
  const RollingSlider = ({ children, duration = 12, start = '' }:SliderProps) => {
  
    const count = React.Children.toArray(children).length
    const sx = {
      // ...
      left: start,
      animationDuration: `${duration * count}ms`,
    }
  
    return (
      <div className="container">
        <div className="content" style={sx}>
          {children}
        </div>
        <div className="content" style={sx}>
          {children}
        </div>
      </div>
    )
  }
  
  export default RollingSlider;