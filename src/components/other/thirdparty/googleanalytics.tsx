import Script from 'next/script'

export const GoogleAnalytics=(props:any)=>
{

    //console.log( "google console :"+props.Id)

    return (
     <> 
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${props.Id}`}>
      </Script>

      <Script id="google-analytics" async defer>
      {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${props.Id}');
      `}
      </Script>
    </>
    )
}

/*
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YDHJBXF5HT"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-YDHJBXF5HT');
</script>
*/