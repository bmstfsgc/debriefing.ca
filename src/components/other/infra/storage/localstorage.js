

export  function setInLocalStorage (tag,data){
    localStorage.setItem(tag, JSON.stringify(data));
}
  
export function getFromLocalStorage(tag) { 
    var obj=null;
    const storeddata=localStorage.getItem(tag);
    console.log(" data1 :"+storeddata)
    if(!(storeddata==="undefined") && !(typeof storeddata ==="undefined"))
    {
        console.log(" data2 :"+storeddata)
           obj = JSON.parse(storeddata);
    }
    return obj;
}

