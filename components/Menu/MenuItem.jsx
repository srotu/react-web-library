import { useMenu } from "./MenuContext"

export default function MenuItem({ children, onSelect }) {
    const { toggleOff } = useMenu();

      function handleClick(e) {
        if (onSelect) onSelect(e);
        // close the menu after the item is selected
        toggleOff();
    }

    return (
        <div className="menu-item" onClick={handleClick}>
            {children}
        </div>
    )
}