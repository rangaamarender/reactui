import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { FileUploader } from "react-drag-drop-files";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button } from 'primereact/button';
import ReusableInputField from '../../../components/ReusableInputField';
import RequiredLabel from '../../../components/RequiredLabel';
import { Calendar } from 'primereact/calendar';
import { InputNumber } from 'primereact/inputnumber';
import { FileUpload } from 'primereact/fileupload';

const validationSchema = Yup.object().shape({
    documentName: Yup.string().required('Document Name is required'),
    number: Yup.number().required('Number is required'),
    issueDate: Yup.date().required('Please Enter Valid Date'),
    expDate: Yup.date()
        .required('Exp Date is required')
        .min(
            Yup.ref('issueDate'),
            'End Date must be greater than or equal to Start Date'
        ),
});

function AddCompaniesDocuments({ onPrevious, onSubmit }) {

    const formik = useFormik({
        initialValues: {
            documentName: "",
            number: '',
            issueDate: null,
            expDate: null,
        },
        validationSchema: validationSchema,

        onSubmit: (values) => {
            onSubmit(3, values);
            console.log("AddCompaniesDocuments", values)
        },
    });

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <h5>Documents</h5>
                <div className='flex flex-wrap gap-3 p-fluid'>
                    <div className='mb-3'>
                        <ReusableInputField label="Document Name" required
                            name="documentName"
                            value={formik.values.documentName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="---"
                            className={formik.errors.documentName && formik.touched.documentName ? 'p-invalid' : ''}
                        />
                        {formik.errors.documentName && formik.touched.documentName && (
                            <small className="p-error">{formik.errors.documentName}</small>
                        )}
                    </div>
                    <div className='row mb-3'>
                        <div className="flex-auto col-md-6">
                            <ReusableInputField label="Number" required
                                name="number"
                                value={formik.values.number}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder="---"
                                className={formik.errors.number && formik.touched.number ? 'p-invalid' : ''}
                            />
                            {formik.errors.number && formik.touched.number && (
                                <small className="p-error">{formik.errors.number}</small>
                            )}
                        </div>
                        <div className="flex-auto col-md-3">
                            <RequiredLabel label='Issued Date' />
                            <Calendar
                                id="issueDate"
                                name="issueDate"
                                value={formik.values.issueDate}
                                onChange={(e) => formik.setFieldValue('issueDate', e.value)}
                                onBlur={formik.handleBlur}
                                dateFormat='mm/dd/yy'
                                showIcon
                                className={`date-pick-icon ${formik.errors.issueDate && formik.touched.issueDate ? 'p-invalid' : ''}`}
                            />
                            {formik.errors.issueDate && formik.touched.issueDate && (
                                <small className="p-error">{formik.errors.issueDate}</small>
                            )}
                        </div>

                        <div className="flex-auto col-md-3">
                            <RequiredLabel label='Exp Date' />
                            <Calendar
                                id='expDate'
                                name="expDate"
                                value={formik.values.expDate}
                                onChange={(e) => formik.setFieldValue('expDate', e.value)}
                                onBlur={formik.handleBlur}
                                dateFormat="mm/dd/yy"
                                showIcon
                                className={`date-pick-icon ${formik.errors.expDate && formik.touched.expDate ? 'p-invalid' : ''}`}
                            />
                            {formik.errors.expDate && formik.touched.expDate && (
                                <small className="p-error">{formik.errors.expDate}</small>
                            )}
                        </div>

                    </div>
                    <div className='row mb-3'>
                        <div className="">
                            <FileUpload name="demo[]" url={'/api/upload'} multiple accept="image/*" maxFileSize={1000000} emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <span className='l-color-orange l-fw-500 pe-2'>  + ADD NEW DOCUMENT</span>
                    </div>
                </div>
                <div className='p-mb-4 form-btns' >
                    <Button label='Previous' className='mr-2 company-secondary-btn' onClick={() => onPrevious(3)} />
                    <Button label='Submit' className=' company-primary-btn' type='submit' />
                </div>
            </form>
        </>
    );
}

export default AddCompaniesDocuments;