"use strict";
import  nodemailer from "nodemailer";

const host= "smtp.a10mi.com";
const username= "contactusdebriefing@debriefing.ca";
const password= "Lly9k59_2";

//alexk@netdevtech.com/#Marswater77789

//const host= "smtp.netdevtech.com";
//const username= "alexk@netdevtech.com";
//const password= "#Marswater77789";


export interface emailProps
{
    name:string;
    email:string;
    message:string;
    organization:string;
    phone:string;
    position:string;
}

/*
var smtpTransport:any = nodemailer.createTransport(smtpTransport({
//const smtpTransport = nodemailer.createTransport({
  host: host,
  port: 465,
  //port: 443,
  //port:587,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: username,
    pass: password,
  },
  tls: {
    rejectUnauthorized: false
  }
}));

*/


var smtpTransport=nodemailer.createTransport({
  host: host,
  port: 465,
  secure: true, // use TLS
  auth: {
    user: username,
    pass: password,
  },
  tls: {
    // do not fail on invalid certs
    rejectUnauthorized: false,
  },
});

const compilemessage=(props:emailProps)=>
{
  var message=`
    Name          : ${props.name}
    Email         : ${props.email}
    Organization  : ${props.organization}
    Postion       : ${props.position}
    Phone         : ${props.phone}

    Meaage        : 
                    ${props.message}
    `;
    return message;
}

export async function sendEmailSmtp(props:emailProps) {
  // send mail with defined transport object


  try
  {
  const info = await smtpTransport.sendMail({
    //from: '"Admin 👻" <alexk@netdevtech.com>', // sender address
    //to: props.email, // list of receivers
    //subject: "Test from netdevtech.com", // Subject line
    //text: props.message, // plain text body
    //html: "<b>Hello world  test from netdevtech.com?</b>", // html body

    from: 'Admin 👻" <contactusdebriefing@debriefing.ca>', // sender address
    to: 'internaladmin@debriefing.ca', // list of receivers
    subject: "Message from "+ "<"+props.name+">"+ props.email +" ("+props.organization+")", // Subject line
    text: compilemessage(props), // plain text body
    //html: "<b>Hello world  test from netdevtech.com?</b>", // html body
  } );

  //console.log("Message sent: %s", info.messageId);
  return "";  
}
catch(e) 
{
  console.log("error :"+e);
  return e;
}

  
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  //
  // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
  //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
  //       <https://github.com/forwardemail/preview-email>
  //
}




// Handles GET requests to /api

/*
export async function GET(request: Request) {
  // ...
return main().catch(console.error).then(function(results){
    // access results here by chaining to the returned promise
    return NextResponse.json({ message: "fail ?"+results });
});;
  

}

// Handles POST requests to /api
export async function POST(request: Request) {
  // ...
  return NextResponse.json({ message: "Hello World" });
}
*/