import React from 'react'
import './Footer.css'

import { BsLinkedin, } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

import { AiFillInstagram } from "react-icons/ai"



const Footer = () => {
    return (
        <footer>
            <a href="#home" className="footer__logo">
                Hitesh Dahale
            </a>
            <ul className="permalinks">
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#skills">Skills</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                {/* <li><a href="#testimonials">Testimonials</a></li> */}
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            <div className="footer__socials">
                <a
                    href="https://www.linkedin.com/in/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <BsLinkedin />
                </a>
                <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <AiFillInstagram />

                </a>



            </div>
            <div className="footer__copyright">
                <small>&copy; 2023. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer