import {
    setInLocalStorage,
    getFromLocalStorage
    } from '@/components/other/infra/storage/localstorage';
 
    import CALLBACKS,{
      addCallback,
      call,
      Delay,
       } from './callbacks';
    
 
 //import * as utils from '@src/app/_manager/utils/utilmanager'
 
 
 //export function Delay(ms) {
    //return new Promise(resolve => setTimeout(resolve, ms));
  //}
 
  /*
 const CALLBACKS = {
    changeFontFamily: "changeFontFamily",
    changePrimaryColor: "changePrimaryColor",
    showMessage: "showMessage",
    setThemeOpen: "setThemeOpen",
 }
 */
 
 
 
 
 
 var AppManager=  (function() {
     'use strict';
 
 /*
     var callbacksStore={}
 
     const addCallback=(key,value)=>
     {
          //  if(!callbacksStore.hasOwnProperty(key))
           // {
             //   console.log("key iinitialize :"+key)
              //  callbacksStore[key]=[]
           // }
     
           //      callbacksStore[key]=value;
             //   var buffer=callbacksStore[key]
               // if(value!=null)
               // {
                 //  buffer.push(value)
                 //  callbacksStore[key]=buffer;
               // }
               callbacksStore[key]=value;
              console.log("Add callback store   :"+ value + " : "+ (callbacksStore[key]))
     
     }
     
     const call=(...values)=>
     {
        const key=values[0];
     
     //   console.log("key 1  :"+key)
       console.log(`store  ${key} :`+(callbacksStore[key]))
     
        if(callbacksStore.hasOwnProperty(key)  && !(typeof key ==="undefined"))
        {
     
            console.log("key 2  :"+key)
            var item=callbacksStore[key];
           
                console.log("key 3:"+key)
                if(key=='showMessage')
                {
                    if(item!=null)
                    {
                         item(values[1]);
                         console.log("\n\n Callback Initiated :"+key+item+"\n\n")
                    }
 
                    const delay=values[values.length-1]
                    Delay(delay).then(()=>{if(item!=null) item(values[1])})
                }
                else
                {
                     if(item!=null)
                          item(values[1]);
                }    
          
     
        }
     }
 
 */    
 
 
      var data =
      {
         primary_color:'red',
         mode:'dark',
         fontFamily:'Roboto',
         infra:
             {
                   messageTypes:{'info':'blue','success':'green','warning':'orange','error':'red'}
             }
      }  
 
      var functions =
      {
        storage: 
        {
          get:getFromLocalStorage,
          set:setInLocalStorage,
          changePrimaryColor:null,
        },
        infra:
        {
             Delay:Delay
        },
        colors:
        {
          getContrastTextColor:null,
          darken:null,
          lighten:null,
          darkenAll:null,
          lightenAll:null,
          getNextColor:null,
          getPrevColor:null,
          getColorArray:null,
          getRGB:null,
          getHSL:null,
        }
        
      }  
 
    
      var callbacks=
      {
         addCallback:addCallback,
         call:call,
         Message:CALLBACKS, 
      }  
      
      
 
 
     return {
         getData: data,
         getFunctions: functions,
         getCallbacks: callbacks,
      };
   
 
 })();
 
 
 export default AppManager;   