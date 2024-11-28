import { React, useContext, useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { showContext } from "../../App"
import { getCategori } from "../../store/slices/categories/categoriAPI"
import { selectCategories } from "../../store/slices/categories/categories"
import { getCurrent } from "../../store/slices/categories/currentCategoriAPI"


export default function Menu() {
    const { show, toggleShow } = useContext(showContext)
    const ulRef = useRef(null)
    const menuRef = useRef(null)
    const dispatch = useDispatch()
    const { categori } = useSelector(selectCategories)
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getCategori())
    }, [])

    useEffect(() => {
        if (show === 'show') {
            setTimeout(() => {
                menuRef.current.classList.add('menu-show')
            }, 100)
            setTimeout(() => {
                ulRef.current.classList.add('show')
            }, 200)
        } else {
            setTimeout(() => {
                ulRef.current.classList.remove('show')
            }, 100)
            setTimeout(() => {
                menuRef.current.classList.remove('menu-show')
            }, 200)
        }
    }, [show])

    return (
        <div
            onClick={toggleShow}
            ref={menuRef}
            className="menu">
            <div
                ref={ulRef}
                className="menu-link">
                <ul>
                    {categori?.map(el => (
                        <li onClick={() => { dispatch(getCurrent(el.name)); navigate(`categori/${el.name}`); }} key={el.id}>{el.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}