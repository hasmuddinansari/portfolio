import React from 'react'
import ProjectCard from "./ProjectCard"
import "./portfolio.css"
import data from "./ProjectData"

export default function Projects() {
    const test = [1, 2, 3, 5, 6]

    return (
        <div id="projects" className="container projectbg">
            <h1 className="text-primary text-center border bg-light display-4">Projects</h1>
            <div className="row justify-content-center bg-light p-2">
                {data.map(ele => {
                    return <ProjectCard key={ele} data={ele} />
                })}
            </div>
        </div>
    )
}
