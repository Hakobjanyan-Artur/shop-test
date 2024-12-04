import { useEffect } from "react"
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineDelete } from "react-icons/md";

export default function Basket() {
    const localBasket = JSON.parse(localStorage.getItem('basket')) || []

    return (
        <div className="basket">
            <div className="container">
                <div className="basket-content">
                    <div className="basket-left">
                        <div className="basket-left-title">
                            <div className="basket-title"><h2 className="title">Cart</h2></div>
                            <div className="basket-items-count"><span className="items-count">{localBasket?.length}</span><h3> Items</h3></div>
                        </div>
                        <div className="basket-content-items">
                            {localBasket?.map(el => (
                                <div key={el.id} className="basket-items">
                                    <div className="items-img"><img src={el.photoPreview} alt="" /></div>
                                    <div className="items-info">
                                        <div className="items-title">{el.title}</div>
                                        <div className="items-rating">{el.rating}</div>
                                        <div className="items-del-like">
                                            <div className="items-like"><FaRegHeart /></div>
                                            <div className="itmes-del"><MdOutlineDelete /></div>
                                        </div>
                                    </div>
                                    <div className="basket-items-count">
                                        <div className="basket-items-minus">-</div>
                                        <div className="items-count">{el.count}</div>
                                        <div className="basket-items-plus">+</div>
                                    </div>
                                    <div className="basket-items-price">
                                        <div className="item-price">{el.discount > 1 ? <span className="item-price-disount">{Math.floor(el.price + el.discount)}$</span> : ''} {el.price}$</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="basket-rigth-content">
                        <div className="rigth-items">
                            <span>Items, {localBasket?.length}</span>
                            <span>{localBasket?.reduce(function (sum, current) { return sum + Math.floor(current?.price + current.discount) * current.count }, 0)} $</span>
                        </div>
                        <div className="rigth-items-discount">
                            <span>My discount</span>
                            <span>- {localBasket?.reduce(function (sum, current) { return sum + (current?.discount * current?.count) }, 0)} $</span>
                        </div>
                        <div className="basket-totla">
                            <span>Totla price</span>
                            <span>{localBasket?.reduce(function (sum, current) { return sum + (current?.price * current.count) }, 0)} $</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}