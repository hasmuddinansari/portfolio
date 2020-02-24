import React from 'react'

const Proficiencies = () => {
    const prof = [{img:"/images/react.png", title:"React App", desc:"React js and React Redux"},
    {img:"/images/back.png", title:"Backend", desc:"Python, Flask, SQL"},
    {img:"/images/data.png", title:"Data Structures", desc:"Arrays, Stacks and Queues, Algorithms"}]

    
    return (
        <div className="container">
            <div className="row">
                {prof.map(pro=>{
                    return <div key={img} className="col-lg-4 col-md-6 col-12 justify-content-center">
                            <div>
                                <img src={pro.img} className="img-fluid"/>
                                    <h3>{pro.title}</h3>
                                    <h4>{pro.desc}</h4>
                            </div>
                    </div>
                })}
            </div>
            
        </div>
    )
}

export default Proficiencies
