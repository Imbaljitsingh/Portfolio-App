import React from "react";
import LogoImg from "../assests/logo.png"

function Navbar() {

    return (

    // main div
    <div className="sticky top-0 bg-white">
        {/* navbar */}
        <nav className="flex flex-row items-center justify-between mx-14 mt-5 ">
            <img src={LogoImg} alt="logo" className="h-[70px] w-[70px]"/>

            {/* list items */}
            <div>
                <ul className="flex gap-5 items-center justify-center font-semibold text-[1rem] mt-2">
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
        </nav>
    </div>

    )

}

export default Navbar;