import { Editor } from 'primereact/editor'
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import RequiredLabel from '../../../components/RequiredLabel'
import { FileUpload } from 'primereact/fileupload';

const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    amount: Yup.number().required('Required'),
})

function Expenses({onPrevious, onSubmit}) {

    const formik = useFormik({
        initialValues: {
            title: "",
            amount: "",
          description: "",
          expensesUploadFile:[]
        },
        validationSchema: validationSchema,
    
        onSubmit: (values) => {
          console.log("Expenses", values);
          onSubmit(values);
        }
      });

    return (
        <form onSubmit={formik.handleSubmit}>
        <div className='flex flex-wrap gap-3 p-fluid'>
            <div className='row mb-3'>
                <div className='flex-auto col-md-6'>
                    <RequiredLabel label='Title' required />
                    <InputText name="title" type="text"
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="---"
                        className={formik.errors.title && formik.touched.title ? 'p-invalid' : ''}
                    />
                    {formik.errors.title && formik.touched.title && (
                        <small className="p-error">{formik.errors.title}</small>
                    )}
                </div>
                <div className='flex-auto col-md-6'>
                    <RequiredLabel label='Amount' required />
                    <InputText name="amount" type="text"
                        value={formik.values.amount}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="---"
                        className={formik.errors.amount && formik.touched.amount ? 'p-invalid' : ''}
                    />
                    {formik.errors.amount && formik.touched.amount && (
                        <small className="p-error">{formik.errors.amount}</small>
                    )}
                </div>
            </div>
            <div className='row mb-3'>
                <label htmlFor='description'>Description</label>
                <Editor
                    id='description'
                    style={{ height: '80px' }}
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
            </div>
            <div className='row mb-3'>
                <div className="">
                    <FileUpload name="demo[]" url={'/api/upload'} multiple accept="image/*" maxFileSize={1000000} emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} />
                </div>
            </div>
            </div>
            <div className='p-mt-4 form-btns' >
                    <Button label='Previous' className='mr-2 company-secondary-btn' onClick={() => onPrevious(2)} />
                    <Button label='Submit' className=' company-primary-btn' type='submit' />
                </div>
            </form>
            )
}

            export default Expenses