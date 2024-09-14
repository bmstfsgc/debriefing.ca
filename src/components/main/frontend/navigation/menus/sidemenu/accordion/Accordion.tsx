"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AccordionItem } from "./AccordionItem";
import { Line } from "./Line";
import {menutype,submenutype} from "@/components/main/frontend/navigation/links/menutypes";




type Props = {locale:any,menuitems:Array<menutype>,menusettings:object,menutranslations:any}
export const Accordion =(props: Props) =>{
  const [indexopen, setIndexOpen] = useState<number>(99999);

  const handleClick = (index: number) => {
    setIndexOpen(index === indexopen ? 9999 : index);
  };
//  const itemsOndData = Object.keys(Data).length;
  var MenuItems=props.menuitems;
  var MenuSettings=props.menusettings;
  var messages=props.menutranslations;
  var locale=props.locale;
//  console.log("messages :"+messages);

  return (
    <section  className="flex w-full max-w-[375px] flex-col items-center  lg:max-w-[600px] lg:p-10">
      {/*}
      <div className="flex w-full items-center justify-start gap-[24px] pb-6 lg:pb-0">
        <Image
          alt=""
          src="/icon-star.svg"
          width={0}
          height={0}
          className="h-8 w-8"
          unoptimized
        />
     </div>
      
      {Data.map((item, index) => (
      */}

{MenuItems.map((item,index) => (
        <React.Fragment key={item.id}>
        
        {item.items && <AccordionItem
            icon={item.icon}
            url={"/"+locale+"/"+item.to}
            type="link"
            id={item.id}
            open={index === indexopen}
            title={messages[item.id]}
            onClick={() => handleClick(index)}
            
           ><Accordion  locale={locale}  menusettings={MenuSettings}  menuitems={item.items as Array<menutype>}  menutranslations={props.menutranslations}/></AccordionItem>}
            
        
        
        
        
        {!item.items && <AccordionItem 
            type="link"
            icon={item.icon}
            url={"/"+locale+"/"+item.to}
            id={item.id}
            open={index === indexopen}
            title={messages[item.id]}
            onClick={() => handleClick(index)}
            >{null}</AccordionItem>}
              
             


          {/*
          {itemsOndData - index < 2 ? null : <Line />}
          */}

        </React.Fragment>
      ))}
    </section>
  );
};