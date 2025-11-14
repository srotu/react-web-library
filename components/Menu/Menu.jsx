import React from "react"
import useToggle from "../../hooks/useToggle"

const MenuContext = React.createContext()
export { MenuContext }

export default function Menu({ children, onOpen }) {
    const [open, toggleOpen, toggleOff] = useToggle({
        initialValue: false,
        onToggle: onOpen
    })

    return (
        <MenuContext.Provider value={{ open, toggleOpen, toggleOff }}>
            <div className="menu">
                {children}
            </div>
        </MenuContext.Provider>
    )
}
