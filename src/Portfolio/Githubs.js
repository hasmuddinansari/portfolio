import React from 'react'
import GitHubCalendar from 'react-github-calendar'
import "./portfolio.css"
import ReactTooltip from "react-tooltip"

const Githubs = () => {
    const cm = [{num:"1000+", title:"Hours of Coding"}, {num:"200+", title:"Hackerrank Problems"}, {num:"350+", title:"Git Commits"},  {num:"12+", title:"Projects"}]
    return (
        <div className="container">
            <div className="row justify-content-between" >
                {cm.map(d=>{
                    return <div className="col-lg-3 row justify-content-center col-md-6 col-12">
                        <div className="outside ">
                            <p className="inside text-white ">{d.num}</p>
                        </div>
                        <h4 className="my-2">{d.title}</h4>
                    </div>
                })}
            <div className="col-12 row justify-content-center">
            <GitHubCalendar className="size-inc" username="hasmuddinansari" fullYear={true} color="blue">
            <ReactTooltip delayShow={50} html />
            </GitHubCalendar>
            </div>
            </div>
            
        </div>
    )
}

export default Githubs
