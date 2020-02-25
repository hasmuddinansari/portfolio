import React from 'react'
import './portfolio.css'

const ProjectCard = ({data}) => {
    return (
        <div className="mycard col-lg-4 col-md-6 my-3 col-12">
            <div className="card">
            <div className="p-2">
                <img src={data.img} className="img-fluid"/>
                    <h4 className="mx-2 my-2 text-primary">{data.title}</h4>
                     <p className="mx-2">{data.desc}</p>
                     <div className="row p-3">
                         {data.tech.map(ic=>{
                            return <div className="col-2">
                                 <img src={ic} className="img-resize"/>
                            </div>
                         })}
                     </div>
                     <div className="row justify-content-end border-top mx-1 pt-2 bg-light">
                     <a className="btn btn-success" target="_blank" href={data.website}>Demo</a> 
                     <a className="btn btn-primary mx-3" target="_blank" href={data.github}>Github</a></div>
                     </div>
            </div>

        </div>
    )
}

export default ProjectCard
