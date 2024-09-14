import {GenericForm,EmptyFields} from  "@/root/src/components/main/frontend/ui/form/core/form"
import { FieldData} from  "@/components/main/frontend/ui/form/core//types";
import { sendMail } from "@/app/server/actions";

import GoogleCaptchaWrapper from "@/app/google-captcha-wrapper";
//import { GoogleReCaptchaProvider,GoogleReCaptcha } from "react-google-recaptcha-v3";
//const recaptchaKey: string | undefined =process?.env?.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

const ContactFormFieldProps=["name","email","organization","position","phone","message"]

const customFormFieldLayout={type:"col",label_width_ratio:" w-full ",field_width_ratio:" w-full "}

const ContactFormFieldMap: Record<keyof EmptyFields, FieldData> = {
    name: {
        label: "Name",
        type: "text",
        layout:{height:'h-[60px]',ratio:" w-full md:w-1/2  "},
        validation: {
          required: true,
          message: "This field is required",
        },
      },
      email: {
        label: "Email",
        type: "text",
        layout:{height:'h-[60px]',ratio:" w-full md:w-1/2  "},
        validation: {
          required: true,
          message: "This field is required",
        },
      },
      organization: {
        label: "Board/Organization",
        type: "text",
        layout:{height:'h-[60px]',ratio:" w-full md:w-1/2  "},
        validation: {
          required: true,
          message: "This field is required",
        },
      },
      phone: {
        label: "Phone Number",
        type: "text",
        layout:{height:'h-[60px]',ratio:" w-full md:w-1/2  "},
       validation: {
          required: true,
          message: "This field is required",
        },
      },
      position: {
        label: "Position",
        type: "text",
        layout:{height:'h-[60px]',ratio:" w-full md:w-1/2  "},
        validation: {
          required: true,
          message: "This field is required",
        },
      },
      message: {
        label: "Message",
        type: "textarea",
        layout:{height:'h-[200px]', ratio:" w-full md:w-full  "},
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


  var messagetranslations=props.messagetranslations;
  return (
<>

                              <GoogleCaptchaWrapper>
                              <GenericForm customFieldProps={ContactFormFieldProps} customFormFieldMap={ContactFormFieldMap} customFormFieldlayout={customFormFieldLayout} messagetranslations={messagetranslations} action={sendMail}/>
                              </GoogleCaptchaWrapper>

</>

  )
}