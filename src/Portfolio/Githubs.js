import React from 'react'
import GitHubCalendar from 'react-github-calendar'
import "./portfolio.css"
import ReactTooltip from "react-tooltip"
import { Spring } from 'react-spring/renderprops'


const Githubs = () => {
    const cm = [{ num: "1000+", title: "Hours of Coding" }, { num: "200+", title: "Hackerrank Problems" }, { num: "350+", title: "Git Commits" }, { num: "12+", title: "Projects" }]
    return (
        <Spring
            from={{ number: 0 }}
            to={{ number: 1 }}>
            {props =>

                <div className="container my-4">
                    <div className="row justify-content-between" >
                        {cm.map(d => {
                            return <div className="col-lg-3 flx my-3 col-md-6 col-12">
                                <div className="outside   ">
                                    <p className="inside">{d.num}</p>
                                </div>
                                <h4 className='text-center my-2'>{d.title}</h4>
                            </div>
                        })}
                        <div className="col-12 row justify-content-center my-5">
                            <img src="/images/githistory.png" className="img-fluid" />
                        </div>
                    </div>
                </div>}
        </Spring>
    )
}

export default Githubs
