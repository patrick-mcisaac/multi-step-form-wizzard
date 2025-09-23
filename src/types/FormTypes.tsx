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

export const Form_Actions = {
    First_Name: "First_Name",
    Last_Name: "Last_Name",
    Email: "Email",
    Phone: "Phone",
    User_Name: "User_Name",
    Password: "Password",
    Initial: "Initial"
} as const

export const Form_Boolean = {
    Newsletter: "Newsletter",
    Marketing: "Marketing",
    Terms: "Terms"
} as const

export const Form_Numbers = {
    Country: "Country",
    Language: "Language"
} as const

export type FormAction =
    | {
          type: (typeof Form_Actions)[keyof typeof Form_Actions]
          payload?: string
      }
    | {
          type: (typeof Form_Numbers)[keyof typeof Form_Numbers]
          payload: number
      }
    | {
          type: (typeof Form_Boolean)[keyof typeof Form_Boolean]
          payload?: boolean
      }

export type FormContextType = {
    initialState: PersonalInfoType
    formReducer: (
        state: PersonalInfoType,
        action: FormAction
    ) => PersonalInfoType
    state: PersonalInfoType
    dispatch: React.Dispatch<FormAction>
}
