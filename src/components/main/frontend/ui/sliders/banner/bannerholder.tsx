"use client"
import Banner from "@/components/main/frontend/ui/sliders/banner/banner";
import {BannerProps} from "./types"



  
const BannerHolder = ({children,...props}:BannerProps) => {


    return(

        <Banner {...props}>{children}</Banner>
    )
}   

export default BannerHolder;