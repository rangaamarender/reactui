import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { RadioButton } from 'primereact/radiobutton';
import React, { useEffect, useState } from 'react';
import RequiredLabel from '../../../components/RequiredLabel';
import axios from 'axios';

function AddMSA({ onPrevious,onNext }) {
    const [options, setOptions] = useState();

    const formik = useFormik({
        initialValues: {
            selectMSA: '',
        },
        validationSchema: Yup.object().shape({
            selectMSA: Yup.string().required('Select one option'),
        }),
        onSubmit: (values) => {
         console.log("AddOrganisation",values)  
         onNext("woRateOptions",values)    
  },
    });

    useEffect(() => {
        // Fetch options from API using axios
        axios
            .get('http://localhost:4000/dropdownOptions')
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
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className="text-center">
                    <h4>MSA</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing</p>
                </div>
                <div className="flex gap-3 p-fluid ">
                    <div className="flex-auto  mb-4">
                        <RequiredLabel label="Select MSA" required />
                        <Dropdown
                            name="selectMSA"
                            value={formik.values.selectMSA}
                            options={options}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="MSA Name"
                            className={
                                formik.errors.selectMSA && formik.touched.selectMSA
                                    ? 'p-invalid'
                                    : ''
                            }
                        />
                        {formik.errors.selectMSA && formik.touched.selectMSA && (
                            <small className="p-error">{formik.errors.selectMSA}</small>
                        )}
                    </div>
                    
                </div>
                <div className='flex-auto mt-3'>
                        <h4>Clients</h4>
                    </div>
                <div className="p-mt-4 form-btns">
                <Button label='Previous' className='mr-2 company-secondary-btn' onClick={() => onPrevious("addClient")} />
                    <Button
                        label="Next"
                        className="company-primary-btn"
                        type="submit"
                    />
                </div>

            </form>

        </div>
    )
}

export default AddMSA