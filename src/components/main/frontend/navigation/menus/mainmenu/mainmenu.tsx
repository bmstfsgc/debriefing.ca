import React from 'react'
import {menutype,submenutype,menusettingstype} from "@/components/main/frontend/navigation/links/menutypes";
import Link from "next/link";

import { usePathname, useSearchParams } from 'next/navigation'
import "./menu.css";

type Props = {locale:string,menuitems:Array<menutype>,menusettings:menusettingstype,menutranslations:any}

export const Mainmenu =(props: Props) =>{

    const pathname = usePathname()
    //const searchParams = useSearchParams()
    const locale = props.locale;
    var MenuItems=props.menuitems;
    var MenuSettings=props.menusettings;
    var messages=props.menutranslations;
    
  
  const active = ' bg-menuhighlight  ';
  const inActive = ' bg-transparent  ';
  var hiddenmenu=false;

  //{messages[`${item.id}`]}

  return(
   <div   className={" flex flex-row gap-"+ messages[`menugap`]}>
   

{MenuItems.map((item,index) => (

    

        (() => {
        

            

            if(!item.multiple)
            {
                var show_menu="";

                if(index==3)
                {
                    show_menu="  max-[800px]:hidden "
                }
                
                if(index==4)
                {
                    show_menu="  max-[900px]:hidden "
                }

                if(index==5)
                {
                    show_menu="  max-[1000px]:hidden "
                }

                var route=item.id;
                var new_pathname=pathname.replace('/', '');
                
                
                var menuactive=new_pathname.includes(route)
                var decorator=menuactive?active:inActive;

                if(new_pathname=="")
                {
                    if (route=="home")
                        decorator=active;
                    else
                        decorator=inActive;
                }    

             
                return (   
                    <Link href={"/"+locale+"/#"+item.id} className={"relative cursor-pointer  py-4 px-2 z-100    " + show_menu+ " "+ decorator }   key={item.id} >
                        <span   className={" text-menucolor  "+  " md:text-[12px]  lg:text-[20px]  " + show_menu+ " "+ decorator}  >
                                   
                                    {messages[`${item.id}`]}
                        </span>
                        </Link>
                    )
        
                   
                
            }
            else
            {
                return (
                    <div className= " relative rounded-sm  px-6 py-4 grid hover:bg-red-100 bottom-0" 
                     key={item.id} >

                    <button
                    className=" w-full text-left flex items-center outline-none focus:outline-none"
                    >
                    <span className="pr-1 flex-1">{item.title}</span>
                    <span className="mr-auto">
                        <svg
                        className="fill-current h-4 w-4
                        transition duration-150 ease-in-out"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        >
                        <path
                            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                        />
                        </svg>
                    </span>
                    </button>
                    <PopupMenu menuitems={item.items as Array<menutype>} menulevel={item.level} />
                    </div>
                    
                )              
            }  

        })()


))}
 
 
     </div>
     
     )
   
     


}

//    <Link href={to} className={pathname === to ? active : inActive}>{title}</Link>

function PopupMenu(props:submenutype) 
{

const submenu=props.menuitems
const menulevel=props.menulevel;


 var ulclassname="inline-block bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out  " + "menulevel-"+menulevel+" ";

  return(
   
  <ul
           className={ulclassname}

           key={props.menulevel} 
  >

{submenu.map(({ id, to,title,level,multiple,items },index) => (

            

                    (() => {
                    



                    if(!multiple)
                    {


                        return (   
                    
                            <li   className={"rounded-sm px-3 py-1 hover:bg-gray-100   "}   key={id} >
                                    <a href={to} >{title}</a>
                            </li>
                        )
                    }
                    else
                    {
                            return (
                            <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100"   key={id} >
                            <button
                                className="w-full text-left flex items-center outline-none focus:outline-none"
                            >
                                <span className="pr-1 flex-1">{title}</span>
                                <span className="mr-auto">
                                <svg
                                    className="fill-current h-4 w-4
                                    transition duration-150 ease-in-out"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                    />
                                </svg>
                                </span>
                            </button>
                                    <PopupMenu menuitems={items as Array<menutype>}  menulevel={level} />
                            </li>
                            
                            )              
                    }  



                })()


))}


</ul>
)


}


