import React, { Children, useState } from 'react';
import type { ReactNode, ReactElement, ReactPortal, PromiseLikeOfReactNode, ReactFragment } from 'react';

import {IconContext} from "react-icons";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import {BannerProps} from "./types"

//import  "./styles.css";
import  "./vslider_overlay.css";

interface StringArray {
  [index: string]: string;
}

const DEFAULT_CLASSNAMES:StringArray = {
	previousButton: 'previousButton',
	nextButton: 'nextButton',
	buttonDisabled: 'disabled',
	track: 'track',
	slide: 'slide',
	hidden: 'hidden',
	previous: 'previous',
	current: 'current',
	next: 'next',
	animateIn: 'animateIn',
	animateOut: 'animateOut',
};

// Separate out into its own function because Promise-like nodes require this to be recursive
export function addClassToNode(node: ReactNode, className: string): ReactNode {
  if (node == null) {
    node satisfies null | undefined

    return node
  }

  if (typeof node !== 'object') {
    node satisfies string | number | boolean

    // wrap in a span, somewhat arbitrary decision
    return <span className={className}>{node}</span>
  }

  if ('props' in node) {
    node satisfies ReactElement | ReactPortal

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const existing: unknown = node?.props?.className;
    if (existing && typeof existing === 'string') {
      className = `${existing} ${className}`
    }
    return React.cloneElement(node, { className })
  }

  if ('then' in node) {
    node satisfies PromiseLikeOfReactNode

    return node.then(n => addClassToNode(n, className))
  }

  node satisfies ReactFragment

  // wrap in div, somewhat arbitrary decision
  return <div className={className}>{node}</div>
}



const PREVIOUS = 'previous';
const NEXT = 'next';


const Banner = ({children,...props}:BannerProps) => {

  const arrayChildren=Children.toArray(children);
  const slideCount =arrayChildren.length;



  //const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const [state, setState] = useState({
    currentSlideIndex: 0,
    animating:false,
    animation: ''
  });
  


//  const updateCurrentSliderIndex = (currentSlideIndex:number) => setState((prev) => ({...prev, currentSlideIndex }));
//  const updateAnimating = (animating:boolean) => setState((prev) => ({...prev, animating}));
//  const updateAnimation = (animation:any) => setState((prev) => ({...prev, animation}));

  
  
//	const getClassNames = () => ({ ...DEFAULT_CLASSNAMES, ...props.classNames });
  const classNames=DEFAULT_CLASSNAMES;



  const goTo = (index:number, animation:string) => {
		setState({ ...state, ['currentSlideIndex']: index,['animating']:true,['animation']:animation });
		//const timeout = this.props.duration || DEFAULT_DURATION;
		//this.animationTimerId = setTimeout(this.onAnimationEnd, timeout);
	};

	const handlePrevious = () => {
		if (state.currentSlideIndex == 0) return;
		const nextSlideIndex = state.currentSlideIndex - 1;
		const actualNextSlide = nextSlideIndex >= 0 ? nextSlideIndex : slideCount - 1;
    setState({ ...state, ['currentSlideIndex']: actualNextSlide,['animating']:true,['animation']:PREVIOUS });
	};

	const handleNext = () => {
		if (state.currentSlideIndex == slideCount-1) return;
		const nextSlideIndex = (state.currentSlideIndex + 1) % slideCount;
		setState({ ...state, ['currentSlideIndex']: nextSlideIndex,['animating']:true,['animation']:NEXT });
	};




const banner_header_className=props.banner_header_className;
const banner_body_className=props.banner_body_className;
var  prevButtonClass=banner_header_className+' '
var  nextButtonClass=banner_header_className +' '

if(state.currentSlideIndex==0)
{
  prevButtonClass=prevButtonClass+' border-gray-600  '
  
}
if(state.currentSlideIndex==slideCount-1)
{
  nextButtonClass=nextButtonClass+' border-gray-600  '
}

const prevButton=banner_header_className+' '
const nextButton=banner_header_className +' '




 const getSlideClass=(index:number)=>
 {

  

      const currentSlideIndex=state.currentSlideIndex;
      const lastSlideIndex=slideCount-1
      const animation=state.animation;



      if (animation === NEXT) {

        
         if (index === currentSlideIndex-1) 
             return `${classNames.animateOut} ${classNames[animation]}`;
      
          if (index === currentSlideIndex) 
             return `${classNames.animateIn}  ${classNames[animation]}  `;
                      
        
          if (index === currentSlideIndex+1) 
             return `  ${classNames.next}  `;
             

        return classNames.hidden;
      }


      
    if (animation === PREVIOUS) {

     

       if (index === currentSlideIndex+1) 
           return `${classNames.animateOut} ${classNames[animation]}`;

           if (index === currentSlideIndex) 
           return `${classNames.animateIn}   ${classNames[animation]}`;

           
           if (index === currentSlideIndex-1) 
           return `   ${classNames.previous}  `;  
        
        return classNames.hidden;   
    }       
      

    if (animation === '') {
      if (index === currentSlideIndex) 
        return classNames.current;
      

        if (
          index === currentSlideIndex - 1 ||
          (currentSlideIndex === 0 && index === lastSlideIndex)
        )
        return classNames.previous;



        if (
          index === currentSlideIndex + 1 ||
          (index === 0 && currentSlideIndex === lastSlideIndex)
        )
        return classNames.next;


      return classNames.hidden;   
    }  
  /*
        if (index === currentSlideIndex) {
          if (animation) return `${classNames.animateOut} ${classNames[animation]}`;
          return classNames.current;
        }
        
        
        //if (slideCount === 2) {
        //  if (animation) return `${classNames.animateIn} ${classNames[animation]}`;
        //  return index < currentSlideIndex ? classNames.previous : classNames.next;
       // }
    
    
        if (
          index === currentSlideIndex - 1 ||
          (currentSlideIndex === 0 && index === lastSlideIndex)
        ) {
          if (animation === PREVIOUS) return `${classNames.animateIn} ${classNames.previous}`;
          if (animation === NEXT) return classNames.hidden;
          return classNames.previous;
        }
        if (
          index === currentSlideIndex + 1 ||
          (index === 0 && currentSlideIndex === lastSlideIndex)
        ) {
          if (animation === NEXT) return `${classNames.animateIn} ${classNames.next}`;
          if (animation === PREVIOUS) return classNames.hidden;
          return classNames.next;
        }
        */



        return classNames.hidden;
 }

const  subtract=(num1: number, num2: number)=>{
  return num1 - num2;
}

const getSlideClass1=(index:number)=>
{

    var classNames = getSlideClass(index)
    //classNames=classNames + " z-"+ subtract(20,index)+ " ";
    
    return classNames;

}


  
  return (
    <>
    <div className="slider relative w-full md:h-[500px] max-md:h-[300px]  bg-green-400 z-5">
                <div className="grid absolute right-5 bottom-5 items-end justify-end z-50">
                        <div className="flex  px-4 py-4 gap-2 opacity-90 ">
                                   <button  onClick={handlePrevious}  className={`previous border-brand-500 hover:bg-brand-600/10 active:bg-brand-700/10 flex items-center justify-center  border-2 p-2 text-1xl
                                   
                                    transition duration-200 hover:cursor-pointer  ` + prevButtonClass}>
                                    <FaAngleLeft className="text-brand-500" />
                                    </button>

                                    <button  onClick={handleNext}  className={`next border-brand-500 hover:bg-brand-600/10 active:bg-brand-700/10 flex items-center justify-center border-2 p-2 text-1xl
                                   
                                   transition duration-200 hover:cursor-pointer `+  nextButtonClass}>
                                   <FaAngleRight className="text-brand-500" />
                                   </button>

                        </div>
                </div>
                <div className={"track w-full  "+ banner_body_className}>

                   {/*
                    {
                    Children.map(
                        arrayChildren, (child, cindex) => (index==cindex? (<div className={`show`}>{child}</div>):(<div className={`hide `}>{child}</div>)
                      ))
                    }   
                  */}

                    {React.Children.map(arrayChildren, (item:ReactNode, index) => (
                     // @ts-ignore
                     React.cloneElement(item.props.children[0] as React.ReactElement<any>, {
                      key: index,
                      className: ['slide',getSlideClass1(index) , props.className].filter(v => v).join(' '),
                    })
                  ))}  

{React.Children.map(arrayChildren, (item:ReactNode, index) => (
                     // @ts-ignore
                     React.cloneElement(item.props.children[1] as React.ReactElement<any>, {
                      key: index,
                      // @ts-ignore
                      className: [' slide-tooltip ',getSlideClass1(index) ,item.props.children[1].props.className].filter(v => v).join(' '),
                    })
                  ))}  

                </div>      
    </div>
    </>
  );
};

export default Banner;

