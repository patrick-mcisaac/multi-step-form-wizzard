import type React from "react"
import { useFormContext } from "../../hooks/useFormProvider"
import { useNavigate } from "react-router-dom"
import { Form_Actions } from "../../types/FormTypes"

export const AccountSetup = () => {
    const { state, dispatch } = useFormContext()
    const navigate = useNavigate()

    const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value: string = e.target.value
        // let style = e.target.style

        if (value !== state.password) {
            e.target.style = "color: red"
        } else {
            e.target.style = "color: black"
        }
    }

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const confirmPassword = document.getElementById(
            "confirm"
        ) as HTMLInputElement
        if (confirmPassword && confirmPassword.value === state.password) {
            navigate("/preferences")
        } else {
            window.alert("Please fill out the form")
        }
    }
    return (
        <form action="">
            <h1>Account Setup</h1>
            <fieldset>
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    type="text"
                    onChange={e =>
                        dispatch({
                            type: Form_Actions.User_Name,
                            payload: e.target.value
                        })
                    }
                />
            </fieldset>
            <fieldset>
                <label htmlFor="password">Password</label>
                <input
                    disabled={state.username === ""}
                    id="password"
                    type="password"
                    onChange={e =>
                        dispatch({
                            type: Form_Actions.Password,
                            payload: e.target.value
                        })
                    }
                />
            </fieldset>
            <fieldset>
                <label htmlFor="confirm">Confirm Password</label>
                <input
                    onChange={handleConfirmPassword}
                    disabled={state.password === ""}
                    type="password"
                    id="confirm"
                />
            </fieldset>
            <button onClick={handleSubmit}>Continue</button>
        </form>
    )
}
