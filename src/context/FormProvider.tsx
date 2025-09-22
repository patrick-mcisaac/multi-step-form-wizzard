import React, { useContext, useReducer } from "react"
import type { Props } from "../types/Props"
import type { PersonalInfo } from "../types/FormTypes"
import { FormContext } from "./FormContext"

export const FormProvider = ({ children }: Props) => {
    const initialState: PersonalInfo = {
        firstName: "",
        lastName: "",
        email: "",
        phone: ""
    }

    enum Form_Actions {
        First_Name = "First_Name",
        Last_Name = "Last_Name",
        Email = "Email",
        Phone = "Phone"
    }

    const formReducer = (state: any, action: any) => {}

    const [sate, dispatch] = useReducer(formReducer, initialState)
    return (
        <FormContext.Provider
            value={{ initialState, Form_Actions, formReducer }}
        >
            {children}
        </FormContext.Provider>
    )
}
