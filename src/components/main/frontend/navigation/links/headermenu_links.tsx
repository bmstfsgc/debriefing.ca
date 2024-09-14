import { FaAlignJustify } from "react-icons/fa6";
import { FaGear } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import { FaTachographDigital } from "react-icons/fa6";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { FaSignInAlt } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { AnyCnameRecord } from "dns";

/*
export const HeaderMenuLinks = [
  {
		icon: <FaHouse />,
		title: 'Dashboard',
    id:'dashboard',
		to: '/',
		class: 'top',
		divider: '',
	},
  {
      icon: null,
      title: 'Education',
      id:'education',
      multiple: true,
      items: [
        {
          title:'Technical Analysis',
          id:'technicalanalysis',
          items: [
            {
              title: 'The Dow Theory',
              id:'thedowtheory',
              to: '/thedowtheory'
            },
            {
              title: 'Charts & Chart Patterns',
              id:'charts',
              to: '/chart'
            },
            {
              title: 'Trend & Trend Lines',
              id:'trend',
              to: '/trend'
            },
            {
              title: 'Support & Resistance',
              id:'support',
              to: '/support'
            },
          ]
        },
        {
          title:'Fundamental Analysis',
          items: [
            {
              title: 'The Dow Theory',
              id:'thedowtheory',
              to: '/thedowtheory'
            },
            {
              title: 'Charts & Chart Patterns',
              id:'chartpatterns',
              to: '/chart'
            },
            {
              title: 'Trend & Trend Lines',
              id:'trendlines',
              to: '/trendlines'
            },
            {
              title: 'Support & Resistance',
              id:'resistance',
              to: '/resistance'
            },
          ]
        },
        {
          title:'Elliot Wave Analysis',
          items: [
            {
              title: 'The Dow Theory',
              id:'dowtheory1',
              to: '/thedowtheory1'
            },
            {
              title: 'Charts & Chart Patterns',
              id:'chart1',
              to: '/chart1'
            },
            {
              title: 'Trend & Trend Lines',
              id:'trendlines1',
              to: '/trendlines1'
            },
            {
              title: 'Support & Resistance',
              id:'support1',
              to: '/support'
            },
          ]
        },
        ]
    },
	{
		icon: <FaScrewdriverWrench/>,
		title: 'Workbench',
		to: '/workbench',
		class: 'top',
		divider: '',
    multiple: true,
    items: [
          {
            title: 'The Dow Theory',
            id:'thedowtheory2',
            to: '/thedowtheory2'
          },
          {
            title: 'Charts & Chart Patterns',
            id:'chart2',
            to: '/chart2'
          },
        ]
      
	},
	{
		icon: null,
		title: 'Feedback',
    id:'feedback',
		to: '/feedbacks',
		class: 'top',
		divider: '',
	},
	{
		icon: null,
		title: 'Shades',
    id:'shades',
		to: '/shades',
		class: 'top',
		divider: '',
	},
	
	{
		icon: null,
		title: 'User Name',
    id:'settings',
		to: '/settings',
		class: 'user',
		//loginIcon:<LoginOutlinedIcon />,
		statusIcon: <FaSignInAlt />,
		statusAction: <FaSignOutAlt />,
		divider: '',
	},
];

*/




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
    foreground:'bg-white-200',
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
    icon: null,
    title: 'About',
    id:'about',
    to:'/about',
    level:0,
    multiple:false,
    items:null
  },
  {
      icon: null,
      title: 'Education',
      id:'education',
      to:'/education',
      level:0,
      multiple: true,
      items:

        [{
            title: 'The Dow Theory',
            id:'thedowtheory1',
            to: '/thedowtheory',
            multiple:false,
            level:1,
            items:null
          },
          {
            title: 'Charts & Chart Patterns',
            id:'charts1',
            to: '/chart',
            level:1,
            multiple:true,
            items:
                  [{
                      title: 'The Dow Theory2',
                      id:'thedowtheory2',
                      to: '/thedowtheory',
                      multiple:false,
                      level:2,
                      items:null
                    },
                    {
                      title: 'Charts & Chart Patterns2',
                      id:'charts2',
                      to: '/chart',
                      level:2,
                      multiple:false,
                      items:null
                    },
                    {
                      title: 'Trend & Trend Lines2',
                      id:'trend2',
                      to: '/trend',
                      level:2,
                      multiple:false,
                      items:null
                    },
                    {
                      title: 'Support & Resistance2',
                      id:'support2',
                      to: '/support',
                      level:2,
                      multiple:false,
                      items:null
                    },
                  ]
          },
          {
            title: 'Trend & Trend Lines',
            id:'trend1',
            to: '/trend',
            multiple:false,
            level:1,
            items:null
          },
          {
            title: 'Support & Resistance',
            id:'support',
            to: '/support',
            level:1,
            multiple:false,
            items:null
          },
        ]
    },
	{
		icon: <FaScrewdriverWrench/>,
		title: 'Workbench',
		to: '/workbench',
    id:'workbench',
		class: 'top',
		divider: '',
    level:0,
    multiple:false,
    items:null

	},
	{
		icon: null,
		title: 'Feedback',
    id:'feedback',
		to: '/feedbacks',
		class: 'top',
		divider: '',
    level:0,
    multiple:false,
    items:null
	},
	{
		icon: null,
		title: 'Shades',
    id:'shades',
		to: '/shades',
		class: 'top',
    level:0,
		divider: '',
    multiple:false,
    items:null
	},
	
	
];