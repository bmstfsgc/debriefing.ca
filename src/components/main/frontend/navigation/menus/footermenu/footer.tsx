"use client"

import React from 'react'
import {menutype,submenutype,menusettingstype} from "@/components/main/frontend/navigation/links/menutypes";
import {HeaderMenuLinks,HeaderMenuSettings} from "@/components/main/frontend/navigation/links/addvent10_links";

import Link from "next/link";
import { usePathname, useSearchParams } from 'next/navigation'
import {FooterProps} from "./types"

import { FaAngleUp } from "react-icons/fa6";



const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

const Footer = ({...props}:FooterProps) => {


    const footer_className=props.footer_className;
    

    const handleClick = () => {
        scrollToTop();
      };

      
//<div className={`mx-auto  max-w-7xl  z-50 `}></div>
    return (

<>
        <div className={`w-full  z-50 bg-producedbycolor `}>
            <div className={`mx-auto  max-w-7xl  z-50 `}>
              <p className="text-white item-center justify-center flex  py-8 text-center">{props.footer_message[`producedby`]}</p>

             </div>
        </div>



        <div className={`w-full  z-50 bg-footercolor `}>
            <div className={`mx-auto  max-w-7xl  z-50 `}>
              <div className="flex  items-center  w-full " aria-label="Global">
      
        
                    <div className={"flex flex-row w-full justify-between h-16 items-center px-5  "+HeaderMenuSettings.background} aria-label="Global">
                        <p className=" text-menucolor max-md:text-[12px] " >{props.footer_message['footer']}</p>
                       
                        <button  onClick={handleClick}  className={`
                                   border-menuhighlight bg-menuhighlight text-menucolor 
                                   hover:bg-menuhighlight/95 active:bg-menuhighlight/80 flex
                                   items-center justify-center  p-2 text-2xl
                                   transition duration-200 hover:cursor-pointer `+  footer_className}>
                                   <FaAngleUp className="" />
                                   </button>
                    </div>
            </div>
        </div>
        </div>
    </>
      
    
    )

}

export default Footer;