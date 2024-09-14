import {getTranslations, getMessages, unstable_setRequestLocale} from 'next-intl/server';


export interface IndexableObject {
    [key: string]: any;
}


export async function getMainMenuTranslations(locale:string)
{
    console.log( " getMainMenuTranslations local :"+locale)
        var messages:IndexableObject={home:'',onlinetraining:'',instructorledtraining:'',
                    contactus:'',violentincident:'',
                    debriefingtrainingmodule:''
                }
      //  unstable_setRequestLocale(locale);
        const t = await getTranslations({locale});
        messages["home"]=t(`menus.mainmenu.home`)
        messages["onlinetraining"]=t(`menus.mainmenu.onlinetraining`)
        messages["instructorledtraining"]=t(`menus.mainmenu.instructorledtraining`)
        messages["contactus"]=t(`menus.mainmenu.contactus`)
        messages["violentincident"]=t(`menus.mainmenu.violentincident`)
        messages["debriefingtrainingmodule"]=t(`menus.mainmenu.debriefingtrainingmodule`)
        messages["menugap"]=t(`menus.mainmenu.menugap`)
    

        console.log( " getMainMenuTranslations local :"+t(`menus.mainmenu.home`))

        return messages;
}



export async function getContactusTranslations(locale:string)
{
        var messages:IndexableObject={}
        unstable_setRequestLocale(locale);
        const t = await getTranslations(`pages.home.contactus`);
        messages["name"]=t(`name`)
        messages["email"]=t(`email`)
        messages["organization"]=t(`organization`)
        messages["position"]=t(`position`)
        messages["phone"]=t(`phone`)
        messages["message"]=t(`message`)
        messages["placeholder"]=t(`placeholder`)
        
    
        return messages;
}


function convertToText(data:any)
{
    if( Array.isArray(data) )
    {
            return data.join('')
    }
    else
    {
        return data;
    }
}



function getMessagesFromBody(t:any,length:number)
{
    var message="";    
    for (let i = 0; i <= length; i++) {
        message=message+t.raw(i)
    }
    return message;
}


export  async function getBannerTextTranslations(locale:string)
{
      //  var messages:IndexableObject={banner_title:'',banner_body:'',banner_footer:'',
       //         onlinetraining_title:'',onlinetraining_body:'',
       //         onlinetraining_video_title:'',onlinetraining_video_id:'',,onlinetraining_downloads_title:'',
       //         onlinetraining_file_names:'',onlinetraining_file_title:''


       var messages:IndexableObject={}




                
                
        unstable_setRequestLocale(locale);
        const t1 = await getTranslations(`pages.home.banner`);
        const t2 = await getTranslations(`pages.home.banner.content`);
        const t3 = await getTranslations(`pages.home.onlinetraining`);
        
        const t5 = await getTranslations(`pages.home`);
        
        //const t3 = await getTranslations(`pages.home.banner.contentter`);
        var body_length:number=parseInt(t2('body.length'))
        messages["banner_title"]=t1(`title`);

        var body_message="";    
    //    message=message+t2.raw('00')

        for (let i = 0; i < body_length; i++) {
            body_message=body_message+t2.raw(`body.${i}` as any)
        }
        //console.log(message);
      //  messages["banner_body"]=getMessagesFromBody(t2,body_length)
        //messages["banner_body"]="";
        messages["banner_body"]=body_message;
        messages["banner_footer"]=t2.raw(`footer`);

        
        var body_length:number=parseInt(t3('content.body.length'))
        body_message="";    
        messages["onlinetraining_title"]=t3(`title`);
        for (let i = 0; i < body_length; i++) {
            body_message=body_message+t3.raw(`content.body.${i}` as any)
        }
        messages["onlinetraining_body"]=body_message;

        messages["onlinetraining_video_title"]=t3.raw(`content.videotitle`)
        messages["onlinetraining_video_id"]=t3.raw(`content.videoid`);
        messages["onlinetraining_download_title"]=t3.raw(`content.downloads_title`);
        

        messages["onlinetraining_file_names.0"]=t3.raw(`content.file_names.0`);
        messages["onlinetraining_file_names.1"]=t3.raw(`content.file_names.1`);
        messages["onlinetraining_file_names.2"]=t3.raw(`content.file_names.2`);

        
        messages["onlinetraining_file_title.0"]=t3.raw(`content.file_title.0`);
        messages["onlinetraining_file_title.1"]=t3.raw(`content.file_title.1`);
        messages["onlinetraining_file_title.2"]=t3.raw(`content.file_title.2`);


        body_message="";    
        const t4 = await getTranslations(`pages.home.instructorledtraining`);
        messages["instructorledtraining_title"]=t4(`title`);
        for (let i = 0; i < body_length; i++) {
            body_message=body_message+t4.raw(`content.body.${i}` as any)
        }
        messages["instructorledtraining_body"]=body_message;

        messages["instructorledtraining_video_title"]=t4.raw(`content.videotitle`)
        messages["instructorledtraining_video_id"]=t4.raw(`content.videoid`);
        messages["instructorledtraining_download_title"]=t4.raw(`content.downloads_title`);
        

        messages["instructorledtraining_file_names.0"]=t4.raw(`content.file_names.0`);
        messages["instructorledtraining_file_names.1"]=t4.raw(`content.file_names.1`);
        messages["instructorledtraining_file_names.2"]=t4.raw(`content.file_names.2`);
        messages["instructorledtraining_file_names.3"]=t4.raw(`content.file_names.3`);
        messages["instructorledtraining_file_names.4"]=t4.raw(`content.file_names.4`);
        messages["instructorledtraining_file_names.5"]=t4.raw(`content.file_names.5`);


        
        messages["instructorledtraining_file_title.0"]=t4.raw(`content.file_title.0`);
        messages["instructorledtraining_file_title.1"]=t4.raw(`content.file_title.1`);
        messages["instructorledtraining_file_title.2"]=t4.raw(`content.file_title.2`);
        messages["instructorledtraining_file_title.3"]=t4.raw(`content.file_title.3`);
        messages["instructorledtraining_file_title.4"]=t4.raw(`content.file_title.4`);
        messages["instructorledtraining_file_title.5"]=t4.raw(`content.file_title.5`);




        //var mymessages=await getMessages();

        //console.log(mymessages[`pages`]);
        return messages;
}




export async function getFooterTranslations(locale:string)
{
        var messages:IndexableObject={}
        unstable_setRequestLocale(locale);
        const t = await getTranslations(`pages.home`);
        messages["producedby"]=t('producedby');;
        messages["footer"]=t('footer');
    
        return messages;
}