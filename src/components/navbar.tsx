import { useEffect, useState } from "react";
import DarkModeToggle from "./DarkModeToggle";

import { Squash as Hamburger } from 'hamburger-react'

function Navbar() {
    const [sticky, setSticky] = useState('');
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', stickyNav);
        return () => window.removeEventListener('scroll', stickyNav);
    })

    const stickyNav = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 1 ? setSticky('sticky-nav') : setSticky('');
        }
    }

    const closeNav = () => {
        setOpen(false);
    }

    return(
        <nav className={`${sticky} ${isOpen? "nav-show-mobile" : ""}`}>
            <div className="nav-mobile">
                <Hamburger distance="sm" rounded color="var(--border)" toggled={isOpen} toggle={setOpen}/>
            </div>
            <a href="#homepage" onClick={()=>closeNav()}>[JS]</a>
            <ul>
                <li><a href="#about" onClick={()=>closeNav()}>ABOUT</a></li>
                <li><a href="#projects" onClick={()=>closeNav()}>EXPERIENCE</a></li>
                <li><a href="#contact" onClick={()=>closeNav()}>CONTACT</a></li>
            </ul>
            <DarkModeToggle />
        </nav>
    );

}

export default Navbar;