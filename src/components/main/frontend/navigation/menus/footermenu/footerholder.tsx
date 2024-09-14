
import Footer from "@/components/main/frontend/navigation/menus/footermenu/footer";
import {FooterProps} from "./types"



  
const FooterHolder = ({...props}:FooterProps) => {


    return(

        <Footer {...props}></Footer>
    )
}   

export default FooterHolder;