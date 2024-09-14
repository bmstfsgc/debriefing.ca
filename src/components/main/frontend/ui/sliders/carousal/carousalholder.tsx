"use client"
import Carousal from "@/components/main/frontend/ui/sliders/carousal/carousal";
import {CarousalProps} from "./types"



  
const CarousalHolder = ({children,...props}:CarousalProps) => {


    return(

        <Carousal {...props}>{children}</Carousal>
    )
}   

export default CarousalHolder;