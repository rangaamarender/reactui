import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { RadioButton } from 'primereact/radiobutton';
import React, { useEffect, useState } from 'react';
import RequiredLabel from '../../../components/RequiredLabel';
import axios from 'axios';
import AddSidebarRight from '../../../components/reusable/AddSidebarRight';


function AddClient({onNext,onPrevious}) {
    const [options, setOptions] = useState();
    const [nextStep, setNextStep] = useState(null)

    const formik = useFormik({
        initialValues: {
            clientName: '',   
        },
        validationSchema: Yup.object().shape({
            clientName: Yup.string().required('Select one option'),
        }),
        onSubmit: (values) => {
            onNext('addMSA',values);
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
        <>
          <form onSubmit={formik.handleSubmit}>
                <div className="text-center">
                    <h4>Add Client</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing</p>
                </div>
                <div className="flex gap-3 p-fluid ">
                    <div className="flex-auto  mb-4">
                        <RequiredLabel label="Client Name" required />
                        <Dropdown
                            name="clientName"
                            value={formik.values.clientName}
                            options={options}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder=""
                            className={
                                formik.errors.clientName && formik.touched.clientName
                                    ? 'p-invalid'
                                    : ''
                            }
                        />
                        {formik.errors.clientName && formik.touched.clientName && (
                            <small className="p-error">{formik.errors.clientName}</small>
                        )}
                    </div>
                    <div className='text-end pe-5 mt-2'>
                            {/* <AddSidebarRight sidebarToBeRender={"addVendor"} /> */}
                            <AddSidebarRight sidebarToBeRender={"addClientInAddContract"} />

                        </div>
                </div>

                <div className="flex gap-3 p-fluid mb-4 l-bg-grey">
                <div className="flex-auto  mb-4">
                       <div className='row m-3'>
                        <div className='col-md-4'>
                         <label>Client Name</label>
                         <h6>Tata Consultancy </h6>

                        </div>
                        <div className='col-md-4'>
                        <label>Phone</label>
                         <h6>-- </h6>
                        </div>
                        <div className='col-md-4'>
                        <label>Fax</label>
                         <h6>---</h6>
                        </div>
                       </div>
                       <div className='row m-3 '>
                        <div className='col-md-4'>
                        <label>Web Address</label>
                         <h6>---</h6>
                        </div>
                        <div className='col-md-4'>
                        <label>EIN</label>
                         <h6>---</h6>
                        </div>
                        <div className='col-md-4'>
                        <label>Address</label>
                         <h6>---</h6>
                        </div>
                       </div>
                   </div>
                        </div>


                <div className="p-mt-4 form-btns">
                <Button label='Previous' className='mr-2 company-secondary-btn' onClick={() => onPrevious("endClient")} />

            <Button
              label="Next"
              className="company-primary-btn"
              type="submit"
            />
          </div>

            </form>

            

        </>
    )
}

export default AddClient