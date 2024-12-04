import { FaStar } from "react-icons/fa6";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, selectBasket } from "../../store/slices/basket/basket";
import { memo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function DumyItem({ id, title, brand, sku, description, category, price, discount, rating, photoPreview, comment }) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [add, setAdd] = useState(false)
    const { basket } = useSelector(selectBasket)
    const localBasket = JSON.parse(localStorage.getItem('basket'))

    useEffect(() => {
        if (localBasket?.find(el => el?.id === id)) {
            setAdd(true)
        } else {
            setAdd(false)
        }
    }, [localBasket])

    const addBasket = () => {
        dispatch(addToBasket({
            id: id,
            title: title,
            brand: brand,
            sku: sku,
            description: description,
            category: category,
            price: price,
            discount: discount,
            rating: rating,
            photoPreview: photoPreview,
            comment: comment
        }))
    }


    return (
        <div
            onClick={() => { navigate(`/product-id/${id}`); window.scrollTo(0, 0); }}
            className="dumy-item">
            <div className="dumy-item-preview">
                <FaRegHeart className="dumy-item-likes" />
                <div className="dumy-item-preview-img">
                    <img src={photoPreview} alt="" />
                </div>
                {Math.floor(discount / price * 100) !== 0 ? <div className="dumy-item-precent">- {Math.floor(discount / price * 100)}%</div> : ''}
            </div>
            <div className="dumy-item-info">
                <div className="dumy-item-price">{price}$ {discount > 1 ? <span className="dumy-item-price-disount">{Math.floor(price + discount)}$</span> : ''}</div>
                <div className="dumy-item-category">{category} <span className="dumy-item-category-title"> / {title.slice(0, 10)}...</span></div>
                <div className="dumy-item-rating"><FaStar className="dumy-item-ratin-star" /><span className="dumy-item-rating-rating">{rating}</span> / <span className="dumy-item-rating-commeny-length">{comment.length} comment</span></div>
            </div>
            <div className="dumy-item-button">
                <button onClick={(e) => { e.stopPropagation(); addBasket() }}><PiShoppingCartSimpleFill style={{ display: add ? 'none' : '' }} className="dumy-item-btn-icon" /> {add ? 'Added' : 'Add to cart'}</button>
            </div>
        </div >
    )
}

export default memo(DumyItem)