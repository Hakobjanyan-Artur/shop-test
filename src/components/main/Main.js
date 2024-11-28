import React, { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectProducts } from "../../store/slices/products/products"
import { getProducts } from "../../store/slices/products/productsAPI"
import { FiRefreshCw } from "react-icons/fi";
import ProductsItem from "../productsItem/ProductsItem"
import { ThreeDots } from 'react-loader-spinner'


export default function Main() {
    const { products, load } = useSelector(selectProducts)
    const dispatch = useDispatch()
    const [limit, setLimit] = useState(30)
    const iconRef = useRef(null)

    useEffect(() => {
        dispatch(getProducts(limit))
    }, [])

    const more = () => {
        iconRef.current.classList.add('ref')

        setTimeout(() => {
            dispatch(getProducts(limit))
            iconRef.current.classList.remove('ref')
        }, 2000)
    }


    return (
        <div className="main">
            <div className="container">
                <div className="main-content">
                    {
                        products?.map(el => load ?
                            <ThreeDots key={el.id}
                                visible={true}
                                height="80"
                                width="80"
                                color="rgb(167, 63, 247)"
                                radius="9"
                                ariaLabel="three-dots-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                            /> : <ProductsItem key={el.id} {...el} />)
                    }
                </div>
                <div className="refresh"><button onClick={() => { setLimit(prev => prev + 12); more() }}>Refresh <span ref={iconRef} ><FiRefreshCw /></span></button></div>
            </div>
        </div>
    )
}