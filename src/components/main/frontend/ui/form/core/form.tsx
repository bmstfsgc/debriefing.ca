"use client"
import React from 'react';
import { Controller, useForm,FieldValues } from "react-hook-form";
import { FieldData} from "./types";
import { Field } from "./formFields";
import { GoogleReCaptchaProvider,useGoogleReCaptcha,GoogleReCaptcha } from "react-google-recaptcha-v3";
//import { headers } from "next/headers";
import cookies from "browser-cookies";

const FormFieldProps=["name","email","message"]


export interface  EmptyFields
{
    

}


interface contactFormFields extends EmptyFields
{
  fullname:string;
  email:string;
  organization:string;
  position:string;
  phone:string;
  Message:string;
}




export const FormFieldMap= {
    name: {
        label: "Name",
        type: "text",
        ratio:"1/2",
        validation: {
          required: true,
          message: "This field is required",
        },
      },
      email: {
        label: "Email",
        type: "text",
        ratio:"w-1/2",
        validation: {
          required: true,
          message: "This field is required",
        },
      },
      organization: {
        label: "Board/Organization",
        type: "text",
        ratio:"w-1/2",
        validation: {
          required: true,
          message: "This field is required",
        },
      },
      phone: {
        label: "Phone Number",
        type: "text",
        ratio:"w-1/2",
        validation: {
          required: true,
          message: "This field is required",
        },
      },
      position: {
        label: "Position",
        type: "text",
        ratio:"w-1/2",
        validation: {
          required: true,
          message: "This field is required",
        },
      },
      message: {
        label: "Message",
        type: "textarea",
        ratio:"w-full",
        validation: {
          required: true,
          message: "This field is required",
        },
      },  
};



const elapsedTime=(startTime:number ,seconds:number)=>
{
    const endTime  = new Date().getTime();
    var timeDiff = endTime - startTime; //in ms
    // strip the ms
    timeDiff /= 1000;
  
    // get seconds 
    var elapsedSeconds = Math.round(timeDiff);
    

    //console.log( elapsedSeconds +" : "+seconds)
    if(elapsedSeconds> seconds)
    return 0;
    else 
    return seconds-elapsedSeconds;
}


function updateUserElaspedTime(status:boolean) 
{

//console.log(" COOKIES : "+JSON.stringify(cookies));
  const userIp = cookies.get("user-ip") ?? "";
  //var ipaddress=await (header.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0]
  var ipaddress=userIp;
  var user_info:any=localStorage.getItem('user_info');

  //console.log("user indo :"+user_info);

  if(status)
  {
    //update the time
    //console.log("force update time")
    user_info={ipaddress:ipaddress,oldtime:new Date().getTime()}
    localStorage.setItem('user_info', JSON.stringify(user_info));
  }
  else 
  {

          if(user_info)
          {
              user_info=JSON.parse(user_info);
              var old_ipaddress=user_info['ipaddress'];

              //console.log ( "compare :"+old_ipaddress + ":"+ipaddress)
              if(old_ipaddress===ipaddress)
              {
                  var oldtime=user_info['oldtime'];

                  const delay = parseInt(process.env.NEXT_PUBLIC_CONTACT_FORM_SUBMISSION_DELAY || '')
                  const formDelay = Number.isInteger(delay) ? delay : 300

                  const elapsedSeconds=elapsedTime(oldtime,formDelay)
                  if(elapsedSeconds==0)
                  {

                //      console.log ( "elapsed :"+old_ipaddress + ":"+ipaddress)
                      return 0;
                  }
                  else
                  {

                    //console.log ( "not elapsed :"+old_ipaddress + ":"+ipaddress)
                    return elapsedSeconds;
                  }  
              }

          }
          else 
          {
            //first time called , so update time.
            user_info={ipaddress:ipaddress,oldtime:new Date().getTime()}
            localStorage.setItem('user_info', JSON.stringify(user_info));
          }
  }  
  return 0;
}


export interface FormProps{
  customFormFieldlayout: any ;
  customFormFieldMap: Record<keyof EmptyFields, FieldData> ;
  customFieldProps:Array<string>;
  messagetranslations:any;
  action:Function;
  
}

// Generic identity function
function identity<T>(arg: T): T {
  return arg;
}


//const identity2 = <T,>(x: T) => x;
//export const MyComp = <ItemType>(props: MyCompProps<ItemType>): React.ReactElement => 






const recaptchaKey: string | undefined ="6LfQrnYpAAAAAOAo0Yij3CMX3iv_Bw8vfbigEz1V";
    //process?.env?.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

export const GenericForm : React.FC<FormProps> =< T extends  EmptyFields>(props:FormProps) =>  
//const GenericForm=() =>
{  

  const [formStates,setFormStates]=React.useState({readystatus:true,responseStatus:true,responseText:"",disabled_class:''});
  const {customFormFieldMap, customFieldProps,customFormFieldlayout,messagetranslations,action} = props;
  const [recaptchaDone,setRecaptchaDone]=React.useState(false);

  

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<T>();

  const providerFields = customFieldProps;
   // Import 'executeRecaptcha' using 'useReCaptcha' hook
  const { executeRecaptcha } = useGoogleReCaptcha();
  



//console.log(props.messagetranslations);

  const onSubmit = async (data:T) => {

    if (!executeRecaptcha) {
      //console.log("Execute recaptcha not yet available");
      return;
    }
    executeRecaptcha("contactus").then((gReCaptchaToken) => {
        //  console.log(gReCaptchaToken, "response Google reCaptcha server");
          SubmitForm(data,gReCaptchaToken);
    });
  
  }




  const SubmitForm = (data:T,gReCaptchaToken : string) => {

   setFormStates(prevState=>({...prevState,readystatus:false,responseStatus:true,responseText:"",disabled_class:' opacity-50'}))

  //setState(prevState => ({ ...prevState, c: 3 }));
  var elapsedSeconds=updateUserElaspedTime(false);
  if(elapsedSeconds!=0)
  {

    //console.log (" NOT ELAPSED !!! ");
    var error_message=`You cant send emails succssively. you have to wait 1 (${elapsedSeconds} seconds left) minute(s) to send next email( to prevent bots) `;
    setFormStates(prevState=>({...prevState,readystatus:true,responseStatus:false,responseText:error_message,disabled_class:''}))
    return;
  }  
  else 
  {
   // console.log ("  ELAPSED !!! ");
  }
  

  
  action(data,gReCaptchaToken).then((response:any) => {
    //console.log(response); // fetched movies
    //console.log(response['result'])

    if(response['result']=="success")
    {


      var message=response['message'];
      var success=response['success'];
      if(success)
      {
        setFormStates(prevState=>({...prevState,readystatus:true,responseStatus:true,responseText:message,disabled_class:''}))
        updateUserElaspedTime(true);
      }
      else
        setFormStates(prevState=>({...prevState,readystatus:true,responseStatus:false,responseText:message,disabled_class:''}))
      //update the user entry time

    }
    else
    {
       var error_message=response['error'];
       setFormStates(prevState=>({...prevState,readystatus:true,responseStatus:false,responseText:error_message,disabled_class:''}))
    }   
    
  });
  
  }


 const renderField = (
    name: never,
    fieldData: FieldData,
  ) => {
    switch (fieldData.type) {
      case "text":
      case "password":
        return (
          
          <Field
            label={messagetranslations[name]}
            required={!!fieldData.validation?.required}
            error={errors[name]}
            fieldlayout={fieldData.layout}
            formfieldlayout={customFormFieldlayout}
            
            key={name}
          >
            
            <input
              {...register(name, {
                required: fieldData.validation?.message,
              })}
              type={fieldData.type}
              id={name}
              autoComplete={"off"}
            />
          </Field>
        );

      case "textarea":
            return (
              <Field
                label={messagetranslations[name]}
               required={!!fieldData.validation?.required}
                error={errors[name]}
                fieldlayout={fieldData.layout}
                formfieldlayout={customFormFieldlayout}
            
                key={name}
              >
              <Controller
                    name={name}
                    control={control}
                    rules={{
                        required: true,
                        validate: {
                          maxLength: (value: string) => value.length >= 1,
                        },
                    }}
                    render={({ field: { onChange, value } }) => (
                      
                        <textarea
                            placeholder={messagetranslations['placeholder']}
                            style={{resize: "none"}}
                            onChange={onChange}
                            value={value}
                            className={" w-full h-full "+ fieldData.layout.width}
                        />
                     
                    )}
                />
              </Field>
              
            );  
      case "select":
        return (
          <Field
            label={messagetranslations[name]}
            htmlFor={name}
            key={name}
            fieldlayout={fieldData.layout}
            formfieldlayout={customFormFieldlayout}
            error={errors[name]}
          >
            <Controller
              rules={fieldData.validation}
              name={name}
              control={control}
              render={({
                field: { ref, value, onChange, ...fieldProps },
                fieldState: { invalid },
              }) => {
                return (
                  <select
                    {...fieldProps}
                    value={typeof value === "string" ? value : ""}
                  >
                    {fieldData.placeholder && (
                      <option value="" disabled>
                        {fieldData.placeholder}
                      </option>
                    )}
                    {(fieldData.options || []).map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                );
              }}
            />
          </Field>
        );
      case "checkbox":
        return (
          <Field
            label={messagetranslations[name]}
            htmlFor={name}
            key={name}
            fieldlayout={fieldData.layout}
            formfieldlayout={customFormFieldlayout}
            
            error={errors[name]}
          >
            <input
              {...register(name, { required: fieldData.validation?.message })}
              type={fieldData.type}
              id={name}
              autoComplete={"off"}
            />
          </Field>
        );
      default:
        throw new Error(`Unknown field type: ${fieldData.type}`);
    }
  };
 
  // just find where to put error code using formfieldlayout label ratio
  var field_ratio="";
  var label_ratio="";
  var type= (customFormFieldlayout.type==="row") ?" flex-row " :" flex-col my-[-10px] ";
  if(customFormFieldlayout && customFormFieldlayout.hasOwnProperty('label_ratio'))
  {
    label_ratio=customFormFieldlayout["label_ratio"]
    if(label_ratio=="1/3")
    {
      label_ratio= " md:w-1/3  "
      field_ratio= " md:w-2/3  "
    }  
    if(label_ratio=="1/2")
    {
      label_ratio= " md:w-1/2  "
      field_ratio= " md:w-1/2  "
    }

    if(label_ratio=="2/3")
    {
      label_ratio= " md:w-2/3  "
      field_ratio= " md:w-1/3  "
    }
  }

  const form_columns=customFormFieldlayout["cols"];

  return (
    <div className="relative w-full ">

      <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: "" }}>
        <>
        <div className={' w-full flex flex-wrap '}>
          {providerFields.map((fieldName) => {
            const field = customFormFieldMap[fieldName as never];
            return renderField( fieldName as never, field);
          })}
            <Field 
            fieldlayout={{height:'h-[50px]'}}
            formfieldlayout={customFormFieldlayout}
            label= {'blank'}
            >
          <button className={` relative w-[150px] overflow:hidden bg-menuhighlight/95 text-menucolor 
          hover:bg-menuhighlight flex  items-center justify-center gap-2 py-2 `  + formStates.disabled_class}  
          disabled={!formStates.readystatus} >
          <div className="block    font-bold z-10 transition-opacity duration-500 ease-in-out">Send</div>

                  {!formStates.readystatus &&
                  <div className="absolute right-1 ">
                          <div className="fill-white  w-[30px] spinner animate-spin">
                            <svg fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                            </div>
                  </div>  
                }
         </button>

         
 

            </Field>

            </div>
      </>
      <div className="h-[50px]  items-center">
      {formStates.readystatus && formStates.responseStatus &&
            
            <div className=" animate-fadeIn  ">
            <div className={"flex  "+ type}>
                <div className={"flex "+type +label_ratio}>&nbsp;</div>
                <div className={"flex text-green-400 font-bold"+ field_ratio}>{formStates.responseText}</div>
            </div>
            </div>
            
          }

          {formStates.readystatus && !formStates.responseStatus &&

          <div className="   animate-fadeIn ">
           <div className={"flex  "+type}>
              <div className={"flex "+ type + label_ratio}>&nbsp;</div>
              <div className={"flex   text-red-400 font-bold "+ field_ratio} >{formStates.responseText}</div>
          </div>
          </div>
      }


      
      </div>  

      </form>

      
     
      
    </div>
  );
  
 //return (<div></div>);
};

const coolbutton=()=>
{
/*
  <span className="relative whitespace-nowrap">
  <span className="block px-8 py-2 text-white  bg-gradient-to-r from-blue-500 to-blue-600 z-10 transition-opacity duration-500 ease-in-out">Send</span>
  </span>
*/


return (
  <span className="relative p-0.5 rounded-full bg-slate-200 hover:bg-slate-800 transition duration-500 overflow-hidden flex items-center justify-center before:opacity-0 hover:before:opacity-100 before:absolute before:w-1/2 before:pb-[100%] before:bg-[linear-gradient(90deg,_theme(colors.indigo.500/0)_0%,_theme(colors.indigo.500)_35%,_theme(colors.indigo.200)_50%,_theme(colors.indigo.500)_65%,_theme(colors.indigo.500/0)_100%)] before:animate-[spin_3s_linear_infinite]">
  <span className="relative whitespace-nowrap">
      <span className="block px-8 py-2 rounded-full bg-gradient-to-r from-slate-200 to-slate-100 z-10 hover:opacity-0 transition-opacity duration-500 ease-in-out  ">Send</span>
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-slate-900 to-slate-800 z-10 inline-flex items-center whitespace-nowrap overflow-hidden opacity-0 hover:opacity-100
      transition-opacity duration-500 before:bg-clip-text before:text-transparent before:bg-gradient-to-r before:from-indigo-500 before:to-indigo-300 after:bg-clip-text after:text-transparent 
      after:bg-gradient-to-r after:from-indigo-500 after:to-indigo-300 before:content-[''] after:content-[''] before:px-2
       after:px-2 before:animate-infinite-scroll after:animate-infinite-scroll" aria-hidden="true"></span>
  </span>
</span>
)

}