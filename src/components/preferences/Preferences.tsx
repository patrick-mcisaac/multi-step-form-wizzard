import { countries, languages } from "../../database/database"
import { useFormContext } from "../../hooks/useFormProvider"
import { Form_Boolean, Form_Numbers } from "../../types/FormTypes"

export const Preferences = () => {
    const { state, dispatch } = useFormContext()
    return (
        <form action="">
            <h1>Preferences</h1>

            <fieldset>
                <label htmlFor="countries">Countries</label>
                <select
                    value={state.country}
                    onChange={e =>
                        dispatch({
                            type: Form_Numbers.Country,
                            payload: parseInt(e.target.value)
                        })
                    }
                    name="countries"
                    id="countries"
                >
                    <option value="0">Select a country</option>
                    {countries.map(c => (
                        <option key={c.id} value={c.id}>
                            {c.country}
                        </option>
                    ))}
                </select>
            </fieldset>
            <fieldset>
                <label htmlFor="language">Languages</label>
                <select
                    value={state.language}
                    onChange={e =>
                        dispatch({
                            type: Form_Numbers.Language,
                            payload: parseInt(e.target.value)
                        })
                    }
                    name="language"
                    id="language"
                >
                    <option value="0">Select a language</option>
                    {languages.map(l => (
                        <option key={l.id} value={l.id}>
                            {l.language}
                        </option>
                    ))}
                </select>
            </fieldset>
            <fieldset>
                <legend>Join our Newsletter?</legend>
                <label htmlFor="yes">Yes</label>
                <input
                    checked={state.newsletter}
                    onClick={() =>
                        dispatch({
                            type: Form_Boolean.Newsletter,
                            payload: true
                        })
                    }
                    type="radio"
                    id="yes"
                    name="newsletter"
                    value="true"
                />
                <label htmlFor="no">No</label>
                <input
                    checked={!state.newsletter}
                    onClick={() =>
                        dispatch({
                            type: Form_Boolean.Newsletter,
                            payload: false
                        })
                    }
                    type="radio"
                    id="no"
                    name="newsletter"
                    value="false"
                />
            </fieldset>
            <fieldset>
                <label htmlFor="marketing">Marketing Emails</label>
                <input
                    onClick={() =>
                        dispatch({
                            type: Form_Boolean.Marketing
                        })
                    }
                    type="checkbox"
                    id="marketing"
                    name="marketing"
                />
            </fieldset>
            <fieldset>
                <label htmlFor="terms">Terms and Conditions</label>
                <input
                    onClick={() =>
                        dispatch({
                            type: Form_Boolean.Terms
                        })
                    }
                    type="checkbox"
                    id="terms"
                    name="terms"
                />
            </fieldset>
        </form>
    )
}
