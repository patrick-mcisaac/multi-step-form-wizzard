import type React from "react"

export interface PersonalInfoType {
    firstName: string
    lastName: string
    email: string
    phone: string
    username: string
    password: string
}

export type Form_Actions = {
    First_Name: string
    Last_Name: string
    Email: string
    Phone: string
    User_Name: string
    Password: string
}

type FormAction = {
    type: string
    payload: string
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
