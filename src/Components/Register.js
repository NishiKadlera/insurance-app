import React, { Component } from "react";

const regularExpression = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)
const regularExpression1 = RegExp(/^[6-9]\d{9}$/)
 
const validation = ({ error, ...rest }) => {
    let checkValidation = false;

    Object.values(error).forEach(val => {
        if (val.length > 0) {
            checkValidation = false
        } else {
            checkValidation = true
        }
    });

    Object.values(rest).forEach(val => {
        if (val === null) {
            checkValidation = false
        } else {
            checkValidation = true
        }
    });

    return checkValidation;
};

export default class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            mobile: '',
            password: '',
            error: {
                name: '',
                email: '',
                mobile: '',
                password: ''
            }
        }
    }

    onFormSubmit = event => {
        event.preventDefault();

        if (validation(this.state)) {
            console.log(this.state)
        } else {
            console.log("Error occured");
        }
    };

    formObject = event => {
        //collaboration and debugging purposes, it’s always better to write the prevent function just below your function declaration. 
        //That way you won’t cause a bug by forgetting to put the prevent function.
        event.preventDefault();

        const { name, value } = event.target;
        let error = { ...this.state.error };

        switch (name) {
            case "name":
                error.name = value.length < 5 ?  "Name should be 5 characters long" : "";
                break;
            case "email":
                error.email = regularExpression.test(value)
                    ? ""
                    : "Email is not valid";
                break;
            case "mobile":
                error.mobile = regularExpression1.test(value)
                    ? ""
                    : "number is not valid";
                break;
            case "password":
                error.password = value.length < 5 ? "Password should 5 characters long" : "";
                break;
            default:
                break;
        }

        this.setState({
            error,
            [name]: value
        })
    };

    render() {

        const { error } = this.state;

        return (
            
            <center className="register">
                <div className="register1"><br />
                    <form className="card-body reg" onSubmit={this.onFormSubmit}>
                        <h3>Registration Form</h3>
                       
                        <div className="form-group mb-3">
                            <label className="mb-2"><strong>Username</strong></label>
                            <input 
                               required
                               type="text" 
                               name="username"
                               onChange={this.formObject}
                               className={error.name.length > 0 ? "is-invalid form-control" : "form-control"}/>
                            
                                {error.name.length > 0 && (
                                <span className="invalid-feedback">{error.name}</span>
                                )}
                        </div>

                        <div className="form-group mb-3">
                            <label className="mb-2"><strong>Email</strong></label>
                            <input
                                required
                                type="email"
                                name="email"
                                className={error.email.length > 0 ? "is-invalid form-control" : "form-control"}
                                onChange={this.formObject}/>

                                {error.email.length > 0 && (
                                    <span className="invalid-feedback">{error.email}</span>
                                )}
                        </div>
                        <div className="form-group mb-3">
                            <label className="mb-2"><strong>Mobile</strong></label>
                            <input 
                               required
                               type="text" 
                               name="mobile"
                               onChange={this.formObject}
                               className={error.mobile.length > 0 ? "is-invalid form-control" : "form-control"}/>
                            
                                {error.mobile.length > 0 && (
                                <span className="invalid-feedback">{error.mobile}</span>
                                )}
                        </div>

                        <div className="form-group mb-3">
                            <label className="mb-2"><strong>Password</strong></label>
                            <input
                                required
                                type="password"
                                name="password"
                                className={error.password.length > 0 ? "is-invalid form-control" : "form-control"}
                                onChange={this.formObject}/>

                                {error.password.length > 0 && (
                                    <span className="invalid-feedback">{error.password}</span>
                                )}
                        </div>

                        <div className="d-grid mt-3">
                            <button type="submit" className="btn btn-block btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </center>
            
        );
    }
}