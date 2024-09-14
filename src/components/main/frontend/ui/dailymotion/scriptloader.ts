

// Detect if library loaded
function isLoadedScript(src:string) {
    return document.querySelectorAll('[src="' + src + '"]').length > 0
}

export const scriptloader=(id:number,src:string,callback:Function)=>
{

//      if(!isLoadedScript(src))
       {
                id=1;
                const script = document.createElement("script");
                script.src = src // whatever url you want here
                //script.charset = "utf-8";
                script.defer = true;
                script.async = true;
                script.onload = function () {
                    id=2;
                    callback();
                };
                ///document.head.insertBefore(script, head.firstChild);
                document.head.appendChild(script);
        }
  //   else callback();
}


/*

export async function getScript(url:string) {
    return new Promise((resolve, reject) => {
      const element = document.createElement('script');
      element.src = url;
      element.type = 'text/javascript';
      element.async = true;
      element.onload = () => resolve(true);
      element.onerror = () => reject();
      document.head.appendChild(element);
    });
  }*/