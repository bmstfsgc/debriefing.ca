import Image from "next/image";
import React from "react";

type Props = {
  icon : object;
  type: string;   
  url:string;
  title: string;
  id:string;
  children: React.ReactNode;
  open: boolean;
  onClick: () => void;
};

export const AccordionItem = ({
  icon,
  type,  
  url,
  title,
  id,
  children,
  onClick,
  open = false,
}: Props,


) => {
  
  return (
    <article className="w-full select-none" >
      <div
        onClick={onClick}
        className="flex cursor-pointer items-center justify-between py-1"
      >
       
        <span className="text-darkPurple flex-left font-semibold lg:text-lg flex flex-row"> <span>{icon as React.ReactNode}</span>&nbsp;<span>
          
             <a className="h-full cursor-pointer " href={url} >{title}</a>
              
        </span></span>

        {children && 
        (open ? (
          <Image
            alt=""
            src="/static/images/icon-minus.svg"
            width={0}
            height={0}
            className="h-[30px] w-[30px] "
          />
        ) : (
          <Image
            src="/static/images/icon-plus.svg"
            alt=""
            width={0}
            height={0}
            className="h-[30px] w-[30px] "
          />
        ))
        
        }
      </div>
      
      {children &&  open && (
        <span className="text-palePurple   font-normal ">
          {children}
        </span>
      )}
      
    </article>
  );
};