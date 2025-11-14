import React from "react"
import useEffectOnUpdate from "./useEffectOnUpdate"

export default function useToggle({
    initialValue = true,
    onToggle = () => { }
} = {}) {
    const [on, setOn] = React.useState(initialValue)

    function toggle() {
        setOn(prevOn => !prevOn)
    }
    
    function toggleOff() {
        setOn(prevOn => false)
    }

    useEffectOnUpdate(onToggle, [on])

    return [on, toggle, toggleOff]
}