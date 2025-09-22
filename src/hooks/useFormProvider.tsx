import { useContext } from "react"
import { FormContext } from "../context/FormContext"

export const useFormContext = () => {
    const context = useContext(FormContext)
    if (!context) {
        throw new Error("Form context must be used inside of a provider")
    }
    return context
}
