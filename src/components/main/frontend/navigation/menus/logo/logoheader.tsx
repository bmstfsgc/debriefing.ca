import {useTranslations, useLocale} from 'next-intl'
import {useParams} from 'next/navigation';
import {ChangeEvent, ReactNode, useTransition} from 'react';
import { useEffect, useState, useCallback } from "react";
import Link from "next/link";

const LogoHeader= (props:any) => {

  var messages=props.menutranslations;
    
  
  
   return (
       
                              <div className=" w-[280px] max-md:w-full items-center max-md:justify-center flex ">
                                  <Link href={"/"+props.locale} className="logo flex-col flex px-4 items-left justify-start text-white font-bold ">
                                    <p className=" text-[16px] md:text-[20px]  lg:text-[24px]   ">{messages[`violentincident`]}</p>
                                    <p className="  text-[10px] md:text-[10px] lg:text-[12px] ">{messages[`debriefingtrainingmodule`]}</p>
                                </Link>
                              </div>
                              
        );
      
  }

  export default LogoHeader;