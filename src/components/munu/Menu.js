import { React, useContext, useEffect, useRef } from "react"
import { showContext } from "../../App"


export default function Menu() {
    const { show, toggleShow } = useContext(showContext)
    const ulRef = useRef(null)
    const menuRef = useRef(null)

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
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                </ul>
            </div>
        </div>
    )
}