import React, { useState } from 'react';
import { useFormik } from 'formik';
import { InputText } from 'primereact/inputtext';
import { InputMask } from 'primereact/inputmask';
import * as Yup from 'yup';
import { Button } from 'primereact/button';
import RequiredLabel from '../../RequiredLabel';

const validationSchema = Yup.object().shape({
    // firstName: Yup.string().required('First Name is required'),
    // lastName: Yup.string(),
    // email: Yup.string().email('Invalid email').required('Email is required'),
    // phoneNumber: Yup.string().required('Phone Number is required'),
});

const ContactDetails = ({ onNext, onPrevious }) => {
    
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            onNext(1, values);
            console.log("Contact Details", values)
        },
    });

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <h4 className='mb-4'>Contact Details</h4>
                <div className='flex flex-wrap gap-3 p-fluid'>
                    <div className="row mb-2">
                        <div className="flex-auto col-md-6">
                            <RequiredLabel label="Auth.Signatory First Name (CEO or President)" required />
                            <InputText
                                id="firstName"
                                name="firstName"
                                value={formik.values.firstName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder="First Name"
                                className={formik.errors.firstName && formik.touched.firstName ? 'p-invalid' : ''}
                            />
                            {formik.errors.firstName && formik.touched.firstName && (
                                <small className="p-error">{formik.errors.firstName}</small>
                            )}
                        </div>
                      
                        <div className="flex-auto col-md-6">
                        <RequiredLabel label="Last Name" required />
                            <InputText
                                id="lastName"
                                name="lastName"
                                value={formik.values.lastName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder="Last Name"
                                className={formik.errors.lastName && formik.touched.lastName ? 'p-invalid' : ''}
                            />
                            {formik.errors.lastName && formik.touched.lastName && (
                                <small className="p-error">{formik.errors.lastName}</small>
                            )}
                        </div>
                    </div>
                    <div className='row mb-2'>
                        <div className="flex-auto col-md-6">
                        <RequiredLabel label="Auth.Signatory Email (CEO or President)" required />
                            <InputText
                                id="email"
                                name="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder="email@tech.com"
                                className={formik.errors.email && formik.touched.email ? 'p-invalid' : ''}
                            />
                            {formik.errors.email && formik.touched.email && (
                                <small className="p-error">{formik.errors.email}</small>
                            )}
                        </div>
                        <div className="flex-auto col-md-6">
                        <RequiredLabel label="Auth.Signatory Phone (CEO or President)" required />
                            <InputMask
                                id="phoneNumber"
                                name="phoneNumber"
                                value={formik.values.phoneNumber}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder="Phone Number"
                                mask="(999) 999-9999"
                                size="small"
                                className={formik.errors.phoneNumber && formik.touched.phoneNumber ? 'p-invalid' : ''}
                            />
                            {formik.errors.phoneNumber && formik.touched.phoneNumber && (
                                <small className="p-error">{formik.errors.phoneNumber}</small>
                            )}
                        </div>
                    </div>
                </div>
                <div className='p-mt-4 form-btns'>
                    <Button className='mr-2 company-secondary-btn' label='Previous' onClick={() => onPrevious(1)} />
                    <Button className='company-primary-btn' label='Next' type='submit' />
                </div>
            </form>
        </>

    );
};

export default ContactDetails;
