import { React, useContext, useEffect, useRef } from "react"
import { showContext } from "../../App"


export default function Menu() {
    const { show } = useContext(showContext)
    const ulRef = useRef(null)
    useEffect(() => {
        setTimeout(() => {
            show === 'show' ? ulRef.current.classList.add('show') : ulRef.current.classList.remove('show')
        }, 500)
    }, [show])

    return (
        <div
            style={{
                display: show === 'hide' ? 'none' : ''
            }}
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