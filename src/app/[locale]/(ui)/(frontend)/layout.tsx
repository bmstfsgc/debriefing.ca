
import { Inter, Lato } from 'next/font/google'

import {ReactNode} from 'react';
import {notFound} from 'next/navigation';
import { headers } from 'next/headers';
import NavBarHeader from "@/components/main/frontend/navigation/menus/navbarheader";
import Footer from "@/components/main/frontend/navigation/menus/footermenu/footer";
import {getMainMenuTranslations,getFooterTranslations} from "@/servermessages"
import {GoogleAnalytics} from "@/components/other/thirdparty/googleanalytics"

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
 

const lato = Lato({
  subsets: ["latin"],
  weight: "400",
  variable: '--font-lato',
})
 

//const  GoogleAnalytics=dynamic(() => import("@next/third-parties/google").then(module => module.GoogleAnalytics));

//const GoogleAnalytics = dynamic(() => import('@next/third-parties/google'), {
//})


//const GoogleAnalytics = dynamic(() =>
//import('@next/third-parties/google').then((mod) => mod.GoogleAnalytics)
//)

import {useTranslations} from 'next-intl';

import "./globals.css"

//const inter = Inter({ subsets: ["latin"] });


type Props = {
  children: ReactNode;
  params: {locale: string};
};
// Can be imported from a shared config
const locales = ['en', 'fr'];
 
export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}



//export const metadata: Metadata = {
//  title: 'Debriefing.ca',
//  description:
//    '',
//};

/*
export interface IndexableObject {
  [key: string]: any;
}
export const getMainMenuTranslations=(locale:string)=>
{
        var messages:IndexableObject={home:'',onlinetraining:'',instructorledtraining:'',
                    contactus:'',violentincident:'',
                    debriefingtrainingmodule:''
                }
        unstable_setRequestLocale(locale);
        const t = useTranslations();
        messages["home"]=t(`menus.mainmenu.home`)
        messages["onlinetraining"]=t(`menus.mainmenu.onlinetraining`)
        messages["instructorledtraining"]=t(`menus.mainmenu.instructorledtraining`)
        messages["contactus"]=t(`menus.mainmenu.contactus`)
        messages["violentincident"]=t(`menus.mainmenu.violentincident`)
        messages["debriefingtrainingmodule"]=t(`menus.mainmenu.debriefingtrainingmodule`)
    
        return messages;
}
*/

export default  async function RootLayout({
  children,
  params:{locale}
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string}
}>) {

  
  
  const handleToggleBody  = () => {
  //  setToggled(!toggled)
    //console.log('hello')
  }

 


//  console.log( " layout1 :"+locale);

  var menu_messages=await getMainMenuTranslations(locale);
  var footer_message=await getFooterTranslations(locale);
  

  var google_analytics_id=process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

  const headersList = headers()
 //<script src="https://geo.dailymotion.com/libs/player/x5poh.js"></script>
    
  return (

    
    <html lang={locale}  className={lato.className +" no-scrollbar "}>
    <head>
    <meta name="description" content={"Debriefing is an essential step to assist in rebuilding a positive relationship between staff and students and to deal with the trauma experienced by students and staff after a critical incident. It is an effective way to assess the situation objectively and plan appropriate next steps for behaviour management and programming. Debriefing is a valuable tool in reducing the likelihood of future critical incidents in the workplace."} />
    <title>Debriefing - Violent Incident Debriefing Training Module</title>
    <link rel="preload" as="image" href="/static/images/site/home/banner11-980x525-mono.webp" />
    <link rel="preload" as="image" href="/static/images/site/home/banner11-980x525.webp" />
    </head>
    <body id="home" className={" no-scrollbar " +`${lato.variable}`}>
              <NavBarHeader  menutranslations={menu_messages}/> 
              {children}
              <Footer  footer_message={footer_message} footer_className={' bg-blue-600  text-white hover:text-blue-300 hover:bg-gray-700 '}/>
              
              <GoogleAnalytics Id={ `${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
    </body>
    </html>

  );
}
//<GoogleAnalytics   gaId="G-YDHJBXF5HT" />