import { useEffect, useState, memo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { selectProductID } from "../../store/slices/products/productId"
import { getProductID } from "../../store/slices/products/productidAPI"
import { FiShare2 } from "react-icons/fi";
import imgNotFound from '../../img/notFound.webp'
import { FaStar } from "react-icons/fa6";
import { selectCurrent } from "../../store/slices/categories/currentCategori"
import ProductsItem from "../productsItem/ProductsItem"
import { getCurrent } from "../../store/slices/categories/currentCategoriAPI"
import { ThreeDots } from 'react-loader-spinner'
import { addToBasket, selectBasket } from "../../store/slices/basket/basket"



function ProductId() {
    const { id } = useParams()
    const { productID, load } = useSelector(selectProductID)
    const { currentCategori } = useSelector(selectCurrent)
    const { basket } = useSelector(selectBasket)
    const localBasket = JSON.parse(localStorage.getItem('basket'))
    const [desc, setDesc] = useState(false)
    const [add, setAdd] = useState(false)
    const [img, setImg] = useState(0)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        if (!id) {
            navigate('/')
        } else {
            dispatch(getProductID(id))
        }
    }, [id])
    useEffect(() => {
        if (localBasket?.find(el => el.id === productID?.id)) {
            setAdd(true)
        } else {
            setAdd(false)
        }
    }, [localBasket, basket])

    useEffect(() => {
        dispatch(getCurrent(productID?.category))
    }, [productID])

    const addBasket = () => {
        dispatch(addToBasket(
            {
                id: +id,
                title: productID?.title,
                brand: productID?.brand,
                sku: productID?.sku,
                description: productID?.description,
                category: productID?.category,
                price: productID?.price,
                discount: productID?.discount,
                rating: productID?.rating,
                photoPreview: productID?.photoPreview,
                comment: productID?.comment
            }
        ))
    }


    return (
        <div className="product-id">
            <div className="container">
                <div className="product-id-content">
                    <div className="product-id-product">
                        <div className="pr-id-pr-header">
                            <span className="pr-id-pr-header-category">{load ?
                                <ThreeDots
                                    visible={true}
                                    height="80"
                                    width="80"
                                    color="rgb(167, 63, 247)"
                                    radius="9"
                                    ariaLabel="three-dots-loading"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                /> : productID?.category}</span>
                            <span className="pr-id-pr-header-share"><FiShare2 /></span>
                        </div>
                        <div className="pr-id-pr-main">
                            <div className="pr-id-pr-main-left">
                                <div className="pr-id-pr-main-left-images">
                                    {productID?.images.map((el, idx) => (
                                        <div key={idx} onClick={() => setImg(idx)} className="pr-id-pr-left-img">  {load ?
                                            <ThreeDots
                                                visible={true}
                                                height="80"
                                                width="80"
                                                color="rgb(167, 63, 247)"
                                                radius="9"
                                                ariaLabel="three-dots-loading"
                                                wrapperStyle={{}}
                                                wrapperClass=""
                                            /> : <img src={el ? el : imgNotFound} alt="" />}</div>
                                    ))}
                                </div>
                                <div className="pr-id-pr-main-left-preview">
                                    {load ?
                                        <ThreeDots
                                            visible={true}
                                            height="80"
                                            width="80"
                                            color="rgb(167, 63, 247)"
                                            radius="9"
                                            ariaLabel="three-dots-loading"
                                            wrapperStyle={{}}
                                            wrapperClass=""
                                        /> : <img src={img === 0 && productID?.photoPreview ? productID?.photoPreview : img !== 0 ? productID?.images[img] : imgNotFound} alt="" />}
                                </div>
                            </div>
                            <div className="pr-id-pr-main-context">
                                <div className="pr-id-pr-context-title">
                                    <h1>{load ?
                                        <ThreeDots
                                            visible={true}
                                            height="80"
                                            width="80"
                                            color="rgb(167, 63, 247)"
                                            radius="9"
                                            ariaLabel="three-dots-loading"
                                            wrapperStyle={{}}
                                            wrapperClass=""
                                        /> : productID?.title}</h1>
                                </div>
                                <div className="pr-id-pr-context-rating">
                                    <div className="pr-id-pr-r">
                                        <span className="pr-id-rating-star"><FaStar /></span>
                                        <span className="pr-id-rating-count">{load ?
                                            <ThreeDots
                                                visible={true}
                                                height="80"
                                                width="80"
                                                color="rgb(167, 63, 247)"
                                                radius="9"
                                                ariaLabel="three-dots-loading"
                                                wrapperStyle={{}}
                                                wrapperClass=""
                                            /> : productID?.rating}</span>
                                    </div>
                                    <div className="pr-id-pr-comment">
                                        <span className="pr-id-pr-comment-txt">Comment: </span>
                                        <span className="pr-id-pr-comment-count">{
                                            load ?
                                                <ThreeDots
                                                    visible={true}
                                                    height="80"
                                                    width="80"
                                                    color="rgb(167, 63, 247)"
                                                    radius="9"
                                                    ariaLabel="three-dots-loading"
                                                    wrapperStyle={{}}
                                                    wrapperClass=""
                                                /> : productID?.comment.length}</span>
                                    </div>
                                </div>
                                <div className="pr-id-pr-context-info">
                                    <div className="pr-id-pr-info-span">
                                        <span>Article: </span>
                                        <span className="pr-id-pr-dashed"></span>
                                        <span>{load ?
                                            <ThreeDots
                                                visible={true}
                                                height="80"
                                                width="80"
                                                color="rgb(167, 63, 247)"
                                                radius="9"
                                                ariaLabel="three-dots-loading"
                                                wrapperStyle={{}}
                                                wrapperClass=""
                                            /> : productID?.sku ? productID?.sku : 'Unknown'}</span>
                                    </div>
                                    <div className="pr-id-pr-info-span">
                                        <span>Brand: </span>
                                        <span className="pr-id-pr-dashed"></span>
                                        <span>{
                                            load ?
                                                <ThreeDots
                                                    visible={true}
                                                    height="80"
                                                    width="80"
                                                    color="rgb(167, 63, 247)"
                                                    radius="9"
                                                    ariaLabel="three-dots-loading"
                                                    wrapperStyle={{}}
                                                    wrapperClass=""
                                                /> : productID?.brand ? productID?.brand : 'Unknown'}</span>
                                    </div>
                                    <div className="pr-id-pr-info-span">
                                        <span>Category: </span>
                                        <span className="pr-id-pr-dashed"></span>
                                        <span>{
                                            load ?
                                                <ThreeDots
                                                    visible={true}
                                                    height="80"
                                                    width="80"
                                                    color="rgb(167, 63, 247)"
                                                    radius="9"
                                                    ariaLabel="three-dots-loading"
                                                    wrapperStyle={{}}
                                                    wrapperClass=""
                                                /> : productID?.category ? productID?.category : 'Unknown'}</span>
                                    </div>
                                    <div className="pr-id-pr-info-span">
                                        <span>Discount: </span>
                                        <span className="pr-id-pr-dashed"></span>
                                        <span>{
                                            load ?
                                                <ThreeDots
                                                    visible={true}
                                                    height="80"
                                                    width="80"
                                                    color="rgb(167, 63, 247)"
                                                    radius="9"
                                                    ariaLabel="three-dots-loading"
                                                    wrapperStyle={{}}
                                                    wrapperClass=""
                                                /> : productID?.discount ? productID?.discount + ' $' : 'Unknown'}</span>
                                    </div>
                                    <div className="pr-id-pr-info-span">
                                        <span>Warranty: </span>
                                        <span className="pr-id-pr-dashed"></span>
                                        <span>{
                                            load ?
                                                <ThreeDots
                                                    visible={true}
                                                    height="80"
                                                    width="80"
                                                    color="rgb(167, 63, 247)"
                                                    radius="9"
                                                    ariaLabel="three-dots-loading"
                                                    wrapperStyle={{}}
                                                    wrapperClass=""
                                                /> : productID?.warranty ? productID?.warranty : 'Unknown'}</span>
                                    </div>
                                    <div
                                        style={{
                                            gap: desc ? '5px' : '',
                                            alignItems: desc ? 'flex-start' : ''
                                        }}
                                        className="pr-id-pr-info-span">
                                        <span>Description: </span>
                                        <span
                                            style={{
                                                display: desc ? 'none' : ''
                                            }}
                                            className="pr-id-pr-dashed"></span>
                                        <span onClick={() => setDesc(!desc)}
                                            className="pr-id-pr-description">{load ?
                                                <ThreeDots
                                                    visible={true}
                                                    height="80"
                                                    width="80"
                                                    color="rgb(167, 63, 247)"
                                                    radius="9"
                                                    ariaLabel="three-dots-loading"
                                                    wrapperStyle={{}}
                                                    wrapperClass=""
                                                /> : productID?.description && desc ? productID?.description : productID?.description.slice(0, 10) + '...'}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="pr-id-pr-main-right">
                                <div className="pr-id-pr-price">
                                    <div className="pr-id-pr-start-price">
                                        <span className="pr-id-pr-txt">Starting price: </span>
                                        <span className="pr-id-pr-price-sum">{load ?
                                            <ThreeDots
                                                visible={true}
                                                height="80"
                                                width="80"
                                                color="rgb(167, 63, 247)"
                                                radius="9"
                                                ariaLabel="three-dots-loading"
                                                wrapperStyle={{}}
                                                wrapperClass=""
                                            /> : Math.floor(productID?.price + productID?.discount)} $</span>
                                    </div>
                                    <div className="pr-id-pr-discount-price">
                                        <span className="pr-id-pr-txt">Discounted price: </span>
                                        <span className="pr-id-pr-disc-sum">{
                                            load ?
                                                <ThreeDots
                                                    visible={true}
                                                    height="80"
                                                    width="80"
                                                    color="rgb(167, 63, 247)"
                                                    radius="9"
                                                    ariaLabel="three-dots-loading"
                                                    wrapperStyle={{}}
                                                    wrapperClass=""
                                                /> : productID?.price} $</span>
                                    </div>
                                </div>
                                <div onClick={() => addBasket()} className="pr-id-pr-btn"><button>{add ? 'Added' : 'Add to cart'}</button></div>
                            </div>
                        </div>
                    </div>
                    <div className="product-id-comment">
                        <div className="pr-id-comment-title">
                            <h2>Comment {
                                load ?
                                    <ThreeDots
                                        visible={true}
                                        height="80"
                                        width="80"
                                        color="rgb(167, 63, 247)"
                                        radius="9"
                                        ariaLabel="three-dots-loading"
                                        wrapperStyle={{}}
                                        wrapperClass=""
                                    /> : productID?.comment.length}</h2>
                        </div>
                        <div className="pr-id-pr-comment-contex">
                            {productID?.comment.map((el, idx) => (
                                <div key={idx} className="pr-id-pr-com">
                                    <div className="pr-id-client">
                                        <div className="pr-id-client-name">
                                            <span className="client">Client </span>
                                            <span>{
                                                load ?
                                                    <ThreeDots
                                                        visible={true}
                                                        height="80"
                                                        width="80"
                                                        color="rgb(167, 63, 247)"
                                                        radius="9"
                                                        ariaLabel="three-dots-loading"
                                                        wrapperStyle={{}}
                                                        wrapperClass=""
                                                    /> : el.reviewerName}</span>
                                        </div>
                                        <div className="pr-id-date">{
                                            load ?
                                                <ThreeDots
                                                    visible={true}
                                                    height="80"
                                                    width="80"
                                                    color="rgb(167, 63, 247)"
                                                    radius="9"
                                                    ariaLabel="three-dots-loading"
                                                    wrapperStyle={{}}
                                                    wrapperClass=""
                                                /> : el.date.slice(0, 10)}</div>
                                        <div className="pr-id-rating"><FaStar className="star" /> {
                                            load ?
                                                <ThreeDots
                                                    visible={true}
                                                    height="80"
                                                    width="80"
                                                    color="rgb(167, 63, 247)"
                                                    radius="9"
                                                    ariaLabel="three-dots-loading"
                                                    wrapperStyle={{}}
                                                    wrapperClass=""
                                                /> : el.rating}</div>
                                    </div>
                                    <div className="pr-id-comment">{
                                        load ?
                                            <ThreeDots
                                                visible={true}
                                                height="80"
                                                width="80"
                                                color="rgb(167, 63, 247)"
                                                radius="9"
                                                ariaLabel="three-dots-loading"
                                                wrapperStyle={{}}
                                                wrapperClass=""
                                            /> : el.comment}</div>
                                </div>
                            ))}
                        </div>
                        <div className="pr-id-add-comment">
                            <button>Add comment</button>
                        </div>
                    </div>
                    <div className="product-id-category">
                        <div className="pr-id-category-title">See also</div>
                        <div className="pr-id-category-items">
                            {currentCategori?.map(el => <ProductsItem key={el.id} {...el} />)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(ProductId)