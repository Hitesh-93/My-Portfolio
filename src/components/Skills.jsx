import React from 'react'
import './Skills.css'
import { BsFillPatchCheckFill } from "react-icons/bs";

const Skills = () => {
    return (
        <section id="skills">
            <h5>What I know.....</h5>
            <h2>Skills</h2>
            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Full-Stack-Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <h4>HTML</h4>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <h4>CSS</h4>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <h4>Bootstrap</h4>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <h4>JavaScript</h4>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <h4>ReactJs</h4>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <h4>Python</h4>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <h4>Django</h4>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <h4>MySQL</h4>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills