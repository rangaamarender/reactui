import React from "react";
// import lucidLogo from "/Lucid/dashboard/src/assets/lucidLogo.png";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputField from "./InputField";
import { Button, Col, Container, Row } from "react-bootstrap";

function LoginForm() {
    const validation = Yup.object({
        fullName: Yup.string().required("Full Name is required"),
        businessEmail: Yup.string()
            .email("Invalid email")
            .required("Business Email is required"),
        password: Yup.string()
            // .matches(/^[a-zA-Z0-9!@#$%^&*]{8,16}$/,
            //     "Password should contain atleast one number and one special character")
            .min(4, "Password is min 4 Char")
            .max(10, "Password is Max 10 Char only")
            .required("Password is required"),
        contactNumber: Yup.string()
            .matches(/^[0-9]+$/, "Contact Number must be numeric")
            .required("Contact Number is required"),
    });

    return (
        <>
            <Container fluid="md">
                <Row>
                    <Col md={6}>
                        <Formik
                            initialValues={{
                                fullName: "",
                                businessEmail: "",
                                password: "",
                                contactNumber: "",
                            }}
                            validationSchema={validation}
                            onSubmit={values => {
                                console.log(values)
                            }}
                        >
                            {(formik) => (
                                <div>
                                    {/* <h1 className="my-4 font-weight-bold-display-4">SignUp</h1> */}
                                    <Form >
                                        <InputField name="fullName" type="text" placeholder="Full Name" />
                                        <InputField name="businessEmail" type="email" placeholder="Business Email" />
                                        <InputField name="password" type="password" placeholder="Password" />
                                        <InputField name="contactNumber" type="text" placeholder="Contact Number" />
                                        <Button type="submit" className="btn mt3">Login</Button>
                                    </Form>
                                </div>
                            )}
                        </Formik>
                    </Col>
                    <Col md={6}>
                        {/* <img className='img-fluid w-100' src={lucidLogo} alt=''></img> */}
                    </Col>
                </Row>
            </Container >
        </>
    );
}

export default LoginForm;