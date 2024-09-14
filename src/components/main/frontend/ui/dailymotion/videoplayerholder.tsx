
import {Videoplayer} from "@/components/main/frontend/ui/dailymotion/videoplayer";
import {videoProps} from "./types"



  
const VideoplayerHolder = ({children,...props}:videoProps) => {


    return(

        <Videoplayer {...props}>{children}</Videoplayer>
    )
}   

export default VideoplayerHolder;