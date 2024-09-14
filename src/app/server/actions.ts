'use server'


import { headers } from "next/headers";
import {emailProps,sendEmailSmtp} from "./email/sendemail";

export async function getIPAddress() {
    return headers().get("x-forwarded-for");
}



function ValidateEmail(input:string) {

  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.match(validRegex)) {

    return true;

  } else {

    
    
    return false;

  }

}


async function postData(url = '', data = {}) {

const response = await fetch(url, {
  method: 'POST',
  mode: 'cors',
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  body: JSON.stringify(data)
});

const json = await response.json();
return json;
}







export async function sendMail(props:emailProps,gRecaptchaToken:string) {

  // ...

  //const secretKey = process?.env?.RECAPTCHA_SECRET_KEY;
  const secretKey="6LdLYhIpAAAAAKc2aEbqe1_ukbdUfZabspkdGs71";
  //console.log ("secretKey1 :"+secretKey+":")
  const formData = `secret=${secretKey}&response=${gRecaptchaToken}`;
  var ipaddress=await getIPAddress();

  //const formData = `secret=${secretKey}&response=${gRecaptchaToken}&remoteip={ipaddress}`;

//  console.log("ip address :"+ipaddress);
  const url="https://www.google.com/recaptcha/api/siteverify";

  //console.log(formData);
    const response = await fetch(url, {
      method: 'POST',
      cache: "no-store",
    //  mode: 'cors',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: (formData)
    });

    const data = await response.json();



      var output={};

   //  console.log("data :" + data);

      if (data && data?.success && data?.score > 0.5) {
        //console.log("res.data?.score:", data?.score);
        //output= {result:"success",success:true,message:"Email was sent successfully"}


        var output={}

        if(ValidateEmail(props.email))
        {
           var result=await sendEmailSmtp(props);
           if(result=="") 
            output= {result:"success",success:true,message:"Email was sent successfully"}
           else
            output= {result:"success",success:false,message:"Email Send Error Occured. contact admin1 "+ result}
        }
        else
        {
          output= {result:"success",success:false,message:"Invalid Email"}
        }
        // await new Promise((resolve) => setTimeout(resolve, 1));
        return (output)


      } else {
        //console.log("fail: res.data?.score:", data?.score);
        output= { result:"fail" , error:"You are a bot. This site is only for humans"+JSON.stringify(data), score: data?.score };
      }


      return output ;
      



  //let res = await fetch(
//    `http://dummyjson.com/products/1`
  //);

  /*
  var output={}

  if(ValidateEmail(props.email))
  {
     output={result:"success",message:"Email was sent successfully"}
  }
  else
  {
    output={result:"fail",error_message:" Invalid Email"}
  }
 // await new Promise((resolve) => setTimeout(resolve, 1));
  return (output)

  */
}