import React, { Children, useState } from 'react';
import {IconContext} from "react-icons";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import {CarousalProps} from "./types"



  
const Carousel = ({children,...props}:CarousalProps) => {
  const [index, setIndex] = useState(0);
  const length = 3;
  const handlePrevious = () => {
    const newIndex = index - 1;
   setIndex(newIndex < 0 ? length - 1 : newIndex);
  };
  
  
  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  /*
  const arrow_color=props.arrow_color;
  const arrow_bg_color=props.arrow_bg_color;
  
  const arrow_hover_color=props.arrow_hover_color;
  const arrow_hover_bg_color=props.arrow_hover_bg_color;
  

  const arrow_size=props.arrow_size||30;
  const border_color=props.border_color||'border-zinc-200';
  const bg_color=props.bg_color||'bgr-white-200';
  const text_color=props.text_color|| 'text-zinc-800';
*/

const carousal_header_className=props.carousal_header_className;
const carousal_body_className=props.carousal_body_className;


const  arrayChildren=Children.toArray(children);



  
  return (
    <>
    <div className="carousel flex-col">
                <div className="grid justify-items-end">
                        <div className="flex px-0 py-4 gap-4 ">
                                   <button  onClick={handlePrevious}  className={`border-menuhighlight  text-menuhighlight  hover:text-menucolor  hover:bg-menuhighlight active:bg-menucolor flex items-center justify-center rounded-xl border-2 p-2 text-3xl
                                   
                                    transition duration-200 hover:cursor-pointer  ` + carousal_header_className}>
                                    <FaAngleLeft className="" />
                                    </button>

                                    <button  onClick={handleNext}  className={`border-menuhighlight text-menuhighlight  hover:text-menucolor hover:bg-menuhighlight active:bg-menucolor flex items-center justify-center rounded-xl border-2 p-2 text-3xl
                                   
                                   transition duration-200 hover:cursor-pointer `+  carousal_header_className}>
                                   <FaAngleRight className="" />
                                   </button>

                        </div>
                </div>
                <div className={"carousalcontainer p-2 "+ carousal_body_className}>

                    {
                    Children.map(
                        arrayChildren, (child, cindex) => (index==cindex && child)
                    )
                    }   
                     
                </div>      
    </div>
    </>
  );
};

export default Carousel;