import { useNavigate } from "react-router-dom"
import { useFormContext } from "../../hooks/useFormProvider"
import type React from "react"
import { Form_Actions } from "../../types/FormTypes"

export const PersonalInfo = () => {
    const navigate = useNavigate()

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault()
        navigate("/setup")
    }
    // on button click
    // get context
    const { state, dispatch } = useFormContext()
    return (
        <form>
            <h1>Personal Info</h1>

            <fieldset>
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    id="firstName"
                    onChange={e =>
                        dispatch({
                            type: Form_Actions.First_Name,
                            payload: e.target.value
                        })
                    }
                />
            </fieldset>
            <fieldset>
                <label htmlFor="lastName">Last Name</label>
                <input
                    disabled={state.firstName === ""}
                    type="text"
                    id="lastName"
                    onChange={e =>
                        dispatch({
                            type: Form_Actions.Last_Name,
                            payload: e.target.value
                        })
                    }
                />
            </fieldset>
            <fieldset>
                <label htmlFor="email">Email</label>
                <input
                    disabled={state.lastName === ""}
                    type="email"
                    id="email"
                    onChange={e =>
                        dispatch({
                            type: Form_Actions.Email,
                            payload: e.target.value
                        })
                    }
                />
            </fieldset>
            <fieldset>
                <label htmlFor="phone">Phone number</label>
                <input
                    disabled={state.email === ""}
                    type="phone"
                    id="phone"
                    onChange={e =>
                        dispatch({
                            type: Form_Actions.Phone,
                            payload: e.target.value
                        })
                    }
                />
            </fieldset>
            <button onClick={handleClick}>Continue</button>
        </form>
    )
}
