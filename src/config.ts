import {useLocale} from 'next-intl';
import {Pathnames} from 'next-intl/navigation';

export const locales = ['en', 'fr'] ;

export const pathnames = {
  '/': '/',
  '/pathnames': {
    en: '/pathnames',
    fr: '/pfadnamen'
  }
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;

/*
export const getLocale=()=>
{
    var locale = useLocale();
    const isValid = locales.includes(locale as any);
    if(!isValid)
    {
      console.log("Invalid Local :"+locale)
      console.log("Set it to default en")
      locale="en";
    }
    return locale;
}
*/
