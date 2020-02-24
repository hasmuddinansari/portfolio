import React from 'react'
import "./portfolio.css"

export default function Technology() {
    const links = ["/icons/html.svg", 
    "/icons/css.svg" ,
    "/icons/bootstrap.svg",
    "/icons/javascript.svg",
    "/icons/jquery.svg",
    "/icons/git.svg",
    "/icons/react.svg",
    "/icons/redux.svg",
    "/icons/python.svg",
    "/icons/flask.svg",
    "/icons/mysql.svg",
    "/icons/firebase.svg"    
    ]
    return (
        <div className="container p-3">
        <h1 className="text-primary p-3 text-center display-4 bg-light">Tech Stack</h1>
        <div className="row p-3 border bg-light shadow-set">
            {links.map(li=>{
                return <img src={li} key={li}  className="img_resize img-fluid col-lg-3 col-md-4 col-6"/>
                })}
            </div>
        </div>
    )
}
