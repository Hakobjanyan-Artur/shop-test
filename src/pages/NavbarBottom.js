import { FaHouse } from "react-icons/fa6";
import { RiMenuSearchLine } from "react-icons/ri";
import { SlBasket } from "react-icons/sl";
import { FaHeart, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { showContext } from "../App";

export default function NavbarBottom() {
    const { toggleShow } = useContext(showContext)

    return (
        <div className="navbar-bottom">
            <ul>
                <li><NavLink className={({ isActive }) => isActive ? 'click' : 'default'} to={'/'} end ><FaHouse /></NavLink></li>
                <li><RiMenuSearchLine onClick={toggleShow} className="nav-bottom-menu" /></li>
                <li><NavLink className={({ isActive }) => isActive ? 'click' : 'default'} to={'/basket'}><SlBasket /></NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? 'click' : 'default'} to={'/likes'}><FaHeart /></NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? 'click' : 'default'} to={'/user'}><FaUser /></NavLink></li>
            </ul>
        </div>
    )
}