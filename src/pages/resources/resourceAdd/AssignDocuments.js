import React from 'react';
import { useFormik } from 'formik';
import { MultiSelect } from 'primereact/multiselect';
import { Button } from 'primereact/button';
import * as Yup from 'yup';
import RequiredLabel from '../../../components/RequiredLabel';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const AssignDocuments = ({ onSubmit, onPrevious, initialData }) => {
    const [options, setOptions] = useState()
    const selectedOption = localStorage.getItem("selectedOption")

    const formik = useFormik({
        initialValues: {
            // documents: [],
            documents: initialData.documents || [],
        },
        validationSchema: Yup.object({
            documents: Yup.array()
                .required('Documents are required')
                .min(1, 'Please select at least one Document'),
        }),
        onSubmit: (values) => {
            onSubmit(values);
            console.log("Form", values)
        },
    });
    // const documentOptions = [
    //     { label: 'Document 1', value: 'document1' },
    //     { label: 'Document 2', value: 'document2' },
    //     { label: 'Document 3', value: 'document3' },
    //     { label: 'Document 4', value: 'document4' },
    // ];

    useEffect(() => {
        // Fetch options from API using axios
        axios.get('http://localhost:4000/dropdownOptions')
            .then((response) => {
                const getData = response.data.map((user) => ({
                    value: user.value,
                    label: user.lable,
                }));
                setOptions(getData);
            })
            .catch((error) => {
                console.log('Error fetching options:', error);
            });
    }, []);

    return (
        <form onSubmit={formik.handleSubmit}>

            <>
                <h2>Assign Documents</h2>
                <div className='flex flex-wrap gap-3 p-fluid'>
                    <div className="row mb-2">
                        <div className="flex-auto">
                            {/* <label htmlFor="documents">Select Documents</label> */}
                            <RequiredLabel label="Select Documents" required />
                            <MultiSelect
                                id="documents"
                                name="documents"
                                placeholder="Select Documents"
                                value={formik.values.documents}
                                options={options}
                                onChange={(e) => formik.setFieldValue('documents', e.value)}
                                onBlur={formik.handleBlur}
                                filter
                                filterPlaceholder="Search Documents"
                                multiple
                                display="chip"
                            />
                            {formik.touched.documents && formik.errors.documents && (
                                <small className='p-error'>{formik.errors.documents}</small>
                            )}
                        </div>
                    </div>
                </div>
                <div className='p-mt-4  buttons-container'>
                    <Button label='Previous' className='mr-2 company-secondary-btn' onClick={() => onPrevious("selectVendor")} />
                    <Button label='Submit' className='company-primary-btn' type='submit' />
                </div>
            </>

        </form>
    );
};

export default AssignDocuments;
