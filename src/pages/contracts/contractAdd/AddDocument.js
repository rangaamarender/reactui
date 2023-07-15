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
    // number: Yup.number().required('Number is required'),
    // issueDate: Yup.date().required('Please Enter Valid Date'),
    // expDate: Yup.date()
    //     .required('Exp Date is required')
    //     .min(
    //         Yup.ref('issueDate'),
    //         'End Date must be greater than or equal to Start Date'
    //     ),
});

function AddDocument({ onPrevious, onNext, addDocument, onSubmit }) {


    const formik = useFormik({
        initialValues: {
            documentName: "",
            number: '',
            issueDate: null,
            expDate: null,
        },
        validationSchema: validationSchema,

        onSubmit: (values) => {
            // if (addDocument === "addContractDocument") {
            //     onNext("manager", values);
            // } else if (addDocument === "addCompanyDocument") {
            //     onNext(3, values);
            // } else if (addDocument === "addNewCompanyDocument") {
            //     onSubmit(values)
            // }
            onNext("manager", values);

            console.log("Add Documents", values)
        }
    });

    // const handlePrevious = () => {
    //     if (addDocument === "addContractDocument") {
    //         onPrevious(7);
    //     } else if (addDocument === "addCompanyDocument") {
    //         onPrevious(3);
    //     }
    // }

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
            <div className="text-center">
            <h4>Documents</h4>
            <p>Lorem Ipsum is simply dummy text of the printing</p>
          </div>
                <div className='flex flex-wrap gap-3 p-fluid'>
                    <div className='flex-auto mb-3'>
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
                    <div className='flex-auto row mb-3'>
                        <div className=" col-md-6">
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
                        <div className="col-md-3">
                            <RequiredLabel label='Issued Date' required />
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

                        <div className="col-md-3">
                            <RequiredLabel label='Exp Date' required />
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
                    <div className='flex-auto row mb-3'>

                        <FileUpload name="demo[]" url={'/api/upload'} multiple accept="image/*" maxFileSize={1000000} emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} />

                    </div>
                </div>
                <div className='p-mb-4 form-btns' >
                    <Button label='Previous' className='mr-2 company-secondary-btn' onClick={() => onPrevious("supervaisor")} />
                    <Button label='Next' className=' company-primary-btn' type='submit' />
                </div>

            </form>


        </>
    );
}

export default AddDocument;