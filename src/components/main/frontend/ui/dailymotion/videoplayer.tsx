"use client"
import { useRef,useState, useCallback, useEffect,createRef } from 'react'
//import ReactPlayer from "react-player/lazy"
//import Script from "next/script";
import {scriptloader} from "./scriptloader";
//import ScriptLoader from "@/other/utils/misc/scriptloader";


interface videoProps
{
    videoid:string;
    targetid?:string;
    playerid?:string;
    
}


/*
async function retrying(func:Function, attempts:number) {
  for (let attempt = 1; attempt <= attempts; attempt++) {
    try {
      return await func();
    } catch (ex) {
      console.warn(`Failed in attempt ${attempt}`);
    }
  }
  throw new Error(`Failed after ${attempts} attempts`);
}
*/

// scriptToLoad will now be a reference to `window.Segment`

var dailymotion_loaded=0;

declare const window: any;

export const Videoplayer= (props:videoProps)=>
{

const[scriptsloaded, setScriptsloaded]=useState(false);
//const vidRef = useRef();


//const targetId = "playerDiv-"+ Math.floor(Math.random() * 99);
const targetId=props.targetid  
const videoId=props.videoid  
const playerId=props.playerid  



//const vidRef=useCallback((vidnode:any)=>

useEffect(() => {



//console.log(" useeffect  is loaded");

const onLoadScript=()=>
{


  //    console.log(" script is loaded ");
        
       

       window && window.dailymotion && window.dailymotion.createPlayer(targetId, {
        video: videoId,
        player: playerId,
        params: {
          startTime: 7,
          mute: false,
          scaleMode:'fill',
          enable_automatic_recommendations:false,
          enable_ads_controls:false,
          enable_dm_logo:false,
          enable_google_policy_ui:false,
          has_ads:false,
          //Possible values: fit, fill, fillLeft, fillRight, fillTop & fillBottom
        }

        })
        .then((player:any) => console.log(player))
        .catch((e:any) => console.error(e));

 };

if(dailymotion_loaded==0)
scriptloader(dailymotion_loaded,'//geo.dailymotion.com/libs/player/xqu2q.js',onLoadScript);
else if(dailymotion_loaded==1)
{
   var refreshIntervalId =  setInterval(()=>{
      if(dailymotion_loaded==2)  
      {
          onLoadScript();
          console.log("daily motion 2nd video loaded")
          clearInterval(refreshIntervalId);
      }    
    },20)
}
else
  onLoadScript();


//getScript("https://geo.dailymotion.com/libs/player/xqu2q.js").then(()=>
//{
  //onLoadScript();  
///});


},[]);



/*
useEffect(() => {
  //setIsClient(true)
        //  window.addEventListener('load', function() {

            if(vidRef.current)
            {
        
                window.dailymotion && window.dailymotion.createPlayer(targetId, {
                video: videoId,
                player: playerId,
                params: {
                  startTime: 7,
                  mute: false,
                  scaleMode:'fill',
                  enable_automatic_recommendations:false,
                  enable_ads_controls:false,
                  enable_dm_logo:false,
                  enable_google_policy_ui:false,
                  has_ads:false,
                  //Possible values: fit, fill, fillLeft, fillRight, fillTop & fillBottom
                }

                })
                .then((player:any) => console.log(player))
                .catch((e:any) => console.error(e));
            }    
     // });
    } 

, [vidRef.current]);



   {!scriptsloaded && 
    <script async defer  ref={vidRef}  id="dailymotion" src="https://geo.dailymotion.com/libs/player/xqu2q.js" />

*/

return (
    <>
    <div id={targetId}   style={{width:'100%',height:'525px'}} > Video Player </div>
    
 
    
    
    </>
);


/*
<script src="https://geo.dailymotion.com/libs/player/xqu2q.js"></script>
return (

    <>
    {isClient ? 
    (
            <div className=" w-full">


<ReactPlayer
  className='react-player1'
  url={"https://www.dailymotion.com/video/"+props.videoid}
  controls
  width={'100%'}
  height={'525px'}
/>




            </div>
    ):null}
      </>  


);

*/

/*}       
<ReactPlayer
    className='react-player1'
  url={"https://www.dailymotion.com/video/"+props.videoid}
  controls
  width={'100%'}
  height={'500px'}
/>


<video style={{ width: "400px", height: "525px" }}>
              <source src={"https://www.dailymotion.com/video/"+"kdQwnUrCYnLqYht390X"} />
            </video>


*/

}

/*
Whether to activate the UI to be Google policy compliant (e.g.: PIP close button outside Player UI)

boolean
enable_info
Whether to display the video title and owner information

boolean
enable_playback_controls
Whether to display the player controls during a video

boolean
enable_receive_url_location
Allow player to receive full page URL where player is embedded

boolean
enable_sharing
Whether to enable the sharing button

boolean
enable_sharing_url_location
Whether to share the location where the video is embedded (video URL by default)

boolean
enable_start_pip_expanded
Whether to start PiP in expanded mode on mobile

boolean
enable_startscreen_dm_link
Whether to show the "Watch on Dailymotion" link on the startscreen

boolean
enable_tap_to_unmute
Whether to enable the tap to unmute feature

boolean
enable_titles_in_video_cards
Whether to show the videos titles in the carousel on the endscreen

boolean
enable_video_title_link
Whether to activate the link on the video title text

boolean
enable_wait_for_custom_config
Whether to configure the player to wait for the custom config object before starting playback

boolean
has_ads
Whether ads are enabled

boolean
has_reached_playback_limits
Whether the organization that owns the player has reached some limits (bandwidth, plays)

identifier
id
Unique object identifier (unique among all players)

string
item_type
Graph type of this object (hopefully player)

string
label
Mandatory player label

url
lib_script_url
URL of the player embed library to be used in a script HTML tag

user
owner
Owner of this player. You can retrieve sub-fields of this user object using the dot-notation (e.g.: owner.id).

string
pip
Picture-in-Picture mode

string
recommendations_optimisation
Optimise recommendations based on selected model: monetization, engagement, views

date
updated_time
Date and time when this player was updated

string
watermark_image_type
Image type of the watermark

string
watermark_link_type
Type of watermark link

url
watermark_link_url
*/