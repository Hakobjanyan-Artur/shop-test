import logo from '../../img/shopify.png'
import { FaUser, FaSearch } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { useContext } from 'react';
import { showContext } from '../../App';


export default function Navbar() {
    const { show, toggleShow } = useContext(showContext)

    return (
        <div className="navbar">
            <div className="container">
                <div className="navbar-content">
                    <div className="navbar-content-left">
                        <div className="navbar-content-logo">
                            <img src={logo} alt="" />
                            <span className='logo-txt'>Test Shop</span>
                        </div>
                        <div
                            onClick={toggleShow}
                            className='navbar-content-burger'>
                            <span className='burger-line'></span>
                        </div>
                    </div>
                    <div className="navbar-content-search">
                        <form>
                            <input type="text" />
                            <FaSearch className='search-icon' />
                        </form>
                    </div>
                    <div className="navbar-content-icons">
                        <div className='navbar-content-user'>
                            <span>
                                <FaUser />
                            </span>
                            <span className='icon-txt'>Sign in</span>
                        </div>
                        <div className='navbar-content-basket'>
                            <span>
                                <SlBasket />
                            </span>
                            <span className='icon-txt'>Basket</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}