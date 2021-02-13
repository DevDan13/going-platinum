import React from "react";
import { Button, FormHelperText, Input, FormControl, InputLabel } from '@material-ui/core';
import "./style.css"


function Form() {
    return (
        <FormControl className="all login ">
                        <FormHelperText className="title">Log In</FormHelperText>
                                    <InputLabel for="inputEmail4" className="form-label">Username</InputLabel>
                                    <Input type="text" className="inputRow form-control" className="inputUsername" placeholder="Username" />
                                    <InputLabel for="inputPassword4" className="form-label">Password</InputLabel>
                                    <Input type="password" className="inputRow form-control" className="inputPassword" placeholder="Your password" />
                 {/* <Row className="signup">
                    <Col>
                        <h2 className="title">Create a new account</h2>
                        <div className="sign">
                            <div className="email">
                                <label for="email-input" className="form-label"
                                >Email address</label
                                >
                                <input
                                    type="email"
                                    className="form-control"
                                    className="email-input"
                                    placeholder=" Email"
                                />
                            </div>
                            <div className="username">
                                <label for="inputUsername" className="form-label">Username</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    className="username-input"
                                    placeholder="Username"
                                />
                            </div>
                            <div className="password">
                                <label for="inputPassword" className="form-label"
                                >Password</label
                                >
                                <input
                                    type="password"
                                    className="form-control"
                                    className="password-input"
                                    placeholder="Password"
                                />
                            </div>
                            <button className="signupBtn" className="btn btn-primary">Register</button>
                        </div>
                    </Col>
                </Row> */}
        </FormControl>
    )

}

export default Form;