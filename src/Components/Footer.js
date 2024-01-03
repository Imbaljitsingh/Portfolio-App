import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";


function Footer() {
    return (
    <div className="flex items-center justify-center mt-14 py-14 bg-gray-900">
            <div className="flex text-white gap-6 text-2xl">
            <Link to="https://www.instagram.com/baljitsinggh/"><FaInstagram /></Link>
            <Link to="https://twitter.com/baljitsinggh"><FaSquareXTwitter /></Link>
            <Link to="https://github.com/Imbaljitsingh"><FaSquareGithub /></Link>
            <Link to="https://www.linkedin.com/in/baljit-singh-464899228/"><FaLinkedin /></Link>
            
            
            
            </div>
    </div>

    )
}

export default Footer;