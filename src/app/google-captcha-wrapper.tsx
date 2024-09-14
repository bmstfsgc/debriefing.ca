"use client";
import dynamic from 'next/dynamic'
 
//import { GoogleReCaptchaProvider,GoogleReCaptcha } from "react-google-recaptcha-v3";
import React from "react";

const  GoogleReCaptchaProvider=dynamic(() => import("react-google-recaptcha-v3").then(module => module.GoogleReCaptchaProvider));

export default function GoogleCaptchaWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const recaptchaKey: string | undefined ="6LdLYhIpAAAAAIw6xmJi1aW6R-yq4PMZpY-jyEfb";
    //process?.env?.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;



  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={recaptchaKey ?? "NOT DEFINED"}
     
    >
      {children}
    </GoogleReCaptchaProvider>
  );
}