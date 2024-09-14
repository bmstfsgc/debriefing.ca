
// Can be imported from a shared config
import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import {locales} from './config';

/*
export default  getRequestConfig( async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  console.log("i18n 1:"+locale);

  //var filename=(locale==='en'?'./../messages/en.json':'./../messages/'+`${locale}.json`)
  
  var  locale_messages= (
       (locale === 'en'
        ? // When using Turbopack, this will enable HMR for `en`
          import('./../messages/en.json')
        : import('./../messages/fr.json'))
    );

  return {messages:(await locale_messages)}
  
});
*/



export default getRequestConfig(
  
  async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid

  
  if (!locales.includes(locale as any)) notFound();
  var locale_messages=null;
  //var locale_messages=(locale ==='en')?import('./../messages/en.json'):import('./../messages/'+`${locale}.json`);
  /*
  if(locale==='en')
  {
     locale_messages=(await import('./../messages/en.json')).default;
  }
  else
  {
    locale_messages= (await import(`./../messages/fr.json`)).default;
  }
 */

  var local_messages= (await import(`../messages/${locale}.json`)).default

  //console.log(locale_messages);
  return {
    messages: (local_messages)
  };
});
