import React from 'react'
import "./portfolio.css"

const Proficiencies = () => {
    const prof = [{ img: "/images/react.png", title: "Frontend", desc: "React js and React Redux" },
    { img: "/images/back.png", title: "Backend", desc: "Python, Flask, SQL" },
    { img: "/images/data.png", title: "Data Structures", desc: "Arrays, Stacks and Queues, Algorithms" }]


    return (
        <div id="proficiency" className="container text-center p-3 ">
            <h1 className="text-primary display-4 bg-light border p-1">Proficiency</h1>
            <div className="row justify-content-center">

                {prof.map(pro => {
                    return <div key={pro.img} className="col-lg-4 my-4 text-center row col-md-6 col-12 justify-content-center">
                        <div className="p-3 hover_me bg-light">
                            <img src={pro.img} className="img-fluid " />
                            <h3>{pro.title}</h3>
                            <h5>{pro.desc}</h5>
                        </div>
                    </div>
                })}
            </div>

        </div>
    )
}

export default Proficiencies
