import { FaAlignJustify } from "react-icons/fa6";
import { FaGear } from "react-icons/fa6";

import { FaHouse } from "react-icons/fa6";
import { FaHeadset } from "react-icons/fa6";
import { FaAddressBook } from "react-icons/fa6";



import { FaTachographDigital } from "react-icons/fa6";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { FaSignInAlt } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { AnyCnameRecord } from "dns";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";



export type menutype = {
  	icon: object,
    title: string,
    id: string,
    to: string,
    class: string,
    divider: string,
    level:number,
    multiple:boolean,
    items:object[]
};


export type submenutype = {
  menuitems: Array<menutype>,
  menulevel:number
}



export const HeaderMenuSettings =
{
    foreground:'text-slate-200',
    background:'bg-zinc-950'
}

export const HeaderMenuLinks:Array<any> = [
  
{
	icon: <FaHouse />,
	title: 'Home',
    id:'home',
	to: '/',
	class: 'top',
	divider: '',
    multiple:false,
    level:0,
    items:null
	},
{
    icon: <FaHeadset />,
    title: 'Services',
    id:'services',
    to:'/services',
    class: 'top',
	divider: '',
    level:0,
    multiple:false,
    items:null
    },
{
    icon: <FaAddressBook />,
    title: 'Contact Us',
    id:'contactus',
    to:'/contactus',
    class: 'top',
    divider: '',
    level:0,
    multiple:false,
    items:null
    }

];    