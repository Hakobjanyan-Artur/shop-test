import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectCart } from "../../store/slices/cart/cart";
import { FaStar } from "react-icons/fa6";
import { PiShoppingCartSimpleFill } from "react-icons/pi";


export default function OneStoreItem({ id, category, title, price, discount, rating, photoPreview, comment }) {
    const dispatch = useDispatch()
    const [add, setAdd] = useState(false)
    const { cart } = useSelector(selectCart)

    useEffect(() => {
        if (cart.find(el => el.id === id)) {
            setAdd(true)
        }
    }, [cart])


    return (
        <div className="oneStore-item">
            <div className="oneStore-item-preview">
                <FaRegHeart className="oneStore-item-likes" />
                <div className="oneStore-item-preview-img">
                    <img src={photoPreview} alt="" />
                </div>
                {Math.floor(discount / price * 100) !== 0 ? <div className="oneStore-item-precent">- {Math.floor(discount / price * 100)}%</div> : ''}
            </div>
            <div className="oneStore-item-info">
                <div className="oneStore-item-price">{price}$ {(Math.floor(discount + price) - price) > 1 ? <span className="oneStore-item-price-disount">{Math.floor(price + discount)}$</span> : ''}</div>
                <div className="oneStore-item-category">{category} <span className="oneStore-item-category-title"> / {title.slice(0, 10)}...</span></div>
                <div className="oneStore-item-rating"><FaStar className="oneStore-item-ratin-star" /><span className="oneStore-item-rating-rating">{rating}</span> / <span className="oneStore-item-rating-commeny-length">{comment.length} comment</span></div>
            </div>
            <div className="oneStore-item-button">
                <button onClick={() => dispatch(addToCart(id))}><PiShoppingCartSimpleFill className="oneStore-item-btn-icon" /> {add ? 'Added' : 'Add to cart'}</button>
            </div>
        </div>
    )
}