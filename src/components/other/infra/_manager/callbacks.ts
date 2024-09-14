export function Delay(ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
 
  
const CALLBACKS = {
    /*
    changeFontFamily: "changeFontFamily",
    changePrimaryColor: "changePrimaryColor",
    changeDarkLightMode: "changeDarkLightMode",
    showMessage: "showMessage",
    showMessageBucket:"showMessageBucket",
    showThemePanel: "showThemePanel",
    setSliderValue: "setSliderValue",
    firebaseLogout:"firebaseLogout",
    loggedInUser:"loggedInUser",  
    updateSidebarMenuStatus:"updateSidebarMenuStatus",
    */
    showSideBarMenu:"showSideBarMenu"
 }


interface emptyObject{}

var callbacksStore:Record<string, object>={}

export const addCallback=(key:keyof typeof callbacksStore,value:object)=>
{
       callbacksStore[key]=[value];
}

export const call=(...values:any)=>
{
    const key=values[0];

  
    if(callbacksStore.hasOwnProperty(key)  && !(typeof key ==="undefined"))
    {

        var buffer=callbacksStore[key];
        if(Array.isArray(buffer))
        buffer.forEach((item)=>
        {

            if(key=='showMessage')
            {
                if(item!=null)
                item(values[1]);
                
                const delay=values[values.length-1]
             
                Delay(delay).then(()=>{
                  //  const messageBucket=values[1]
                   // messageBucket[0]="blank"
                    //messageBucket[1]="success"
                    if(item!=null) 
                    {
                       /// item(messageBucket)
                       item("")
                    }    
                 })
            }
            else if (key=='showMessageBucket')
            {
                if(item!=null)
                item(values[1]);
                
                const delay=values[values.length-1]
             
                Delay(delay).then(()=>{
                    const messageBucket=[]
                    messageBucket[0]="blank"
                    messageBucket[1]="success"
                    if(item!=null) 
                    {
                       item(messageBucket)
                       
                    }    
                 })
            }
            else
            {
                console.log(item)
                 if(item!=null)
                 {
                     const [name,...rest]=values;
                     Delay(500).then(()=>{
                     item(...rest);
                     });
                 }     
            }    
        });

    }
}


export default CALLBACKS;