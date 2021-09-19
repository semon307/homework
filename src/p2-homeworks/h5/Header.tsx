import React from 'react'
import {NavLink} from "react-router-dom";
import s from "./Header.module.css"

function Header() {
    return (
        <div className={s.slideContainer}>//lal
            <div className={s.slide}>
                <div className={s.slideContent}>
                    <NavLink to={"/pre-junior"}>Pre Junior</NavLink>
                    <NavLink to={"/junior"}>Junior</NavLink>
                    <NavLink to={"/junior+"}>Junior+</NavLink>
                    <span className={s.button}></span>
                </div>
            </div>
        </div>

    )
}

export default Header
