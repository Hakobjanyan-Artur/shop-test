import { useCallback, useState } from "react"

const menu = (Component) => {
    return (props) => {
        const [show, setShow] = useState('hide')

        const toggleShow = useCallback(() => {
            setShow(prev => prev === 'hide' ? 'show' : 'hide')
        }, [])
        return < Component
            {...{ show, toggleShow }}
            {...props}
        />
    }
}

export default menu