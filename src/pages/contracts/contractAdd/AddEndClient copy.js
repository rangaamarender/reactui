import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { RadioButton } from 'primereact/radiobutton';
import React from 'react'
import { useEffect,useState } from 'react';
import RequiredLabel from '../../../components/RequiredLabel';
import axios from 'axios';


function AddEndClient() {
    const [options, setOptions] = useState();
    const [selectedOption, setSelectedOption] = useState("");
    const[next,setNext] = useState(null)


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
          selectMSA: "",
          endClientOptions: "",
         
        },
        validationSchema: Yup.object().shape({
            selectMSA: Yup.string().required('Required'),
            endClientOptions : Yup.string().required('Select one option'),
        })
    
        // onSubmit: (values) => {
        //   console.log("Contract Details", values);
          
        // }
      });

    const handleOptionChange = (e) => {
        setSelectedOption(e.value);
      };

      const handleNextClick =()=>{
        setNext(selectedOption)
      }

  return (
    <>
     {!next &&
    <form onSubmit={useFormik.handleSubmit}>
    <div className='text-center'>
       <h4>MSA</h4>
       <p>Lorem Ipsum is simply dummy text of the printing</p>
       </div>
       <div className='flex  gap-3 p-fluid'>
       <div className='flex-auto  mb-4'>
       <RequiredLabel label='Select MSA' required />
            <Dropdown
              name="selectMSA"
              value={formik.values.selectMSA}
              options={options}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="MSA Name"
              className={formik.errors.selectMSA && formik.touched.selectMSA ? 'p-invalid' : ''}
            />
            {formik.errors.selectMSA && formik.touched.selectMSA && (
              <small className="p-error">{formik.errors.selectMSA}</small>
            )}
            </div>
        </div>
       
       <div className='radio-group text-center mt-3'>
       <h4>Do you want to add End Client?</h4>
       <p>Lorem Ipsum is simply dummy text of the printing</p>
            <div className='radio-item mt-5'>
              <label className='radioButtonLable p-2'>
                <span style={{ float: "left" }}>Yes</span>
                <RadioButton style={{ float: "right" }}
                  name="yes"
                  value="yes" onChange={handleOptionChange}
                  checked={selectedOption === 'yes'} />
              </label>
            </div>
            <div className='radio-item  mt-3'>
              <label className='radioButtonLable  p-2'>
                <span style={{ float: "left" }}>NO</span>
                <RadioButton style={{ float: "right" }}
                  name="no"
                  value="no" onChange={handleOptionChange}
                  checked={selectedOption === 'no'} />
              </label>
            </div>
          </div>
          <div className="p-mt-4 form-btns">
            <Button label="Next" onClick={handleNextClick} className=' company-primary-btn' type="submit" />
          </div>
         
       </form>
}
       {next === "yes" && (
        <div>
          ADD Client
        </div>
      )}

      {next === "no" && (
        <div>
        WO Rate (Bill Rate)
        </div>
      )}
    
       </>   
  )
}

export default AddEndClient