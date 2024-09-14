//import {useTranslations} from 'next-intl';
//import {unstable_setRequestLocale} from 'next-intl/server';
import {getMessage} from "@/root/src/clientmessages"
import Image from 'next/image'
import VideoplayerHolder from "@/components/main/frontend/ui/dailymotion/videoplayerholder"
import Link from 'next/link';
import Contactus from  "@/components/main/frontend/ui/form/forms/contactform/contactus"
import BgImage from  "@/components/main/frontend/ui/image/bgimage"
import { FaFileWord } from "react-icons/fa";
import {getBannerTextTranslations,getContactusTranslations} from "@/servermessages"

type Props = {
  params: {locale: string};
};






export default async function Home({params: {locale}}: Props) {
  // Enable static rendering
//unstable_setRequestLocale(locale);
//console.log(" home1 locale :"+ locale);
//  const t = useTranslations('menus');



var messages=await getBannerTextTranslations(locale);
var contactus_message=await getContactusTranslations(locale);
//console.log(  messages[`banner_body`]);
/*
<Image
src="/static/images/site/home/banner11-980x525.jpg"
alt="Picture of the author"
width={0}
height={0}
sizes="100vw"
style={{ width: '100%', height: 'auto' }} // optional
/>


<link rel="preload" as="image" href="/images/full.jpg" imageSrcSet="/images/full.jpg 1100w, 
/images/large.jpg 1024w, /images/medium.jpg 768w, 
/images/small.jpg 335w" 
imageSizes="(max-width: 1100px) 100vw, 1100px" />
<link rel="preload" as="image" href="/static/images/site/home/banner11-980x525-mono.jpg" />
<BgImage src={'/static/images/site/home/banner11-980x525.jpg'} preloader={'/static/images/site/home/banner11-980x525-mono.jpg'}>
*/

 return (
<>


<div className={`mx-auto bg-white max-w-7xl   z-50 `}>
        


     




<div  className="   " >
<div className="flex  flex-wrap  md:flex-wrap  w-full " aria-label="Global">
<article className="text-pretty flex flex-col  w-full p-1 mt-1 items-center  max-md:flex-wrap">
  

  
  <div className="  w-full h-[450px] md:h-[425px] lg:h-[575px]  ">

  <BgImage src={'/static/images/site/home/banner11-980x525.webp'} preloader={'/static/images/site/home/banner11-980x525-mono.webp'}>


  <div className=" absolute top-0 left-0 right-0 bottom-0     ">
  
   <div className="p-5 gap-6 flex flex-col ">
        {/* 
        <p className="font-bold  text-[16px]  md:text-[24px] lg:text-[32px] text-headingcolor">Violent Incident Debriefing Training Module</p>
  */}




        <p className=" font-bold text-[16px]  md:text-[24px] lg:text-[32px] text-white "   dangerouslySetInnerHTML={{ __html: messages[`banner_title`] }} />
        <div className=" text-[12px]  md:text-[14px] lg:text-[20px] space-y-4  text-white "   dangerouslySetInnerHTML={{ __html: messages[`banner_body`] }} />
        {/*<p  >
        Debriefing is an essential step to assist in rebuilding a positive relationship between staff and students and to deal with the trauma experienced by students and staff after a critical incident. It is an effective way to assess the situation objectively and plan appropriate next steps for behaviour management and programming. Debriefing is a valuable tool in reducing the likelihood of future critical incidents in the workplace.
        </p>

        <p  >
        The Violent Incident Debriefing Training Module is presented as a Video PowerPoint document with “live” embedded videos.  There are two versions of the Training Module – one designed for on-line training, and the other designed for instructor-led presentations. Both versions are available in English and French.
        </p>

        <p >
        <b>NOTE:</b> Boards who wish to download and add this course to their Learning Management System for tracking of employees and convenience of access should click here:     Download     
        Both versions of the Training Module will appear. Boards can then choose the appropriate vMP4 Version to download.
        </p>   
        */}



   </div>

  </div>

  </BgImage>  


  </div>
  
  <p  className="font-bold text-[8px]  text-center item-center justify-center flex  md:text-[12px] lg:text-[16px]">{messages[`banner_footer`]}</p>



     </article>
   </div>
</div>






<div  id="onlinetraining" className=" pt-16 " >
<div className="flex  flex-wrap  md:flex-wrap  w-full " aria-label="Global">
<article className="text-pretty flex flex-col  w-full mt-4  items-center  max-lg:flex-wrap">
  
  
  
  
   <div className=" p-5 gap-6 flex flex-col text-black ">

   
        <p className="font-bold text-[32px] text-headingcolor"  dangerouslySetInnerHTML={{ __html: messages[`onlinetraining_title`] }} />
        <div  className=" flex-col flex text-[16px] gap-3 "  dangerouslySetInnerHTML={{ __html: messages[`onlinetraining_body`] }}  />
        

        
   </div>

   </article>
  </div>
</div>















<div  className="  " >
<div className="flex  flex-wrap  md:flex-wrap  w-full " aria-label="Global">
<article className="text-pretty flex flex-col  w-full mt-4  items-center  max-md:flex-wrap">
  
  
  
  
   <div className="p-5 gap-6 flex flex-col w-full text-black ">
        <div className="font-bold text-[32px] flex items-center justify-center ">
              <p className=" border-b-2 border-blue-500 text-center text-headingcolor" dangerouslySetInnerHTML={{ __html: messages[`onlinetraining_video_title`] }} />
         </div>
        <div className="w-full h-[250px] md:h-[425px] lg:h-[575px] ">
            <VideoplayerHolder targetid="online" videoid={messages[`onlinetraining_video_id`] }   playerid={'xqu2q'}/>
        </div>

    </div>
        
        
   
   </article>
  </div>
</div>









<div  className=" pt-8  " >
<div className="flex  flex-wrap  md:flex-wrap  w-full " aria-label="Global">
<article className="text-pretty flex flex-col  w-full mt-4  items-center  max-md:flex-wrap">
  
  
  
  
<div className=" flex flex-col w-full text-black ">
        <div className="font-bold text-[32px] flex items-center justify-center py-2 ">
              <p className=" border-b-2 border-blue-500 flex flex-wrap items-center w justify-center text-headingcolor">{messages[`onlinetraining_download_title`] }</p>
         </div>
            

        <div className="w-full  p-2  items-start justify-center  w-full flex flex-row flex-wrap gap-2">
            


            <div className="flex flex-col items-center justify-center  p-1 w-[180px]">

                    <div className=" pb-4   border-b-2 border-blue-500 w-full">
                                    <div  className={`  flex items-center justify-center  transition duration-200 hover:cursor-pointer 
                                            text-blue-500    
                                            hover:text-blue-600
                                            text-[48px] md:text-[64px] lg:text-[64px]
                                        `}>
                                                 <FaFileWord  className="text-brand-500" />
                                   </div>                       


                    </div>
                    <div className=" p-2">
                        <Link  href={'/static/files/docs/online/'  + messages[`onlinetraining_file_names.0`] }  target="_blank" 
                         rel="noopener noreferrer" locale={''} className="flex text-wrap flex-wrap " download >{messages[`onlinetraining_file_title.0`]}</Link> 
                    </div>

            </div>


            <div className="flex flex-col items-center justify-center  p-1  w-[180px] ">
                    <div className=" pb-4   border-b-2 border-blue-500 w-full">
                        
                                   <div  className={`  flex items-center justify-center   transition duration-200 hover:cursor-pointer 
                                            text-blue-500    
                                            hover:text-blue-600
                                            text-[48px] md:text-[64px] lg:text-[64px]
                                        `}>
                                                 <FaFileWord  className="text-brand-500" />
                                   </div>

                    </div>
                    <div className=" p-2   ">
                    <Link  href={'/static/files/docs/online/'  + messages[`onlinetraining_file_names.1`] }  target="_blank" 
                         rel="noopener noreferrer" locale={''} className="flex text-wrap  flex-wrap " download >{messages[`onlinetraining_file_title.1`]}</Link> 
                    </div>

            </div>

            <div className="flex flex-col items-center justify-center  p-1  w-[180px] ">
                    <div className=" pb-4   border-b-2 border-blue-500 w-full">
                                   <div  className={`  flex items-center justify-center  transition duration-200 hover:cursor-pointer 
                                            text-blue-500    
                                            hover:text-blue-600
                                            text-[48px] md:text-[64px] lg:text-[64px]
                                        `}>
                                                 <FaFileWord  className="text-brand-500" />
                                   </div>

                    </div>
                    <div className=" p-2  ">
                    <Link  href={'/static/files/docs/online/'  + messages[`onlinetraining_file_names.2`] }  target="_blank" 
                         rel="noopener noreferrer" locale={''} className="flex text-wrap  flex-wrap " download >{messages[`onlinetraining_file_title.2`]}</Link> 
                    </div>

            </div>

            


        </div>

    </div>
        
        
   
   </article>
  </div>
</div>












{/*
<!---  Instructor Led Training -->

  */}





<div id="instructorledtraining" className=" pt-16 " >
<div className="flex  flex-wrap  md:flex-wrap  w-full " aria-label="Global">
<article className="text-pretty flex flex-col  w-full mt-4  items-center  max-md:flex-wrap">
  
  
  
  
   <div className="p-5 gap-6 flex flex-col text-black ">
        <p className="font-bold text-[36px] text-headingcolor">{messages[`instructorledtraining_title`] }</p>
        <div  className=" flex-col flex text-[16px] gap-3 "   dangerouslySetInnerHTML={{ __html: messages[`instructorledtraining_body`] }} />
   </div>



   </article>
  </div>
</div>










<div  className="  " >
<div className="flex  flex-wrap  md:flex-wrap  w-full " aria-label="Global">
<article className="text-pretty flex flex-col  w-full mt-4  items-center  max-md:flex-wrap">
  
  
  
  
        <div className="p-5 gap-6 flex flex-col w-full text-black ">
                    <div className="font-bold text-[32px] flex items-center justify-center ">
                        <p className=" border-b-2 border-blue-500 text-headingcolor text-center"  dangerouslySetInnerHTML={{ __html: messages[`instructorledtraining_video_title`] }} />
                    </div>
                    <div className="w-full h-[250px] md:h-[425px] lg:h-[575px] ">
                        <VideoplayerHolder targetid="instructorled" videoid={messages[`instructorledtraining_video_id`]} playerid={'xqu2q'}  />
                    </div>

        </div>
        
        
   
   </article>
  </div>
</div>









<div  className=" pt-8  " >
<div className="flex  flex-wrap  md:flex-wrap  w-full " aria-label="Global">
<article className="text-pretty flex flex-col  w-full mt-4  items-center  max-md:flex-wrap">
  
  




  
<div className=" flex flex-col w-full text-black ">
        <div className="font-bold text-[32px] flex items-center justify-center py-2 ">
              <p className="  border-b-2 border-blue-500 flex flex-wrap items-center w justify-center text-headingcolor">{messages[`instructorledtraining_download_title`] }</p>
         </div>
         
         
        <div className="w-full  p-2  items-start justify-center  w-full flex flex-row flex-wrap gap-2">
            
        
        <div className="flex flex-col items-center justify-center  p-1 w-[180px]">

                    <div className="   pb-4   border-b-2 border-blue-500 w-full  ">
                        
                                    <div  className={`  flex items-center justify-center     text-[48px] md:text-[64px]   lg:text-[64px] transition duration-200 hover:cursor-pointer 
                                            text-blue-500    
                                            hover:text-blue-600
                                        `}>
                                                 <FaFileWord  className="text-brand-500" />
                                   </div>                       

            

                    </div>
                    <div className=" p-2 py-4">
                        <Link  href={'/static/files/docs/instructor/'+messages[`instructorledtraining_file_names.0`]}    target="_blank" 
                         rel="noopener noreferrer" locale={''} className="flex flex-wrap " download >{messages[`instructorledtraining_file_title.0`]}</Link> 


                    </div>

            </div>


             <div className="flex flex-col items-center justify-center  p-1 w-[180px]">
                    <div className=" pb-4   border-b-2 border-blue-500 w-full ">
                                <div  className={`  flex items-center justify-center     text-[48px] md:text-[64px]   lg:text-[64px]  transition duration-200 hover:cursor-pointer 
                                            text-blue-500    
                                            hover:text-blue-600
                                        `}>
                                                 <FaFileWord  className="text-brand-500" />
                                   </div>                       

                    </div>
                    <div className=" p-2">
                        

                        <Link  href={'/static/files/docs/instructor/'+messages[`instructorledtraining_file_names.1`]}     target="_blank" 
                         rel="noopener noreferrer" locale={''} className="flex flex-wrap " download >{messages[`instructorledtraining_file_title.1`]}</Link> 

                    </div>

            </div>

            <div className="flex flex-col items-center justify-center  p-1 w-[180px]">
                    <div className=" pb-4   border-b-2 border-blue-500 w-full">
                                    <div  className={`  flex items-center justify-center     text-[48px] md:text-[64px]   lg:text-[64px]  transition duration-200 hover:cursor-pointer 
                                            text-blue-500    
                                            hover:text-blue-600
                                        `}>
                                                 <FaFileWord  className="text-brand-500" />
                                   </div>                       

                    </div>
                    <div className=" p-2">
                        
                        <Link  href={'/static/files/docs/instructor/'+ messages[`instructorledtraining_file_names.2`]}  target="_blank" 
                         rel="noopener noreferrer" locale={''} className="flex flex-wrap " download >{messages[`instructorledtraining_file_title.2`]}</Link> 

                    </div>

            </div>

            <div className="flex flex-col items-center justify-center  p-1 w-[180px]">
                    <div className=" pb-4   border-b-2 border-blue-500 w-full">
                       
                                    <div  className={`  flex items-center justify-center     text-[48px] md:text-[64px]   lg:text-[64px]  transition duration-200 hover:cursor-pointer 
                                            text-blue-500    
                                            hover:text-blue-600
                                        `}>
                                                 <FaFileWord  className="text-brand-500" />
                                   </div>                       

            


                    </div>
                    <div className=" p-2">
                        
                        <Link  href={'/static/files/docs/instructor/'+messages[`instructorledtraining_file_names.3`]}    target="_blank" 
                         rel="noopener noreferrer" locale={''} className="flex flex-wrap " download >{messages[`instructorledtraining_file_title.3`]}</Link> 

                    </div>

            </div>
            

            <div className="flex flex-col items-center justify-center  p-1 w-[180px]">
                    <div className=" pb-4   border-b-2 border-blue-500 w-full">
                        
                                    <div  className={`  flex items-center justify-center     text-[48px] md:text-[64px]   lg:text-[64px] transition duration-200 hover:cursor-pointer 
                                            text-blue-500    
                                            hover:text-blue-600
                                        `}>
                                                 <FaFileWord  className="text-brand-500" />
                                   </div>                       

            

                    </div>
                    <div className=" p-2">
                                                                               
                        <Link  href={'/static/files/docs/instructor/'+messages[`instructorledtraining_file_names.4`]}    target="_blank" 
                         rel="noopener noreferrer" locale={''} className="flex flex-wrap " download >{messages[`instructorledtraining_file_title.4`]}</Link> 


                    </div>

            </div>

            <div className="flex flex-col items-center justify-center  p-1 w-[180px]">
                    <div className=" pb-4   border-b-2 border-blue-500 w-full">
                      
                                    <div  className={`  flex items-center justify-center     text-[48px] md:text-[64px]   lg:text-[64px] transition duration-200 hover:cursor-pointer 
                                            text-blue-500    
                                            hover:text-blue-600
                                        `}>
                                                 <FaFileWord  className="text-brand-500" />
                                   </div>                       

                 


                    </div>
                    <div className=" p-2">
                        <Link href ={"/static/files/docs/instructor/"+messages[`instructorledtraining_file_names.5`]}  download className="flex flex-wrap ">{messages[`instructorledtraining_file_title.5`]}</Link>
                    </div>

            </div>



        </div>

    </div>
        
        
   
   </article>
  </div>
</div>









<div id="contactus" className=" pt-16 " >
<div className="flex  flex-wrap  md:flex-wrap  w-full " aria-label="Global">
<article className="text-pretty flex flex-col  w-full mt-4  items-center  max-md:flex-wrap">
  
  
  
  
    <div className="p-5 gap-6 flex flex-col w-full text-black ">
                    <div className="font-bold text-[32px] flex items-center justify-center pb-4 ">
                        <p className=" border-b-2 border-blue-500 text-headingcolor ">Contact Us</p>
                    </div>
                    <div className="w-full py-2 flex flex-col md:flex-row  items-start justify-center gap-8 ">
                        <div className="flex  md:w-1/2">
                                    <Contactus messagetranslations={contactus_message}/>
                                
                        </div>


                        <div className="flex items-center justify-center md:w-1/2 ">
                                    <img alt=""  src={'/static/images/site/home/contactus.webp'}   />
                        </div>
                    </div>

    </div>
        
        
   
   </article>
  </div>
</div>











</div>

</>

  );
}


