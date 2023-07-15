import React, {useState,useEffect} from 'react'
import { useFormik } from 'formik';
// import { InputText } from 'primereact/inputtext';
import * as Yup from 'yup';
import { Button } from 'primereact/button';
import axios from 'axios';
import { Dropdown } from 'primereact/dropdown';
import RequiredLabel from '../../../components/RequiredLabel';
import AddSidebarRight from '../../../components/reusable/AddSidebarRight';


function AddAccountManagerInfo({onPrevious, onSubmit}) {

  const[options,setOptions] = useState();

  useEffect(() => {
    // Fetch options from API using axios
    axios.get('http://localhost:4000/dropdownOptions')
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

  const formik = useFormik({
    initialValues: {
      vendor: "",
    },
    validationSchema: Yup.object({
      vendor: Yup.string().required('Vendor is required'),
    }),
    onSubmit: (values) => {
      onSubmit(0, values);
      console.log("Account Manager Info", values)
    },
  });
  return (
    <>
     <form onSubmit={formik.handleSubmit}>
     <div className="text-center">
            <h4>Account Manager Info</h4>
            <p>Lorem Ipsum is simply dummy text of the printing</p>
          </div>
     <div className='flex flex-wrap gap-3 p-fluid'>
     <div className='flex-auto'>
            {/* <label htmlFor="selectedVendor">Select Vendor</label> */}
            <RequiredLabel label="Vendor" required />
            <Dropdown
              name="vendor"
              value={formik.values.vendor}
              options={options}
              onChange={(e) => formik.setFieldValue('vendor', e.value)}
              onBlur={formik.handleBlur}
              placeholder="---"
            />
            {formik.touched.vendor && formik.errors.vendor && (
              <small className="p-error">{formik.errors.vendor}</small>
            )}
            {/* <AddSidebarRight sidebarToBeRender={"addCompany"} /> */}
            </div>
                  </div>
                  <div className='flex-auto mt-3'>
                   <h4>
                      Recruiter Info
                   </h4>
                  </div>
                  <div className='p-mt-4 form-btns' >
                    <Button label='Previous' className='mr-2 company-secondary-btn' onClick={() => onPrevious("document")} />
                    <Button label='Submit' className=' company-primary-btn' type='submit' />
                </div>
     </form>
    
    </>
  )
}

export default AddAccountManagerInfo