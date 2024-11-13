import { FaStar } from "react-icons/fa6";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectCart } from "../../store/slices/cart/cart";
import { memo, useEffect, useState } from "react";


function DumyItem({ id, title, category, price, discount, rating, photoPreview, comment }) {
    const dispatch = useDispatch()
    const [add, setAdd] = useState(false)
    const { cart } = useSelector(selectCart)

    useEffect(() => {
        if (cart.find(el => el.id === id)) {
            setAdd(true)
        }
    }, [cart])

    return (
        <div className="dumy-item">
            <div className="dumy-item-preview">
                <FaRegHeart className="dumy-item-likes" />
                <div className="dumy-item-preview-img">
                    <img src={photoPreview} alt="" />
                </div>
                {Math.floor(discount / price * 100) !== 0 ? <div className="dumy-item-precent">- {Math.floor(discount / price * 100)}%</div> : ''}
            </div>
            <div className="dumy-item-info">
                <div className="dumy-item-price">{price}$ {(Math.floor(discount + price) - price) > 1 ? <span className="dumy-item-price-disount">{Math.floor(price + discount)}$</span> : ''}</div>
                <div className="dumy-item-category">{category} <span className="dumy-item-category-title"> / {title.slice(0, 10)}...</span></div>
                <div className="dumy-item-rating"><FaStar className="dumy-item-ratin-star" /><span className="dumy-item-rating-rating">{rating}</span> / <span className="dumy-item-rating-commeny-length">{comment.length} comment</span></div>
            </div>
            <div className="dumy-item-button">
                <button onClick={() => dispatch(addToCart(id))}><PiShoppingCartSimpleFill className="dumy-item-btn-icon" /> {add ? 'Added' : 'Add to cart'}</button>
            </div>
        </div>
    )
}

// button txt
// button color
// navigation

export default memo(DumyItem)