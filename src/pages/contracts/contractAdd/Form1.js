import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';

const roles = [
    { label: 'W2 Employee', value: 'w2Emp' },
    { label: 'C2C Employee', value: 'c2cEmp' }
];

const initialValues = {
    firstname: '',
    lastname: '',
    middlename: '',
    email: '',
    phonenumber: '',
    role: '',
    startDate: null,
    endDate: null
};

const validate = values => {
    const errors = {};

    if (!values.firstname) {
        errors.firstname = 'First Name is required';
    }

    if (!values.lastname) {
        errors.lastname = 'Last Name is required';
    }

    if (!values.email) {
        errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.phonenumber) {
        errors.phonenumber = 'Phone Number is required';
    }

    if (!values.role) {
        errors.role = 'Role is required';
    }

    if (!values.startDate) {
        errors.startDate = 'Start Date is required';
    }

    if (!values.endDate) {
        errors.endDate = 'End Date is required';
    } else if (values.endDate < values.startDate) {
        errors.endDate = 'End Date must be greater than or equal to Start Date';
    }

    return errors;
};

const Form1 = () => {
    const handleSubmit = (values) => {
        // Handle form submission here
        console.log(values);
    };

    return (
        <div>
            <h1>Registration Form</h1>
            <Formik
                initialValues={initialValues}
                validate={validate}
                onSubmit={handleSubmit}
            >
                {({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="firstname">First Name</label>
                            <Field
                                as={InputText}
                                id="firstname"
                                name="firstname"
                            />
                            <ErrorMessage name="firstname" component="div" className="error" />
                        </div>

                        <div>
                            <label htmlFor="lastname">Last Name</label>
                            <Field
                                as={InputText}
                                id="lastname"
                                name="lastname"
                            />
                            <ErrorMessage name="lastname" component="div" className="error" />
                        </div>

                        <div>
                            <label htmlFor="middlename">Middle Name</label>
                            <Field
                                as={InputText}
                                id="middlename"
                                name="middlename"
                            />
                        </div>

                        <div>
                            <label htmlFor="email">Email</label>
                            <Field
                                as={InputText}
                                id="email"
                                name="email"
                            />
                            <ErrorMessage name="email" component="div" className="error" />
                        </div>

                        <div>
                            <label htmlFor="phonenumber">Phone Number</label>
                            <Field
                                as={InputText}
                                id="phonenumber"
                                name="phonenumber"
                            />
                            <ErrorMessage name="phonenumber" component="div" className="error" />
                        </div>

                        <div>
                            <label htmlFor="role">Role</label>
                            <Field
                                as={Dropdown}
                                id="role"
                                name="role"
                                options={roles}
                                placeholder="Select a role"
                                optionLabel="label"
                                optionValue="value"
                            />
                            <ErrorMessage name="role" component="div" className="error" />
                        </div>

                        <div>
                            <label htmlFor="startDate">Start Date</label>
                            <Field
                                as={Calendar}
                                id="startDate"
                                name="startDate"
                                dateFormat="mm/dd/yy"
                            />
                            <ErrorMessage name="startDate" component="div" className="error" />
                        </div>

                        <div>
                            <label htmlFor="endDate">End Date</label>
                            <Field
                                as={Calendar}
                                id="endDate"
                                name="endDate"
                                dateFormat="mm/dd/yy"
                            />
                            <ErrorMessage name="endDate" component="div" className="error" />
                        </div>

                        <Button type="submit" label="Submit" />
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default Form1;
