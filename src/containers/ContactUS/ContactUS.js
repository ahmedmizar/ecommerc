import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import axios from "axios"
import { Button, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap';
import "./ContactUS.scss"
export const fields = ['firstName', 'lastName', 'email', 'sex', 'mobileNumber', 'address', 'notes'];

const validate = values => {
    const errors = {}
    if (!values.firstName) {
        errors.firstName = 'Required'
    } else if (values.firstName.length < 4) {
        errors.firstName = 'Must be greater than 3 characters'
    }
    if (!values.lastName) {
        errors.lastName = 'Required'
    } else if (values.lastName.length < 3) {
        errors.lastName = 'Must be greater than 3 characters'
    }
    if (!values.mobileNumber) {
        errors.mobileNumber = 'Required'
    } else if ((!/^[0-9]{11,}$/i.test(values.mobileNumber))) {
        errors.mobileNumber = 'Mobile Number must be a number and greater than or equal 11 number'
    }
    // if (values.sex !== "checked") {
    // //     errors.sex = 'Required'
    // // }

    return errors
}

class Contact extends Component {
    onSubmit = (values) => {
        console.log(values)
        axios.post("http://localhost:3001/contect-us", values).then(respone => {
            console.log(respone)
        })
            .catch(error => {
                console.log(error)
            })
    }

    // handleUpdate = async (e) => {

    //     e.preventDefault()
    //     let token = localStorage.getItem('token')
    //     let body = new FormData()
    //     body.append('_method', 'PUT')
    //     body.append('firstname', this.state.profile.firstname)
    //     body.append('lastname', this.state.profile.lastname)
    //     body.append('email', this.state.profile.email)
    //     if (this.state.avatarFile) {
    //         body.append('picture', this.state.avatarFile)
    //     }

    //     const reqeust = await fetch('https://beta.winchapp.io/profile/driver', {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Authorization': `Bearer ${token}`
    //         },
    //         body
    //     })
    //     if (reqeust.ok) {
    //         this.setState({ isEditing: false })
    //     }
    //     else {
    //         alert('something went wrong')
    //     }
    // }
    render() {
        const {
            fields: { firstName, lastName, mobileNumber, sex, email, notes, address },
            handleSubmit,
            resetForm,
            submitting
        } = this.props
        console.log(this.props)
        return (
            <div className="contact-us">
                <div className="container">
                    <div className="contact-card">
                        <h3>Contact us</h3>
                        <p></p>
                        <Form onSubmit={handleSubmit(this.onSubmit)}>
                            <FormGroup>


                                <Input type="text" placeholder="First Name" {...firstName} />
                                {firstName.touched && firstName.error && <div>{firstName.error}</div>}
                            </FormGroup>
                            <FormGroup>


                                <Input type="text" placeholder="Last Name" {...lastName} />
                                {lastName.touched && lastName.error && <div>{lastName.error}</div>}
                            </FormGroup>
                            <FormGroup>


                                <Input type="text" placeholder="Mobile Number" {...mobileNumber} />
                                {mobileNumber.touched && mobileNumber.error && <div>{mobileNumber.error}</div>}
                            </FormGroup>
                            <FormGroup>


                                <Input type="email" placeholder="Email" {...email} />
                                {email.touched && email.error && <div>{email.error}</div>}
                            </FormGroup>



                            <FormGroup>


                                <Input type="textarea"
                                    placeholder="Comments"
                                    {...notes}
                                    autoSize={false}
                                />

                            </FormGroup>
                            <FormGroup>


                                <Input type="text" placeholder="Address" {...address} />

                            </FormGroup>

                            <FormGroup>

                                <div className="radio-container">
                                    <CustomInput type="radio" id="male" name="customRadio" label="male" {...sex} value="male" checked={sex.value === 'male'} />

                                    <CustomInput type="radio" id="female" label="female" htmlFor="female" {...sex} value="female" checked={sex.value === 'female'} />
                                    {/* {lastName.touched && lastName.error && <div>{lastName.error}</div>} */}
                                </div>
                            </FormGroup>
                            <div>
                                <Button type="submit" disabled={submitting} className="submit-btn">
                                    {submitting ? <i /> : <i />} Submit
                                </Button>

                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

// Contact = reduxForm({ // <----- THIS IS THE IMPORTANT PART!
//     form: 'contact',                           // a unique name for this form
//     fields: ['firstName', 'lastName', 'email'] // all the fields in your form
//   })(Contact);
//   SimpleForm.propTypes = {
//     fields: PropTypes.object.isRequired,
//     handleSubmit: PropTypes.func.isRequired,
//     resetForm: PropTypes.func.isRequired,
//     submitting: PropTypes.bool.isRequired
//   }

export default reduxForm({
    form: 'simple',
    fields,
    validate
})(Contact)
