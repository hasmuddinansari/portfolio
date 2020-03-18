import React from 'react'
import "./portfolio.css"

export default function Technology() {
    const links = ["/icons/html.svg",
        "/icons/css.svg",
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
    const names = [
        "HTML",
        "CSS",
        "Bootstrap",
        "Javascript",
        "Jquery",
        "Git",
        "React",
        "Redux",
        "Python",
        "Flask",
        "Mysql",
        "Firebase"
    ]
    return (
        <div className="container p-3 ">
            <h1 className="text-primary p-3 text-center display-4 bg-light border">Tech Stack</h1>
            <div className="row p-3 border bg-light shadow-set">
                {links.map((li, i) => {
                    return <div className="col-lg-3 col-md-4 col-6 text-center">
                        <img src={li} key={li} className="img_resize img-fluid" />
                        <p className="p-1">{names[i]}</p>
                    </div>
                })}
            </div>
        </div>
    )
}
