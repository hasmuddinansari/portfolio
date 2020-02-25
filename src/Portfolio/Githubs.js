import React from 'react'
import GitHubCalendar from 'react-github-calendar'
import "./portfolio.css"
import ReactTooltip from "react-tooltip"

const Githubs = () => {
    const cm = [{num:"1000+", title:"Hours of Coding"}, {num:"200+", title:"Hackerrank Problems"}, {num:"350+", title:"Git Commits"},  {num:"12+", title:"Projects"}]
    return (
        <div className="container my-4">
            <div className="row justify-content-between" >
                {cm.map(d=>{
                    return <div className="col-lg-3  flx my-3 col-md-6 col-12">
                        <div className="outside  ">
                            <p className="inside text-white">{d.num}</p>
                        </div>
                        <h4 className='text-center my-2'>{d.title}</h4>
                    </div>
                })}
            <div className="col-12 row justify-content-center my-5">
            <GitHubCalendar fontSize={25} blockMargin={3} blockSize={33} className="size-inc" username="hasmuddinansari" fullYear={true} color="blue">
            <ReactTooltip delayShow={50} html />
            </GitHubCalendar>
            </div>
            </div>
            
        </div>
    )
}

export default Githubs
