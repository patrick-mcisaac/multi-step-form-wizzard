import React from "react"
import { Route, Routes } from "react-router-dom"
import { PersonalInfo } from "../personal/PersonalInfo"

export const FormViews = () => {
    return (
        <Routes>
            <Route path="/" element={<PersonalInfo />} />
        </Routes>
    )
}
