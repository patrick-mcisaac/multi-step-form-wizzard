import { useFormContext } from "../../hooks/useFormProvider"

export const AccountSetup = () => {
    const { Form_Actions, dispatch } = useFormContext()
    return (
        <form action="">
            <h1>Account Setup</h1>
            <fieldset>
                <label htmlFor="">Username</label>
                <input
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
                <label htmlFor="">Password</label>
                <input
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
                <label htmlFor="">Confirm Password</label>
                <input type="password" />
            </fieldset>
            <button>Continue</button>
        </form>
    )
}
