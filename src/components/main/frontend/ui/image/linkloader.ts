

export const imagePreLoader=(src:string)=>
{
    //<link rel="preload" as="image" href="/static/images/site/home/banner11-980x525.jpg" />
    var resource = document.createElement('link'); 
    resource.setAttribute("rel", "preload");
    resource.setAttribute("href",src);
    resource.setAttribute("as","image");      
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(resource);
}

export const linkloader=(src:string)=>
{
    var resource = document.createElement('link'); 
    resource.setAttribute("rel", "stylesheet");
    resource.setAttribute("href",src);
    resource.setAttribute("type","text/css");      
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(resource);
}
