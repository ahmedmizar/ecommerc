import React, { Component } from 'react';
import axios from "axios"
import { Alert } from 'reactstrap';
import "./ContactUS.scss"
import ContactForm from '../../components/ContactForm/ContactForm';





class Contact extends Component {
    state = {
        showAlert: false
    }
    onSubmit = (values) => {
        console.log(values)
        axios.post("http://localhost:3001/contect-us", values).then(respone => {
            if (respone.status === 201) {
                this.setState({ showAlert: true })
                setTimeout(() => this.setState({ showAlert: false }), 2000)
            }
        })
            .catch(error => {
                console.log(error)
            })
    }
    render() {

        return (
            <div className="contact-us">
                <div className="container">
                    {
                        this.state.showAlert && <Alert color="success">
                            your Message has been sent
                            </Alert>
                    }
                    <div className="contact-card">
                        <h3>Contact us</h3>
                        <p></p>
                        <ContactForm onSubmit={this.onSubmit} />
                    </div>
                </div>
            </div>
        );
    }
}


export default Contact
