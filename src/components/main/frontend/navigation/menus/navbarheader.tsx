"use client"
//import { useRouter,usePathname } from 'next/navigation'

//import { headers } from 'next/headers';
//import {useRouter, usePathname} from 'next/navigation';
//import {useRouter} from "next/router";

//import { usePathname, useRouter } from "next-intl/client";
import {useTranslations, useLocale} from 'next-intl'
//import { startTransition,useTransition } from 'react';


import {useParams} from 'next/navigation';
import {ChangeEvent, ReactNode, useTransition} from 'react';
import {useRouter, usePathname} from './navigation';


import {Mainmenu} from "@/components/main/frontend/navigation/menus/mainmenu/mainmenu";
import { useEffect, useState, useCallback } from "react";
import SidebarMenu from "./sidemenu/sidebarmenu"
import Link from "next/link";
import {HeaderMenuLinks,HeaderMenuSettings} from "@/components/main/frontend/navigation/links/debriefing_links";
//import {HeaderMenuLinks,HeaderMenuSettings} from "@/components/main/frontend/other/links/headermenu_links";
//import {DashboardLinks} from "@/components/main/frontend/other/links/dashboard_links";
import LogoHeader from "@/components/main/frontend/navigation/menus/logo/logoheader";

import AppManager from '@/components/other/infra/_manager/appmanager';
var aData = AppManager.getData;
var aFunc = AppManager.getFunctions;
var aCallbacks = AppManager.getCallbacks;

//rafce





const LangSwitcher= (props:any) => {
  //const [lang,setLang]=useState("en")
  const locale = props.locale;
  const [checked, setChecked] = useState(locale=='en'?true:false);

  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  
  //const pathname = usePathname()

  
  
function handleClick(e:any) {
  e.preventDefault();
  

  const nextLocale= (checked)? 'fr' : "en";
  

  
  startTransition(() => {
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      {pathname, params},
      {locale: nextLocale}
    );
  //  setLang(selectedLang);  
  
  })
  //console.log(" handleClick  :"+lang)
}





    var switch_thumb_color=' bg-[#223F90] ';
    var switch_background_color=' bg-[#111163] ';
    var switch_color=' bg-[#fff] ';


  

    return (
      <>
      
      <div className="  cursor-pointer ">
        <label className="relative inline-block w-[48px] md:w-[64px] h-[27px] md:h-[36px]  rounded-full rotate-[270deg]  border border-solid border-gray-400 ">
            <input type="checkbox"  defaultChecked={!checked}
            onChange={() => setChecked((state) => !state)}  
        
            disabled={isPending} className="peer opacity-0 w-0 h-0" onClick={handleClick}/>
            <span className={`absolute cursor-pointer top-0 left-0 right-0 bottom-0 rounded-full duration-300 `+ switch_background_color +` opacity-30
             peer-checked:`+switch_background_color}
            ></span>
            <div className="rotate-90 flex flex-col  cursor-pointer ">
            <div className="absolute  text-[8px] md:text-[12px]  top-[-20px] right-7 md:top-[-25px] md:right-8  text-white font-bold "> En </div>
            <div className="absolute  text-[8px] md:text-[12px]  top-[-0px]  right-7 md:top-[5px]  md:right-8  text-white font-bold "> Fr </div>
            </div>

            <span className={`absolute cursor-pointer h-5 w-5 bottom-1 right-8 md:w-7 md:h-7  left-1 rounded-full border border-solid border-slate-500 opacity-90 
                    ` + switch_thumb_color + ` duration-300 
                    peer-checked:translate-x-5  md:peer-checked:translate-x-7 p-0 md:p-1 peer-checked:`+switch_thumb_color}>
{/*}
                <div className="absolute  text-[8px] md:text-[12px]  top-[-20px] right-7 md:top-[-25px] md:right-8  text-white font-bold "> En </div>
    */}

                </span>
        </label>
    </div>

                            
      </>);
    
}


interface menuProps
{
  menutranslations:any
}

const NavBarHeader= (props:menuProps) => {

  const locale = useLocale()




  const active = 'text-lg font-bold px-6  rounded leading-6 text-primary';
  const inActive = 'text-lg font-bold px-6   rounded leading-6 text-primary';
  
  const[toggled,setToggled] = useState(false);
  

  aCallbacks.call(aCallbacks.Message.showSideBarMenu, toggled);

  const handleToggleBody  = () => {
    
    //console.log('hello')
    //props.callback(!toggled)
    setToggled(!toggled)
  }

 //{toggled && <SidebarMenu />}
// {toggled && <SidebarMenu locale={locale}  callback={handleToggleBody} menutranslations={props.menutranslations}/>}

    
/*
<div className="flex md:hidden text-white   jusify-center items-center z-10 ">
        <div className="flex items-left ">
                        <span onClick={handleToggleBody}   className=" cursor-pointer ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                       </span>
              </div>
      </div>
*/     



  return (
    <>

   {toggled && <SidebarMenu locale={locale}  callback={handleToggleBody} menutranslations={props.menutranslations}/>}

    <div className={`sticky  top-0 z-10 bgpattern    bg-gradient-to-r from-blue-900 to-blue-700`}>
    
    <nav className="flex mx-auto  max-w-7xl  items-center px-2 md:px-3 lg:px-8 " aria-label="Global">
    
    <div className="flex  md:flex-col h-[100px] max-md:h-[64px] justify-between line-clamp-1 w-full "> 

    <div className="flex md:hidden text-white   jusify-center items-center z-10 ">
        <div className="flex items-left ">
                        <span onClick={handleToggleBody}   className=" cursor-pointer ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                       </span>
              </div>
      </div>
      


    

      
      <div className={"justify-between h-full flex w-full right-0  "} aria-label="Global">

      <LogoHeader menutranslations={props.menutranslations}/>      

                        <div className=" flex  md:w-full justify-end items-center ">


                          <div id="flyoutmenu1"  className=" max-md:hidden md:w-full  md:flex  items-center justify-end  py-4 text-[18px] font-bold  font-header ">
                          <Mainmenu  locale={locale} menutranslations={props.menutranslations} menusettings={HeaderMenuSettings} menuitems={HeaderMenuLinks}/>
                          </div>
                        
                        
                          
                          <div  className="  flex items-center  ">
                                    <LangSwitcher locale={locale}/>
                          </div>



                          </div>

      </div>



{/*}

      <div className="flex md:hidden justify-end">
            <div className="flex ">
                <a href="/" className="logo flex items-center gap-1 text-lg text-red-600">
                    <button className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-900 hover:text-red-600 transition duration-100'>
              
                      <svg  height="24px" version="1.1" viewBox="0 0 48 48" width="24px" >
                              <g id="Expanded"><g><g><path d="M26,48h-4c-1.654,0-3-1.346-3-3v-3.724c-1.28-0.37-2.512-0.881-3.681-1.527l-2.634,2.635     c-1.134,1.134-3.109,1.132-4.243,0l-2.829-2.828c-0.567-0.566-0.879-1.32-0.879-2.121s0.312-1.555,0.879-2.121l2.635-2.636     c-0.645-1.166-1.156-2.398-1.525-3.679H3c-1.654,0-3-1.346-3-3v-4c0-0.802,0.312-1.555,0.878-2.121     c0.567-0.566,1.32-0.879,2.122-0.879h3.724c0.37-1.278,0.88-2.511,1.526-3.679l-2.634-2.635c-1.17-1.17-1.17-3.072,0-4.242     l2.828-2.829c1.133-1.132,3.109-1.134,4.243,0l2.635,2.635C16.49,7.604,17.722,7.093,19,6.724V3c0-1.654,1.346-3,3-3h4     c1.654,0,3,1.346,3,3v3.724c1.28,0.37,2.512,0.881,3.678,1.525l2.635-2.635c1.134-1.132,3.109-1.134,4.243,0l2.829,2.828     c0.567,0.566,0.879,1.32,0.879,2.121s-0.312,1.555-0.879,2.121l-2.634,2.635c0.646,1.168,1.157,2.4,1.526,3.68H45     c1.654,0,3,1.346,3,3v4c0,0.802-0.312,1.555-0.878,2.121s-1.32,0.879-2.122,0.879h-3.724c-0.37,1.28-0.881,2.513-1.526,3.68     l2.634,2.635c1.17,1.17,1.17,3.072,0,4.242l-2.828,2.829c-1.134,1.133-3.109,1.133-4.243,0L32.68,39.75     c-1.168,0.646-2.401,1.156-3.679,1.526V45C29,46.654,27.655,48,26,48z M15.157,37.498c0.179,0,0.36,0.048,0.521,0.146     c1.416,0.866,2.949,1.502,4.557,1.891C20.684,39.644,21,40.045,21,40.507V45c0,0.552,0.449,1,1,1h4c0.551,0,1-0.448,1-1v-4.493     c0-0.462,0.316-0.863,0.765-0.972c1.606-0.389,3.139-1.023,4.556-1.89c0.396-0.241,0.902-0.18,1.229,0.146l3.178,3.179     c0.375,0.374,1.039,0.376,1.415,0l2.828-2.829c0.39-0.39,0.39-1.024,0-1.414l-3.179-3.179c-0.327-0.326-0.387-0.835-0.146-1.229     c0.865-1.414,1.5-2.947,1.889-4.556c0.108-0.449,0.51-0.766,0.972-0.766H45c0.267,0,0.519-0.104,0.708-0.293     C45.896,26.518,46,26.267,46,25.999v-4c0-0.552-0.449-1-1-1h-4.493c-0.462,0-0.864-0.316-0.972-0.766     c-0.388-1.607-1.023-3.14-1.889-4.556c-0.241-0.394-0.181-0.901,0.146-1.229l3.179-3.179c0.186-0.187,0.293-0.444,0.293-0.707     s-0.107-0.521-0.293-0.707l-2.829-2.828c-0.378-0.377-1.037-0.377-1.415,0l-3.179,3.179c-0.326,0.328-0.833,0.389-1.229,0.146     c-1.413-0.864-2.945-1.5-4.554-1.889C27.317,8.356,27,7.955,27,7.493V3c0-0.552-0.449-1-1-1h-4c-0.551,0-1,0.448-1,1v4.493     c0,0.462-0.316,0.863-0.765,0.972c-1.606,0.388-3.139,1.023-4.556,1.889c-0.395,0.241-0.902,0.181-1.228-0.146l-3.179-3.179     c-0.378-0.377-1.037-0.377-1.415,0L7.03,9.857c-0.39,0.39-0.39,1.024,0,1.414l3.179,3.179c0.327,0.326,0.387,0.835,0.146,1.229     c-0.866,1.416-1.501,2.949-1.889,4.555c-0.108,0.449-0.51,0.766-0.972,0.766H3c-0.267,0-0.519,0.104-0.708,0.293     C2.104,21.48,2,21.731,2,21.999v4c0,0.552,0.449,1,1,1h4.493c0.462,0,0.864,0.316,0.972,0.766     c0.389,1.608,1.024,3.141,1.889,4.555c0.241,0.394,0.181,0.901-0.146,1.229l-3.179,3.18c-0.186,0.187-0.293,0.444-0.293,0.707     s0.107,0.521,0.293,0.707l2.829,2.828c0.377,0.377,1.037,0.377,1.415,0l3.178-3.179C14.643,37.598,14.898,37.498,15.157,37.498z"/></g>
                              <g><path d="M24,34c-5.514,0-10-4.486-10-10s4.486-10,10-10s10,4.486,10,10S29.515,34,24,34z M24,16c-4.411,0-8,3.589-8,8     s3.589,8,8,8s8-3.589,8-8S28.412,16,24,16z"/></g>
                              </g>
                              </g></svg>

                    </button>
                </a>
          </div>
      </div>
                        */}



    
      </div>
    </nav>
  </div>
  
  </>
  )
}



export default NavBarHeader