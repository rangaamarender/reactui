import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { InputMask } from 'primereact/inputmask';
import * as Yup from 'yup';
import { Button } from 'primereact/button';
import axios from 'axios';
import RequiredLabel from '../../../components/RequiredLabel';

const validationSchema = Yup.object().shape({
    // firstName: Yup.string().required('First Name is required'),
    // lastName: Yup.string(),
    // middleName: Yup.string(),
    // email: Yup.string().email('Invalid email').required('Email is required'),
    // phoneNumber: Yup.string().required('Phone Number is required'),
    // joinDate: Yup.date().nullable().required('Join Date is required'),
    role: Yup.string().required('Role is required')
});

const ResourceForm = ({ onNext, initialData, setValue }) => {
    const [options, setOptions] = useState([]);
    const formik = useFormik({
        initialValues: {
            firstName: initialData.firstName || '',
            lastName: initialData.lastName || '',
            middleName: initialData.middleName || '',
            email: initialData.email || '',
            phoneNumber: initialData.phoneNumber || '',
            joinDate: initialData.joinDate || null,
            role: initialData.role || ''
        },
        validationSchema: validationSchema,

        onSubmit: (values) => {
            if (values.role !== 'w2Employee') {
                onNext("selectVendor", values);
            } else {
                onNext("assignDocuments", values);
            }
            console.log("Form ", values);
        }

    });
    // const handleChange =(e)=>{
    //     formik.handleChange(e)
    //     setValue(e.target.value);
    //     localStorage.setItem("selectedOption",e.target.value)
    //     console.log(e.target.value);
    //   }
    const handleChange = (e) => {
        const selectedRole = e.target.value;

        // Check if the role has changed
        if (formik.values.role !== selectedRole) {
            // Role has changed, reset the remaining form data
            formik.setValues({
                ...formik.values,
                role: selectedRole,
                selectVendor: {},
                assignDocuments: {},
            });
        } else {
            // Role has not changed, update the role value only
            formik.setFieldValue('role', selectedRole);
        }

        setValue(selectedRole);
        localStorage.setItem('selectedOption', selectedRole);
    };

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
            <div className="steps-form-container">
                <form onSubmit={formik.handleSubmit}>
                    {/* <h2>Resource</h2> */}
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
                                <RequiredLabel label="Primary Email " required />
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
                                <RequiredLabel label="Phone Number " required />
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
                                <RequiredLabel label="Join Date" required />
                                <Calendar
                                    id="joinDate"
                                    name="joinDate"
                                    value={formik.values.joinDate}
                                    onChange={(e) => formik.setFieldValue('joinDate', e.value)}
                                    onBlur={formik.handleBlur}
                                    dateFormat="mm/dd/yy"
                                    placeholder='MM/DD/YYYY'
                                    showIcon
                                    className={`date-pick-icon ${formik.errors.joinDate && formik.touched.joinDate ? 'p-invalid' : ''}`}
                                />
                                {formik.errors.joinDate && formik.touched.joinDate && (
                                    <small className="p-error">{formik.errors.joinDate}</small>
                                )}
                            </div>
                            <div className="flex-auto col-md-6">
                                <RequiredLabel label="Role" required />
                                <Dropdown
                                    id="role"
                                    name="role"
                                    value={formik.values.role}
                                    // options={options}
                                    options={[
                                        { label: 'W2 Employee', value: 'w2Employee' },
                                        { label: 'C2C Employee', value: 'c2cEmployee' },
                                        { label: '1099 Employee', value: 'emp1099' },
                                    ]}
                                    // onChange={formik.handleChange}
                                    onChange={handleChange}
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
                        <Button className='company-primary-btn me-3' label="Next" type="submit" />
                    </div>
                </form>
            </div>

        </>
    );
};

export default ResourceForm;


