import {GenericForm,EmptyFields} from  "@/root/src/components/main/frontend/ui/form/core/form"
import { FieldData} from  "@/components/main/frontend/ui/form/core/types";
import { sendMail } from "@/app/server/actions";

import GoogleCaptchaWrapper from "@/app/google-captcha-wrapper";
//import { GoogleReCaptchaProvider,GoogleReCaptcha } from "react-google-recaptcha-v3";
//const recaptchaKey: string | undefined =process?.env?.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

const ContactFormFieldProps=["name","email","organization","position","phone","message"]

const customFormFieldlayout={type:"col",label_ratio:""}


/*
interface contactFormFields extends EmptyFields
{
  fullname:string;
  email:string;
  organization:string;
  position:string;
  phone:string;
  Message:string;

}
*/




const ContactFormFieldMap: Record<keyof EmptyFields, FieldData> = {
    name: {
        label: "Name",
        type: "text",
        layout:{height:'h-[60px]',ratio:"w-1/2"},
        validation: {
          required: true,
          message: "This field is required",
        },
      },
      email: {
        label: "Email",
        type: "text",
        layout:{height:'h-[60px]',ratio:"w-1/2"},
        validation: {
          required: true,
          message: "This field is required",
        },
      },
      organization: {
        label: "Board/Organization",
        type: "text",
        layout:{height:'h-[60px]',ratio:"w-1/2"},
        validation: {
          required: true,
          message: "This field is required",
        },
      },
      phone: {
        label: "Phone Number",
        type: "text",
        layout:{height:'h-[60px]',ratio:"w-1/2"},
        ratio:"w-1/2",
        validation: {
          required: true,
          message: "This field is required",
        },
      },
      position: {
        label: "Position",
        type: "text",
        layout:{height:'h-[60px]',ratio:"w-1/2"},
        ratio:"w-1/2",
        validation: {
          required: true,
          message: "This field is required",
        },
      },
      message: {
        label: "Message",
        type: "textarea",
        layout:{height:' min-h-[100px] h-[100%] ', ratio:"w-1/2"},
        validation: {
          required: true,
          message: "This field is required",
        },
      },  
};

/*
const ContactFormFieldMap: Record<keyof EmptyFields, FieldData> = {
      name: {
        label: "Full Name",
        type: "text",
        layout:{height:'h-[60px]'},
        //layout:{type:"col",label_ratio:"1/2"},
        validation: {
          required: true,
          message: "This field is required",
        },
      },
      email: {
        label: "Email Address",
        type: "text",
        layout:{height:'h-[60px]'},
        //layout:{type:"col",label_ratio:"1/2"},
        validation: {
          required: true,
          message: "This field is required",
        },
      },
      message: {
        label: "Message",
        type: "textarea",
        layout:{height:'h-[250px] ', width:' md:w-[500px] '},
        //layout:{type:"col",label_ratio:"1/2"},
        validation: {
          required: true,
          message: "This field is required",
        },
      },  
};
*/


export default function Contactus(props:any) {



  
  return (
<>
<div className={`mx-auto max-md:px-6 max-md:4 bg-white max-w-7xl  z-50 `}>
  
                      
                    <div className="flex  max-md:flex-col px-2 md:px-3 lg:px-8 py-8  " aria-label="Global">
                    
                    
                    
                    
                        <article className="text-pretty  md:w-2/3 ">
                              <div className="  ">
                                    <div className="  w-[120px] ">
                                        <h1 className="text-h4  ">Form</h1>
                                    </div>    
                                    <div className="flex border-b-4 w-[100px] mb-8 items-center border-blue-400    ">&nbsp;</div>
                              </div>
                              
                              <div className="">
                              <GoogleCaptchaWrapper>
                              <GenericForm customFieldProps={ContactFormFieldProps} customFormFieldMap={ContactFormFieldMap} customFormFieldlayout={customFormFieldlayout} messagetranslations={props.messagetranslations} action={sendMail}/>
                              </GoogleCaptchaWrapper>
                              </div>
                        </article>
                      



              
                  </div>

</div>


<div className="flex  p-0 md:p-6 lg:px-8" aria-label="Global">
<div className="@container/main3 mx-auto bg-gray-300">
<div className="@[620px]/main3:underline text-lg m-20 font-bold px-6 py-33">

</div>
</div>       
</div>    


</>

  )
}