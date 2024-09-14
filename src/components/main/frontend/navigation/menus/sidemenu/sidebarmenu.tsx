
import {Accordion} from "./accordion/Accordion"
import {HeaderMenuLinks,HeaderMenuSettings} from "@/components/main/frontend/navigation/links/debriefing_links";
import LogoHeader from "@/components/main/frontend/navigation/menus/logo/logoheader";


interface SidebarProps{
    callback: ()=>void
    locale:any;
    menutranslations:any;
}  



const SidebarMenuHeader=({ callback,menutranslations }: SidebarProps) =>
{
   var messages=menutranslations;
      
      return (
        <>
              <div className="flex flex-row justify-between items-center border-b-2 border-gray-400 p-2 z-5 cursor-pointer text-green-900  ">
              <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
              <p className=" text-[16px] md:text-[20px]  lg:text-[24px]   ">{messages[`violentincident`]}</p>
              </h5>
              <button  onClick={callback}  className="text-gray-700 bg-transparent hover:bg-gray-300 hover:text-gray-900 rounded-lg text-sm p-1.5 top-2.5 end-2.5 dark:hover:bg-gray-600 dark:hover:text-white" >
                  <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" 
                  xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"></path></svg>
              </button>
              </div>
        </>
     )   
}  

const SidebarMenuBody=(props:any)=>
{
  //const headersList = headers();
  // read the custom x-url header
  //const header_url = headersList.get('x-url') || "";
  
  //var tokens=getQueryParams(header_url);
  //var paths=tokens['path']
  //var params=tokens['params']

    return (


        <div id="leftaccordionmenu" className="md:mx-auto  md:flex  px-2 py-4  ">
              <Accordion  locale={props.locale} menusettings={HeaderMenuSettings} menuitems={HeaderMenuLinks} menutranslations={props.menutranslations}/>
        </div>
      

    )

}  


interface LooseObject {
  [key: string]: any
}

var  getQueryParams=(url:string)=>
{
  
  var alltokens: LooseObject  = {};
  var qparams: LooseObject  = {},
      parts = (url||'').split('?'),
      qparts, qpart,
      i=0;
  
     // console.log(parts);

  {
  
      var mainparts = parts[0].split('//');
      var pathnames = mainparts[1].split('/');
      if(pathnames.length <=1 ){
        alltokens['path']=null;
      }
      else
      {
        pathnames.shift();
        alltokens['path']=pathnames;
      }  
   }
   
   
   if(parts.length > 1){
      qparts = parts[1].split('&');
      for(let i in qparts){

          qpart = qparts[i].split('=');
          var key=decodeURIComponent(qpart[0]);
          qparams[key] = decodeURIComponent(qpart[1] || '');
      }
      alltokens['params']=qparams;
  }


//  console.log(alltokens)
  return alltokens;
};


const SidebarMenu=({ locale,callback ,menutranslations}: SidebarProps) =>
{

  //<div className={` mx-auto bg-white max-w-7xl border-b sticky top-0 z-50 `}>
  //<aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar"></aside>
  console.log ("SIDEBAR CALLED ")  
  return(
      
<div  id="sidebarmenuholder"  className="fixed top-0 left-0 z-50 w-64  h-screen  ">

    
          <div  id="sidebarmenu"  className=" absolute  md:hidden h-full  flex-left z-30  top-0 left-0 w-48 p-4 h-screen  bg-gray-200   overflow-y-auto flex-1">
              <SidebarMenuHeader locale={locale} menutranslations={menutranslations} callback={callback} />
              <SidebarMenuBody locale={locale} menutranslations={menutranslations} />
        </div>

        </div>

  )

}

export default SidebarMenu;