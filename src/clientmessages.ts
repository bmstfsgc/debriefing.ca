import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';


export const getMessage=(locale:string, key:any)=>
{
        unstable_setRequestLocale(locale);
        const keys=key.split(".");
        const t = useTranslations();
        return t(key)
}
