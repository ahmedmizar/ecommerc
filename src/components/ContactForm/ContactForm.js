import React from 'react'
import { Field, reduxForm } from 'redux-form';
import Input from '../InputField/InputField'
import "./ContactForm.scss"
const validate = values => {
    const errors = {}
    if (!values.firstName) {
        errors.firstName = 'First Name Required'
    } else if (values.firstName.length < 4) {
        errors.firstName = 'First Name Must be greater than 3 characters'
    }
    if (!values.lastName) {
        errors.lastName = 'Last Name Required'
    } else if (values.lastName.length < 4) {
        errors.lastName = 'Last Name Must be greater than 3 characters'
    }
    if (!values.mobileNumber) {
        errors.mobileNumber = 'Mobile Number Required'
    } else if ((!/^[0-9]{11,}$/i.test(values.mobileNumber))) {
        errors.mobileNumber = 'Mobile Number must be a number and greater than or equal 11 number'
    }

    return errors
}

const warn = values => {
    const warnings = {}
    if (values.age < 19) {
        warnings.age = 'Hmm, you seem a bit young...'
    }
    return warnings
}

const contactForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props
    return (
        <form onSubmit={handleSubmit(props.onSubmit)} className="custom-form">
            <Field
                name="firstName"
                type="text"
                component={Input}
                label="First Name"
            />
            <Field
                name="lastName"
                type="text"
                component={Input}
                label="Last Name"
            />
            <Field
                name="mobileNumber"
                type="text"
                component={Input}
                label="Mobile Number"
            />

            <Field name="email" type="email" component={Input} label="Email" />

            <Field name="notes" component='textarea' label="Comments" />
            <Field name="address" type="text" component={Input} label="Address" />


            <div className="sex">
                <label>
                    <Field
                        name="sex"
                        component={Input}
                        type="radio"
                        value="male"
                    />{' '}
            Male
          </label>
                <label>
                    <Field
                        name="sex"
                        component={Input}
                        type="radio"
                        value="female"
                    />{' '}
            Female
          </label>
            </div>

            <div>
                <button type="submit" disabled={submitting} className="submit-btn">
                    Submit
        </button>

            </div>
        </form>
    )
}

export default reduxForm({
    form: 'contactForm',
    validate,
    warn
})(contactForm)