import React, { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectProducts } from "../../store/slices/products/products"
import { getProducts } from "../../store/slices/products/productsAPI"
import { Triangle } from 'react-loader-spinner'
import { FiRefreshCw } from "react-icons/fi";
const LazyItems = React.lazy(() => import('../productsItem/ProductsItem'))


export default function Main() {
    const { products } = useSelector(selectProducts)
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
                        products?.map(el =>
                            <React.Suspense key={el.id} fallback={<Triangle
                                visible={true}
                                height="80"
                                width="80"
                                color="rgb(147, 12, 252)"
                                ariaLabel="triangle-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                            />}>
                                <LazyItems {...el} />
                            </React.Suspense>)
                    }
                </div>
                <div className="refresh"><button onClick={() => { setLimit(prev => prev + 12); more() }}>Refresh <span ref={iconRef} ><FiRefreshCw /></span></button></div>
            </div>
        </div>
    )
}