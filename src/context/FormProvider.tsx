import { useReducer } from "react"
import type { Props } from "../types/Props"
import {
    Form_Actions,
    Form_Boolean,
    Form_Numbers,
    type FormAction,
    type PersonalInfoType
} from "../types/FormTypes"
import { FormContext } from "./FormContext"

export const FormProvider = ({ children }: Props) => {
    const initialState: PersonalInfoType = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        username: "",
        password: "",
        country: 0,
        language: 0,
        newsletter: true,
        marketing: false,
        terms: false
    }

    const formReducer = (state: PersonalInfoType, action: FormAction) => {
        switch (action.type) {
            case Form_Actions.First_Name:
                if (action.payload && action.payload.length >= 2) {
                    return {
                        ...state,
                        firstName: action.payload as string
                    }
                } else {
                    return {
                        ...state
                    }
                }

            case Form_Actions.Last_Name:
                if (action.payload && action.payload.length >= 2) {
                    return {
                        ...state,
                        lastName: action.payload as string
                    }
                } else {
                    return {
                        ...state
                    }
                }

            case Form_Actions.Email:
                if (action.payload?.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                    return {
                        ...state,
                        email: action.payload as string
                    }
                } else {
                    return {
                        ...state
                    }
                }

            case Form_Actions.Phone:
                if (action.payload && action.payload.length === 10) {
                    return {
                        ...state,
                        phone: action.payload as string
                    }
                } else {
                    return {
                        ...state
                    }
                }
            case Form_Actions.User_Name:
                return {
                    ...state,
                    username: action.payload as string
                }
            case Form_Actions.Password:
                return {
                    ...state,
                    password: action.payload as string
                }
            case Form_Numbers.Country:
                return {
                    ...state,
                    country: action.payload
                }
            case Form_Numbers.Language:
                return {
                    ...state,
                    language: action.payload
                }
            case Form_Boolean.Newsletter:
                return {
                    ...state,
                    newsletter: action.payload as boolean
                }
            case Form_Boolean.Marketing: {
                const subscribe: boolean = !state.marketing
                return {
                    ...state,
                    marketing: subscribe
                }
            }
            case Form_Boolean.Terms: {
                const confirmTerms: boolean = !state.terms
                return {
                    ...state,
                    terms: confirmTerms
                }
            }
            case Form_Actions.Initial:
                return {
                    ...initialState
                }
            default:
                return { ...state }
        }
    }

    const [state, dispatch] = useReducer(formReducer, initialState)
    return (
        <FormContext.Provider
            value={{ initialState, formReducer, state, dispatch }}
        >
            {children}
        </FormContext.Provider>
    )
}
