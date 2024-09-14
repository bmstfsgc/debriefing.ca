
/*
interface SvgProps{
    size:string;
    fill: string;
    outerStroke:string;
    outerStrokeWidth:number;
    innerStroke:string;
    innerStrokeWidth:number;
  
  }
  
  const defaultProps: SvgProps={
    size:"24px",
    fill:"#9bd0f4",
    outerStroke:"#9bd0f4",
    outerStrokeWidth:70,
    innerStroke:"#2f80d0",
    innerStrokeWidth:80,
  }
*/
/*

  const Doublecircle=(defaultProps:SvgProps)=>
  {
    var style={

        "minWidth":defaultProps.size,
        "maxWidth":defaultProps.size,
        "minHeight":defaultProps.size,
        "maxHeight":defaultProps.size,
        "width":defaultProps.size,
        "height":defaultProps.size,
    }
    return(
      
            <div style={style}>

   	<svg fill={defaultProps.fill} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                  width={defaultProps.size} height={defaultProps.size}  viewBox="-59.5 -59.5 714.02 714.02"  stroke={defaultProps.outerStroke} strokeWidth={defaultProps.outerStrokeWidth}>
                  <g id="SVGRepo_bgCarrier"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke={defaultProps.innerStroke}  strokeWidth={defaultProps.innerStrokeWidth}> 
                  <g> <g> <g> <path d="M507.529,87.493c-27.264-27.264-59.022-48.672-94.396-63.635C376.489,8.358,337.588,0.5,297.511,0.5 c-40.078,0-78.979,7.858-115.624,23.358c-35.373,14.961-67.132,36.371-94.395,63.635c-27.264,27.263-48.673,59.022-63.635,94.395 C8.358,218.532,0.5,257.434,0.5,297.511c0,40.077,7.858,78.979,23.358,115.623c14.961,35.373,36.371,67.132,63.635,94.396 c27.263,27.263,59.022,48.672,94.395,63.634c36.645,15.5,75.546,23.358,115.624,23.358c40.077,0,78.979-7.858,115.623-23.358 c35.373-14.961,67.133-36.371,94.396-63.634c27.263-27.264,48.673-59.022,63.634-94.396 c15.499-36.645,23.358-75.546,23.358-115.623c0-40.077-7.858-78.979-23.358-115.624 C556.202,146.515,534.792,114.756,507.529,87.493z M297.511,551.682c-140.375,0-254.171-113.797-254.171-254.171 c0-140.375,113.796-254.171,254.171-254.171c140.374,0,254.171,113.796,254.171,254.171 C551.682,437.885,437.885,551.682,297.511,551.682z"></path> <path d="M297.511,595.021c-40.146,0-79.112-7.872-115.818-23.397c-35.433-14.988-67.245-36.434-94.553-63.741 c-27.31-27.31-48.755-59.122-63.742-94.555C7.872,376.623,0,337.656,0,297.511c0-40.145,7.872-79.112,23.397-115.818 c14.987-35.432,36.433-67.245,63.742-94.553c27.308-27.309,59.12-48.755,94.553-63.742C218.399,7.872,257.366,0,297.511,0 c40.146,0,79.112,7.872,115.817,23.397c35.435,14.988,67.247,36.434,94.555,63.742c27.31,27.31,48.755,59.123,63.741,94.553 c15.525,36.706,23.397,75.673,23.397,115.818c0,40.144-7.872,79.11-23.397,115.817c-14.985,35.432-36.432,67.244-63.741,94.555 c-27.31,27.31-59.122,48.755-94.555,63.741C376.623,587.149,337.656,595.021,297.511,595.021z M297.511,1 C257.5,1,218.665,8.845,182.082,24.318c-35.314,14.937-67.02,36.311-94.236,63.528c-27.218,27.217-48.591,58.923-63.528,94.236 C8.845,218.665,1,257.5,1,297.511s7.845,78.847,23.318,115.429c14.936,35.312,36.31,67.019,63.528,94.236 c27.217,27.216,58.922,48.59,94.236,63.526c36.582,15.474,75.417,23.319,115.429,23.319c40.011,0,78.847-7.846,115.429-23.319 c35.312-14.936,67.019-36.309,94.236-63.526c27.219-27.22,48.592-58.925,63.526-94.236 c15.474-36.584,23.319-75.42,23.319-115.429c0-40.011-7.846-78.847-23.319-115.429c-14.935-35.312-36.309-67.017-63.526-94.236 c-27.217-27.216-58.922-48.59-94.236-63.528C376.357,8.845,337.521,1,297.511,1z M297.511,552.182 c-68.025,0-131.979-26.49-180.08-74.592C69.33,429.489,42.84,365.535,42.84,297.511c0-68.025,26.49-131.979,74.591-180.08 S229.486,42.84,297.511,42.84c68.024,0,131.979,26.49,180.079,74.591c48.102,48.101,74.592,112.055,74.592,180.08 c0,68.024-26.49,131.979-74.592,180.079C429.489,525.691,365.535,552.182,297.511,552.182z M297.511,43.84 c-67.758,0-131.46,26.386-179.373,74.298S43.84,229.753,43.84,297.511s26.386,131.46,74.298,179.372 c47.913,47.912,111.615,74.299,179.373,74.299s131.46-26.387,179.372-74.299s74.299-111.614,74.299-179.372 s-26.387-131.46-74.299-179.373C428.971,70.226,365.269,43.84,297.511,43.84z"></path> </g> </g> </g> </g>
                  
                  <g id="SVGRepo_iconCarrier"> <g> <g> <g> 
                    <path d="M507.529,87.493c-27.264-27.264-59.022-48.672-94.396-63.635C376.489,8.358,337.588,0.5,297.511,0.5 c-40.078,0-78.979,7.858-115.624,23.358c-35.373,14.961-67.132,36.371-94.395,63.635c-27.264,27.263-48.673,59.022-63.635,94.395 C8.358,218.532,0.5,257.434,0.5,297.511c0,40.077,7.858,78.979,23.358,115.623c14.961,35.373,36.371,67.132,63.635,94.396 c27.263,27.263,59.022,48.672,94.395,63.634c36.645,15.5,75.546,23.358,115.624,23.358c40.077,0,78.979-7.858,115.623-23.358 c35.373-14.961,67.133-36.371,94.396-63.634c27.263-27.264,48.673-59.022,63.634-94.396 c15.499-36.645,23.358-75.546,23.358-115.623c0-40.077-7.858-78.979-23.358-115.624 C556.202,146.515,534.792,114.756,507.529,87.493z M297.511,551.682c-140.375,0-254.171-113.797-254.171-254.171 c0-140.375,113.796-254.171,254.171-254.171c140.374,0,254.171,113.796,254.171,254.171 C551.682,437.885,437.885,551.682,297.511,551.682z"></path> <path d="M297.511,595.021c-40.146,0-79.112-7.872-115.818-23.397c-35.433-14.988-67.245-36.434-94.553-63.741 c-27.31-27.31-48.755-59.122-63.742-94.555C7.872,376.623,0,337.656,0,297.511c0-40.145,7.872-79.112,23.397-115.818 c14.987-35.432,36.433-67.245,63.742-94.553c27.308-27.309,59.12-48.755,94.553-63.742C218.399,7.872,257.366,0,297.511,0 c40.146,0,79.112,7.872,115.817,23.397c35.435,14.988,67.247,36.434,94.555,63.742c27.31,27.31,48.755,59.123,63.741,94.553 c15.525,36.706,23.397,75.673,23.397,115.818c0,40.144-7.872,79.11-23.397,115.817c-14.985,35.432-36.432,67.244-63.741,94.555 c-27.31,27.31-59.122,48.755-94.555,63.741C376.623,587.149,337.656,595.021,297.511,595.021z M297.511,1 C257.5,1,218.665,8.845,182.082,24.318c-35.314,14.937-67.02,36.311-94.236,63.528c-27.218,27.217-48.591,58.923-63.528,94.236 C8.845,218.665,1,257.5,1,297.511s7.845,78.847,23.318,115.429c14.936,35.312,36.31,67.019,63.528,94.236 c27.217,27.216,58.922,48.59,94.236,63.526c36.582,15.474,75.417,23.319,115.429,23.319c40.011,0,78.847-7.846,115.429-23.319 c35.312-14.936,67.019-36.309,94.236-63.526c27.219-27.22,48.592-58.925,63.526-94.236 c15.474-36.584,23.319-75.42,23.319-115.429c0-40.011-7.846-78.847-23.319-115.429c-14.935-35.312-36.309-67.017-63.526-94.236 c-27.217-27.216-58.922-48.59-94.236-63.528C376.357,8.845,337.521,1,297.511,1z M297.511,552.182 c-68.025,0-131.979-26.49-180.08-74.592C69.33,429.489,42.84,365.535,42.84,297.511c0-68.025,26.49-131.979,74.591-180.08 S229.486,42.84,297.511,42.84c68.024,0,131.979,26.49,180.079,74.591c48.102,48.101,74.592,112.055,74.592,180.08 c0,68.024-26.49,131.979-74.592,180.079C429.489,525.691,365.535,552.182,297.511,552.182z M297.511,43.84 c-67.758,0-131.46,26.386-179.373,74.298S43.84,229.753,43.84,297.511s26.386,131.46,74.298,179.372 c47.913,47.912,111.615,74.299,179.373,74.299s131.46-26.387,179.372-74.299s74.299-111.614,74.299-179.372 s-26.387-131.46-74.299-179.373C428.971,70.226,365.269,43.84,297.511,43.84z"></path>
                   </g> </g> </g> </g></svg>
            </div>
    )
  } 
  Doublecircle.defaultProps = defaultProps;
*/


const Circletick=() =>
{
return (
  <svg className="h-6 w-6 flex-none  fill-transparent stroke-menuhighlight stroke-2" strokeLinecap="round" strokeLinejoin="round">
  <circle cx="12" cy="12" r="11" />
  <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
</svg>
)

}  
export default function Services() {
    return (
  <>
    <div className={`mx-auto max-md:px-6 bg-white max-w-7xl  z-50 `}>
  
  
  
              <div className="flex  flex-wrap-reverse  md:flex-wrap px-2 md:px-3 lg:px-8 py-8  md:h-[250px] " aria-label="Global">
  
  
              <article className="text-pretty flex flex-row  max-md:flex-wrap ">
                <div className=" w-fit ">
                    <div className="text-h1  w-48 ">
                        <h1 className="text-h1 border-b-4 border-blue-400  ">Services</h1>
                    </div>    
  
                <h5 className="text-h5  font-bold py-8 pb-2 ">Methodology</h5>
                <p className='pr-5'>Addvent 10 Management Inc. (A10MI) is a boutique Human Resources Management firm with a stable of qualified Human Resource Management Consultants from the public and private sector operating since 2002. Our cadre of Associates possesses skills and expertise in a variety of management areas.</p>
                </div>
              </article>
  
  
  
              </div>
  
  
  
  
              <div className="flex  flex-wrap-reverse  md:flex-wrap-reverse items-center px-2 md:px-3  lg:px-8 " aria-label="Global">
                        
                                    <article className="text-pretty flex flex-row  max-md:flex-wrap">
                                        <div className=" w-fit ">
                                                            <h5 className="text-h5  font-bold py-4 ">Services</h5>
                                        
                                                            <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
                                                    
                                                                    <div className='pr-5'><span className="flex flex-row gap-4"><Circletick /><p>Conduct Reviews of Schools, Departments and Environmental Scans with the view to enhancing respectful workplaces, increasing efficiency and cost effectiveness,
                                                                                                                 changing service delivery models, more effectively using resources and time as well as establishing effective team approaches.
                                                                                                                 We have partnered with Price Waterhouse Coopers (PWC) on several of these projects.</p></span></div>
                                                                    <div><span  className="flex flex-row gap-4"><Circletick /><p>Facilitate of consolidation of branch plants, schools (ARC Processes) and departments through sophisticated consultation processes</p></span></div>  
                                                                    <div><span  className="flex flex-row gap-4"><Circletick /><p>Assist corporations in developing and implementing Respectful Workplace and Human Rights Policies.</p> </span></div>   
                                                                    <div><span  className="flex flex-row gap-4"><Circletick /><p>Conduct investigations of workplace harassment complaints and employee misconduct and objectionable behaviour complaints to resolve disputes arising from such complaints on corporate properties.</p></span></div>  
                                                                    <div><span  className="flex flex-row gap-4"><Circletick /><p>Assist corporations as Negotiators, Medi ators and Alternative Dispute Resolution Specialists as well as Adjudicating Police Background Check matters.</p></span></div>  
                                                                    <div><span  className="flex flex-row gap-4"><Circletick /><p>Operate as Executive Coaches and Mentors for CEO’s, managers, principals and superintendents on leadership, operational and human resource matters.</p></span></div>  
                                                                    <div><span  className="flex flex-row gap-4"><Circletick /><p>Design & Deliver Training & Courses on: Behaviour Management, Courageous Conversations, Performance Appraisals, Conducting Effective Investigations, Respecting Boundaries, Ethical Practice,
                                                                         Stress Management and Classroom Management for the Ontario College of Teachers, College of Early Childhood Educators and other professional Colleges and School Boards.</p></span></div>  
                                                    
                                                                    
                                                            </div>    
                                        </div>

                                    </article>
  
              </div>
  
  
  
              <div className="flex  flex-wrap-reverse  md:flex-wrap-reverse items-center px-2 md:px-3 my-4 lg:px-8 " aria-label="Global">
  
              <article className="text-pretty flex flex-row  max-md:flex-wrap">
                <div className=" w-fit py-4">
                <h5 className="text-h5  font-bold  pb-4">Investigations & Dispute Resolution Processes</h5>
                <p className='pr-5'>A10MI Associates have assisted corporations in developing and implementing Respectful Workplace and Human Rights Policies and Procedures. We conduct investigations of workplace harassment complaints and objectionable behaviour complaints to resolve disputes arising from such complaints on corporate properties. We assist corporations as Negotiators, Mediators and Alternative Dispute Resolution Specialists as well as Adjudicating Police Background Check matters.</p>
                </div>
              </article>
  
              </div>
  


  
              <div className="flex  flex-wrap-reverse  md:flex-wrap-reverse items-center px-2 md:px-3 my-4 lg:px-8 " aria-label="Global">
  
              <article className="text-pretty  ">
                <div className=" py-4">
                <h5 className="text-h5 items-center font-bold  pb-4 gap-4">Our Clients</h5>

                <div className="flex flex-row flex-wrap ">
                 <img src="/static/images/site/clients/aecl.png" />   
                 <img src="/static/images/site/clients/ddsb.jpg" />   
                 <img src="/static/images/site/clients/kcb.png" />   
                 <img src="/static/images/site/clients/kpdsb.jpg" />   


                 <img src="/static/images/site/clients/lcdsb.png" />   
                 <img src="/static/images/site/clients/ddsb.jpg" />   
                 <img src="/static/images/site/clients/nndsb.png" />   
                 <img src="/static/images/site/clients/lksb.jpg" />   


                 <img src="/static/images/site/clients/opsoa.jpg" />   
                 <img src="/static/images/site/clients/ome.jpg" />   
                 <img src="/static/images/site/clients/opc.jpg" />   
                 <img src="/static/images/site/clients/osec.jpg" />   

                 <img src="/static/images/site/clients/osmh.png" />   
                 <img src="/static/images/site/clients/snp.png" />   
                 <img src="/static/images/site/clients/sgsb.jpg" />   
                 <img src="/static/images/site/clients/tko.png" />   


                 <img src="/static/images/site/clients/sfh.png" />   
                 <img src="/static/images/site/clients/scsb.jpg" />   
                 <img src="/static/images/site/clients/pwc.png" />   
                 <img src="/static/images/site/clients/ucdsb.jpg" />   
                </div>

                </div>
              </article>
  
              </div>
  
  
  
  </div>
  
  <div className="flex  p-0 md:p-6 lg:px-8" aria-label="Global">
  <div className="@container/main3 mx-auto bg-gray-300">
  <div className="@[620px]/main3:underline text-lg m-20 font-bold px-6 py-33 rounded leading-6 text-primary">
  
  </div>
  </div>       
  </div>    
  
  
  
  
  
  
  </>
  
    )
  }