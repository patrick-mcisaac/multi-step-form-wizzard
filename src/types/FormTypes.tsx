import type React from "react"

export interface PersonalInfoType {
    firstName: string
    lastName: string
    email: string
    phone: string
    username: string
    password: string
    country: number
    language: number
    newsletter: boolean
    marketing: boolean
    terms: boolean
}

export type Form_Actions = {
    First_Name: string
    Last_Name: string
    Email: string
    Phone: string
    User_Name: string
    Password: string
    Country: string
    Language: string
    Newsletter: string
    Marketing: string
    Terms: string
}

type FormAction = {
    type: string
    payload?: string | number | boolean
}

export type FormContextType = {
    initialState: PersonalInfoType
    Form_Actions: Form_Actions
    formReducer: (
        state: PersonalInfoType,
        action: FormAction
    ) => PersonalInfoType
    state: PersonalInfoType
    dispatch: React.Dispatch<FormAction>
}
