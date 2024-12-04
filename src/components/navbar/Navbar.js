import logo from '../../img/shopify.png'
import { FaUser, FaSearch } from "react-icons/fa";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { useContext, useEffect, useRef, useState } from 'react';
import { showContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectBasket } from '../../store/slices/basket/basket';


export default function Navbar() {
    const { show, toggleShow } = useContext(showContext)
    const [fixed, setFixed] = useState(false)
    const { basket } = useSelector(selectBasket)
    const navigate = useNavigate()
    const burger1 = useRef(null)
    const burger2 = useRef(null)
    const burger3 = useRef(null)
    const [count, setCount] = useState(0);
    const localBasket = JSON.parse(localStorage.getItem('basket'))

    useEffect(() => {
        setCount(localBasket?.length)
    }, [localBasket]);


    useEffect(() => {
        if (show === 'show') {
            burger1.current.classList.add('rotate-1')
            burger2.current.classList.add('burger-op')
            burger3.current.classList.add('rotate-3')
        } else {
            burger1.current.classList.remove('rotate-1')
            burger2.current.classList.remove('burger-op')
            burger3.current.classList.remove('rotate-3')
        }
    }, [show])

    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollTop > 50) {
            setFixed(true)
        } else {
            setFixed(false)
        }
    }

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return () => {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    return (
        <div
            style={{
                position: fixed ? 'fixed' : ''
            }}
            className="navbar">
            <div className="container">
                <div className="navbar-content">
                    <div className="navbar-content-left">
                        <div
                            onClick={() => navigate('/')}
                            className="navbar-content-logo">
                            <img src={logo} alt="" />
                            <span className='logo-txt'>Test Shop</span>
                        </div>
                        <div
                            onClick={toggleShow}
                            className='navbar-content-burger'>
                            <span ref={burger1} className='burger-line-1'></span>
                            <span ref={burger2} className='burger-line-2'></span>
                            <span ref={burger3} className='burger-line-3'></span>
                        </div>
                    </div>
                    <div className="navbar-content-search">
                        <form>
                            <input placeholder='Search in test shop' type="text" />
                            <button><FaSearch className='search-icon' /></button>
                        </form>
                    </div>
                    <div className="navbar-content-icons">
                        <div className='navbar-content-user'>
                            <span>
                                <FaUser />
                            </span>
                            <span className='icon-txt'>Sign in</span>
                        </div>
                        <div
                            onClick={() => navigate('/cart')}
                            className='navbar-content-basket'>
                            {
                                count ? <span className='cart-lenght'>{count}</span> : ''
                            }
                            <span>
                                <PiShoppingCartSimpleFill />
                            </span>
                            <span className='icon-txt'>Cart</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}