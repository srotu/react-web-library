import React from "react"
import { useMenu } from "./MenuContext"

export default function MenuDropdown({ children }) {
    const { open } = useMenu();
    if (!open) return null;
    
    return (
        <div className="menu-dropdown">
            {children}
        </div>
    )
}