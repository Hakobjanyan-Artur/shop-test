import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectDumy } from "../../store/slices/products/dumy"
import { getDumy } from "../../store/slices/products/dumyAPI"
import { selectOne } from "../../store/slices/products/oneStore"
import { getOne } from "../../store/slices/products/oneStoreAPI"
import DumyItem from "../dumyItem/DumyItem"
import OneStoreItem from "../onStorItem/OnStoreItem"


export default function Main() {
    const { dumy } = useSelector(selectDumy)
    const { oneStore } = useSelector(selectOne)
    const dispatch = useDispatch()
    const [limit, setLimit] = useState(6)
    const [isFetch, setISfetch] = useState(false)

    useEffect(() => {
        dispatch(getOne())
    }, [])

    useEffect(() => {
        if (isFetch) {
            dispatch(getDumy(limit))
            setLimit(prev => prev + 6)
        }
    }, [isFetch])


    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight - e.target.documentElement.scrollTop - window.innerHeight < 200) {
            setISfetch(true)
        } if (e.target.documentElement.scrollHeight - e.target.documentElement.scrollTop - window.innerHeight > 200) {
            setISfetch(false)
        }
    }

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return () => {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])


    return (
        <div className="main">
            <div className="container">
                <div className="main-content">
                    {
                        oneStore?.map(el => <OneStoreItem key={el.id} {...el} />)
                    }
                    {
                        dumy?.map(el => <DumyItem key={el.id} {...el} />)
                    }
                </div>
            </div>
        </div>
    )
}