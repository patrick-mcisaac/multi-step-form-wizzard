import React, { useReducer } from "react"
import type { Props } from "../types/Props"
import type { Form_Actions, PersonalInfoType } from "../types/FormTypes"
import { FormContext } from "./FormContext"

const Form_Actions: Form_Actions = {
    First_Name: "First_Name",
    Last_Name: "Last_Name",
    Email: "Email",
    Phone: "Phone",
    User_Name: "User_Name",
    Password: "Password"
}

export const FormProvider = ({ children }: Props) => {
    const initialState: PersonalInfoType = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        username: "",
        password: ""
    }

    const formReducer = (
        state: PersonalInfoType,
        action: { type: string; payload: string }
    ) => {
        switch (action.type) {
            case Form_Actions.First_Name:
                return {
                    ...state,
                    firstName: action.payload
                }

            case Form_Actions.Last_Name:
                return {
                    ...state,
                    lastName: action.payload
                }

            case Form_Actions.Email:
                return {
                    ...state,
                    email: action.payload
                }

            case Form_Actions.Phone:
                return {
                    ...state,
                    phone: action.payload
                }
            case Form_Actions.User_Name:
                return {
                    ...state,
                    username: action.payload
                }
            case Form_Actions.Password:
                return {
                    ...state,
                    password: action.payload
                }
            default:
                return { ...state }
        }
    }

    const [state, dispatch] = useReducer(formReducer, initialState)
    return (
        <FormContext.Provider
            value={{ initialState, Form_Actions, formReducer, state, dispatch }}
        >
            {children}
        </FormContext.Provider>
    )
}
