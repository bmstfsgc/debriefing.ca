import { FaAlignJustify } from "react-icons/fa6";
import { FaGear } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import { FaTachographDigital } from "react-icons/fa6";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { FaSignInAlt } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { AnyCnameRecord } from "dns";



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
		title: 'Dashboard',
        id:'dashboard',
		to: '/',
		class: 'top',
        open:true,
        clickable:true,
		divider: '',
        multiple:true,
        level:0,
        items:
        [
            {
                title: 'CRM',
                id:'crm',
                to: '/crm',
                open:false,
                clickable:true,
                multiple:false,
                level:1,
                items:null
            },
            {
                title: 'Analytics',
                id:'analytics',
                to: '/analytics',
                multiple:false,
                open:false,
                clickable:true,
                level:1,
                items:null
            },
            {
                title: 'eCommerce',
                id:'ecommerce',
                to: '/ecommerce',
                open:false,
                clickable:true,
                multiple:false,
                level:1,
                items:null
            },
        ]
   },
   {
        icon: null,
        title: 'Apps & Pages',
        id:'appsandpages',
        to: '/',
        class: 'top',
        open:true,
        clickable:false,
        divider: '',
        multiple:true,
        level:0,
        items:
        [
            {
                title: 'Email',
                id:'email',
                to: '/email',
                open:false,
                clickable:true,
                multiple:false,
                level:1,
                items:null
            },
            {
                title: 'Chat',
                id:'chat',
                to: '/chat',
                multiple:false,
                open:false,
                clickable:true,
                level:1,
                items:null
            },
            {
                title: 'Calendar',
                id:'calendar',
                to: '/calendar',
                open:false,
                clickable:true,
                multiple:false,
                level:1,
                items:null
            },
            {
                title: 'Invoice',
                id:'invoice',
                to: '/invoice',
                open:false,
                clickable:true,
                multiple:false,
                level:1,
                items:[
                    {
                            title: 'List',
                            id:'list',
                            to: '/list',
                            open:false,
                            clickable:true,
                            multiple:false,
                            level:2,
                            items:null
                    } ,
                    {
                        title: 'Preview',
                        id:'preview',
                        to: '/preview',
                        open:false,
                        clickable:true,
                        multiple:false,
                        level:2,
                        items:null
                    },
                    {
                        title: 'Edit',
                        id:'edit',
                        to: '/edit',
                        open:false,
                        clickable:true,
                        multiple:false,
                        level:2,
                        items:null
                    },
                    {
                        title: 'Add',
                        id:'add',
                        to: '/add',
                        open:false,
                        clickable:true,
                        multiple:false,
                        level:2,
                        items:null
                     }                   
                ]
            },
            {
                title: 'User',
                id:'user',
                to: '/user',
                open:false,
                clickable:true,
                multiple:true,
                level:1,
                items:[
                    {
                            title: 'List',
                            id:'list',
                            to: '/list',
                            open:false,
                            clickable:true,
                            multiple:false,
                            level:2,
                            items:null
                    } ,
                    {
                        title: 'View',
                        id:'view',
                        to: '/view',
                        open:false,
                        clickable:true,
                        multiple:true,
                        level:2,
                        items:[
                            {
                                title: 'Overview',
                                id:'overview',
                                to: '/overview',
                                open:false,
                                clickable:true,
                                multiple:false,
                                level:3,
                                items:null
                             }   ,

                            {
                                title: 'Security',
                                id:'security',
                                to: '/security',
                                open:false,
                                clickable:true,
                                multiple:false,
                                level:3,
                                items:null
                            },
                              

                        ]
                    },
                            
                ]
            },
            {
                title: 'Examples',
                id:'examples',
                to: '/examples',
                open:false,
                clickable:true,
                multiple:false,
                level:1,
                items:null
            },
        ]
    },


    {
        icon: null,
        title: 'User & Interface',
        id:'userinterface',
        to: '/',
        class: 'top',
        open:true,
        clickable:false,
        divider: '',
        multiple:true,
        level:0,
        items:
        [
            {
                title: 'typography',
                id:'typography',
                to: '/typography',
                open:false,
                clickable:true,
                multiple:false,
                level:1,
                items:null
            },
            {
                title: 'Cards',
                id:'cards',
                to: '/cards',
                open:false,
                clickable:true,
                multiple:false,
                level:1,
                items:[
                    {
                            title: 'Basic',
                            id:'basic',
                            to: '/basic',
                            open:false,
                            clickable:true,
                            multiple:false,
                            level:2,
                            items:null
                    } ,
                    {
                        title: 'Advances',
                        id:'pradvancedeview',
                        to: '/advanced',
                        open:false,
                        clickable:true,
                        multiple:false,
                        level:2,
                        items:null
                    },
                ]
            },
            {
                title: 'Components',
                id:'components',
                to: '/components',
                open:false,
                clickable:true,
                multiple:true,
                level:1,
                items:[
                    {
                            title: 'Accordion',
                            id:'accordion',
                            to: '/accordion',
                            open:false,
                            clickable:true,
                            multiple:false,
                            level:2,
                            items:null
                    } ,
                    {
                        title: 'Alerts',
                        id:'alerts',
                        to: '/alerts',
                        open:false,
                        clickable:true,
                        multiple:false,
                        level:2,
                        items:null                    
                    },
                            
                ]
            },
            {
                title: 'buttons',
                id:'buttons',
                to: '/buttons',
                open:false,
                clickable:true,
                multiple:false,
                level:1,
                items:null
            },
        ]
    },

];