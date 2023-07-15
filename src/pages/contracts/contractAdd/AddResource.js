import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { InputMask } from 'primereact/inputmask';
import * as Yup from 'yup';
import { Button } from 'primereact/button';
import axios from 'axios';

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string(),
    middleName: Yup.string(),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phoneNumber: Yup.string().required('Phone Number is required'),
    startDate: Yup.date().nullable().required('Start Date is required'),
    role: Yup.string().required('Role is required')
});

const AddResource = ({ onNext }) => {
    const [options, setOptions] = useState([]);
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            middleName: '',
            email: '',
            phoneNumber: '',
            startDate: null,
            role: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            onNext(0, values);
            console.log("Form 1", values)
        }
    });

    useEffect(() => {
        // Fetch options from API using axios
        axios
            .get('http://localhost:4000/resourceEmployeeRole')
            .then((response) => {
                const empRole = response.data.map((user) => ({
                    value: user.value,
                    label: user.lable,
                }));
                setOptions(empRole);
            })
            .catch((error) => {
                console.log('Error fetching options:', error);
            });
    }, []);

    return (
        <>

            <div className="resource-form-container">
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-2'></div>
                        <div className='col-md-8'>
                            <form onSubmit={formik.handleSubmit}>
                                <h2>Resource</h2>
                                <div className='flex flex-wrap gap-3 p-fluid'>
                                    <div className="row mb-2">
                                        <div className="flex-auto col-md-4">
                                            <label htmlFor="firstName" className="">First Name <span className='text-danger'> *</span></label>
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
                                        <div className="flex-auto col-md-4">
                                            <label htmlFor="middleName" className="">Middle Name</label>
                                            <InputText
                                                id="middleName"
                                                name="middleName"
                                                value={formik.values.middleName}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                placeholder="Middle Name"
                                            />
                                        </div>
                                        <div className="flex-auto col-md-4">
                                            <label htmlFor="lastName" className="">Last Name</label>
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
                                            <label htmlFor="email" className="">Primary Email <span className='text-danger'> *</span></label>
                                            <InputText
                                                id="email"
                                                name="email"
                                                value={formik.values.email}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                placeholder="Email"
                                                className={formik.errors.email && formik.touched.email ? 'p-invalid' : ''}
                                            />
                                            {formik.errors.email && formik.touched.email && (
                                                <small className="p-error">{formik.errors.email}</small>
                                            )}
                                        </div>
                                        <div className="flex-auto col-md-6">
                                            <label htmlFor="phoneNumber" className="">Phone Number <span className='text-danger'> *</span></label>
                                            <InputMask
                                                id="phoneNumber"
                                                name="phoneNumber"
                                                value={formik.values.phoneNumber}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                placeholder="Phone Number"
                                                mask="(999) 999-9999"
                                                className={formik.errors.phoneNumber && formik.touched.phoneNumber ? 'p-invalid' : ''}
                                            />
                                            {formik.errors.phoneNumber && formik.touched.phoneNumber && (
                                                <small className="p-error">{formik.errors.phoneNumber}</small>
                                            )}
                                        </div>
                                    </div>
                                    <div className='row mb-2'>
                                        <div className="flex-auto col-md-6">
                                            <label htmlFor="startDate" className="">Start Date <span className='text-danger'> *</span></label>
                                            <Calendar
                                                id="startDate"
                                                name="startDate"
                                                value={formik.values.startDate}
                                                onChange={(e) => formik.setFieldValue('startDate', e.value)}
                                                onBlur={formik.handleBlur}
                                                dateFormat="mm/dd/yy"
                                                placeholder='MM/DD/YYYY'
                                                showIcon
                                                className={`date-pick-icon ${formik.errors.startDate && formik.touched.startDate ? 'p-invalid' : ''}`}
                                            />
                                            {formik.errors.startDate && formik.touched.startDate && (
                                                <small className="p-error">{formik.errors.startDate}</small>
                                            )}
                                        </div>
                                        <div className="flex-auto col-md-6">
                                            <label htmlFor="role" className="">Role <span className='text-danger'> *</span></label>
                                            <Dropdown
                                                id="role"
                                                name="role"
                                                value={formik.values.role}
                                                options={options}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                placeholder="Select a role"
                                                className={formik.errors.role && formik.touched.role ? 'p-invalid' : ''}
                                            />
                                            {formik.errors.role && formik.touched.role && (
                                                <small className="p-error">{formik.errors.role}</small>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="p-mt-4 buttons-container">
                                    <Button className='company-primary-btn me-3' label="Create" type="submit" />
                                </div>
                            </form>
                        </div>
                        <div className='col-md-2'></div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default AddResource;
