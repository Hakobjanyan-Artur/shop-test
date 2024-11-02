import logo from '../../img/shopify.png'
import { FaUser, FaSearch } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { useContext, useRef } from 'react';
import { showContext } from '../../App';


export default function Navbar() {
    const { toggleShow } = useContext(showContext)
    const burger1 = useRef(null)
    const burger2 = useRef(null)
    const burger3 = useRef(null)

    const burgerClick = () => {
        burger1.current.classList.toggle('rotate-1')
        burger2.current.classList.toggle('burger-op')
        burger3.current.classList.toggle('rotate-3')
    }

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
                            onClick={() => { toggleShow(); burgerClick() }}
                            className='navbar-content-burger'>
                            <span ref={burger1} className='burger-line-1'></span>
                            <span ref={burger2} className='burger-line-2'></span>
                            <span ref={burger3} className='burger-line-3'></span>
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