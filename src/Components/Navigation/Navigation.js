import './Navigation.css';
import {useState, useRef} from "react";

export default function Navigation() {
    const [navState, setNavState] = useState(false);
    const navRef = useRef();
    const hamburgerRef = useRef();

    function burgerClick() {
        if (navState === false) {
            setNavState(true);
            navRef.current.classList.add('nav_active')
        } else {
            setNavState(false);
            console.log(navRef)
            navRef.current.classList.remove('nav_active')
        }
    }

    function detectLink(e) {
        console.log(e.target);
        if (e.target.classList.contains('nav__link')) {
            setNavState(false);
            navRef.current.classList.remove('nav_active')
        }
    }

    return (
        <nav className="nav _container" ref={navRef}>
                <ul className="nav__ul" onClick={detectLink}>
                    <li className="nav__list">
                        <a href="#cards" className="nav__link">КАРТИ</a>
                    </li>
                    <li className="nav__list">
                        <a href="#app-download" className="nav__link">ДОДАТОК</a>
                    </li>
                    <li className="nav__list">
                        <a href="#history" className="nav__link">ІСТОРІЯ</a>
                    </li>
                    <li className="nav__list">
                        <a href="#rules" className="nav__link">ПРАВИЛА ГРИ</a>
                    </li>
                    <li className="nav__list">
                        <a href="#!" className="nav__link">МАГАЗИН</a>
                    </li>
                </ul>
                <div className="hamburger" aria-label="Mobile Navigation Menu" ref={hamburgerRef} onClick={burgerClick}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
        </nav>
    );
}