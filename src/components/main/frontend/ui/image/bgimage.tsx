"use client"
import React, {useState,useEffect} from "react"
//import Image from 'next/image'
//import {loadImage} from "./loadimage"
import {linkloader,imagePreLoader} from "./linkloader"
import './styles.css'



const Bgimage=(props:any) =>
{
    const [loaded, setLoaded] = useState(false)

    const preloadsrc=props.preloader;
    const imgsrc=props.src;
    const width=props.width? " w"+"-["+props.width+"] " : ' w-full ';
    const height=props.height?" h"+"-["+props.height+"] " : ' h-full ';
   
    var preloader_src=` bg`+`-[url('`+preloadsrc+`')] `;
    var img_src= ` bg`+`-[url('`+imgsrc+`')] `;

   // useEffect(()=> {
   // if(window)
   //     imagePreLoader(imgsrc);
   // },[]);

/*
  useEffect(()=>
  {
        const image = new Image()
        image.src = imgsrc;
        image.onload = function(){
                    setTimeout(() => {
                        setLoaded(true)    
                }, 0); 
        }
  })
*/

 //console.log(preloader_src)
 //bg-[url('/static/images/site/home/banner11-980x525-mono.jpg')] 
 //bg-[url('/static/images/site/home/banner11-980x525-mono.jpg') 
 //bg-[url('/static/images/site/home/banner11-980x525.jpg')] 
 /*
 return (
        <>
        <img src={props.src} style={{opacity:0,display:'none'}}    onLoad={(e) =>   {
        setTimeout(() => {
                setLoaded(true)    
        }, 5000); 
        }}
        />

        {!loaded && (   <div className={"   "+width+"  "+height+" bg-[url('/static/images/site/home/banner11-980x525-mono.jpg')] "   + " bg-auto relative bg-no-repeat bg-cover items-center  bgimage "  }>
             
            {props.children}
            
        </div>)}
        {loaded && (   <div className={"    "+width+"  "+height+  "  bg-[url('/static/images/site/home/banner11-980x525.jpg')]   "  +"bg-auto relative bg-no-repeat bg-cover items-center   bgimage" }>
        
            {props.children}
        </div>)
         }     
        </>
    )
*/


/*
    return (
        <>

        
        {!loaded && (   <div className={"   "+width+"  "+height+  " bg-auto relative bg-no-repeat bg-cover items-center  bgimage bg-gray-600 "  }>
             
            {props.children}
            
        </div>)}
        {loaded && (   <div className={"    "+width+"  "+height+  img_src  +"bg-auto relative bg-no-repeat bg-cover items-center   bgimage" }>
        
            {props.children}
        </div>)
         }     
        </>


    )

       bg-[url('/static/images/site/home/banner11-980x525.webp')]  
       <div className={" absolute    "+width+"  "+height+  "  " + img_src  +"  bg-auto relative bg-no-repeat bg-cover items-center   bgimage" }>
       
    */


    return (
        <>
        
        <div className={"   "+width+"  "+height} >
      
                    <div className={" absolute    "+width+"  "+height+  "   " + img_src  +"  bg-auto relative bg-no-repeat bg-cover items-center   bgimage" }>
                    {props.children}
                    </div>    

         </div>    
        </>


    )

    

}

export default Bgimage;