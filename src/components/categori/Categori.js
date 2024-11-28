import React, { useEffect } from "react"
import { Triangle } from "react-loader-spinner"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { getCategori } from "../../store/slices/categories/categoriAPI"
import { selectCurrent } from "../../store/slices/categories/currentCategori"
const LazyItems = React.lazy(() => import('../productsItem/ProductsItem'))

export default function Categori() {
    const { id } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { currentCategori, load } = useSelector(selectCurrent)

    useEffect(() => {
        dispatch(getCategori(id))
    }, [id])

    useEffect(() => {
        if (currentCategori.length === 0) {
            navigate('/')
        }
    }, [currentCategori])

    return (
        <div className="categori">
            <h1>{currentCategori?.[0]?.category}</h1>
            <div className="container">
                <div className="categori-content">
                    {
                        currentCategori?.map(el =>
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
            </div>
        </div>
    )
}