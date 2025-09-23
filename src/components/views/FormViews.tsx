import React from "react"
import { Outlet, Route, Routes } from "react-router-dom"
import { PersonalInfo } from "../personal/PersonalInfo"
import { AccountSetup } from "../setup/AccountSetup"
import { Preferences } from "../preferences/Preferences"

export const FormViews = () => {
    return (
        <Routes>
            <Route path="/" element={<Outlet />}>
                <Route index element={<PersonalInfo />} />
                <Route path="setup" element={<AccountSetup />} />
                <Route path="preferences" element={<Preferences />} />
            </Route>
        </Routes>
    )
}
