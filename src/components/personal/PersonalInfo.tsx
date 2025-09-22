import React from "react"

export const PersonalInfo = () => {
    // get context
    return (
        <form>
            <h1>Personal Info</h1>

            <fieldset>
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" />
            </fieldset>
            <fieldset>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" />
            </fieldset>
            <fieldset>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
            </fieldset>
            <fieldset>
                <label htmlFor="phone">Phone number</label>
                <input type="phone" id="phone" />
            </fieldset>
        </form>
    )
}
