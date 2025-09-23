import { createContext } from "react"
import type { FormContextType } from "../types/FormTypes"

export const FormContext = createContext<FormContextType | undefined>(undefined)
