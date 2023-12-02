import React from 'react'
import projects from '../projects.json'
import './Projects.css'


const Projects = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Projects</h2>

            <div className="container portfolio__container">
                {projects.map((val, index) => (
                    <article className="portfolio__item" key={index}>
                        <div className="portfolio__item-image">
                            <img src={val.img} alt={val.title} />
                        </div>
                        <div className="portfolio__item-content">
                            <h3>{val.title}</h3>
                            <p>{val.description}</p>
                            <p>{val.technologies}</p>
                        </div>
                        <div className="portfolio__item-cta">
                            <a
                                href={val.github}
                                target="_blank"
                                className="btn"
                                rel="noreferrer"
                            >
                                GitHub
                            </a>
                            <a
                                href={val.link}
                                target="_blank"
                                className="btn btn-primary"
                                rel="noreferrer"
                            >
                                Live Demo
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Projects