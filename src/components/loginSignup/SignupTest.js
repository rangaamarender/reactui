import React from 'react';
import { useFormik } from 'formik';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import * as Yup from 'yup';
import ReCAPTCHA from 'react-google-recaptcha';

// import { createUser } from '../../services/SignupServices';
import { useState } from 'react';

const SignupTest = () => {
  const formik = useFormik({
    initialValues: {
      fullname: '',
      businessEmail: '',
      password: '',
      contactNumber: '',
      recaptcha: '',

    },
    validationSchema: Yup.object({
      fullname: Yup.string().required('Full Name is required'),
      businessEmail: Yup.string()
        .email('Invalid email address')
        .required('Business Email is required'),
      password: Yup.string().required('Password is required'),
      contactNumber: Yup.string().required('Contact Number is required'),
    //   recaptcha: Yup.string().required('Please complete the reCAPTCHA'),

    }),
    onSubmit: async (values, { resetForm }) => {
    //   try {
    //     // const newUser = await createUser(values);
    //     console.log('User created:', newUser);
    //     resetForm();
    //   } catch (error) {
    //     console.error('Failed to create user:', error);
    //   }
    }
  });

  const [verified, setVerified] = useState(false);
  const reCaptchaOnChange = () => {
    setVerified(true);
  };

  return (
    <div className="signup-page">
      <h1>Signup Page</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="p-field mb-4">
          <span className="p-float-label">
            <InputText
              id="fullname"
              name="fullname"
              value={formik.values.fullname}
              onChange={formik.handleChange}
              className={formik.errors.fullname && formik.touched.fullname ? 'p-invalid' : ''}
            />
            <label htmlFor="fullname">Full Name</label>
          </span>
          {formik.errors.fullname && formik.touched.fullname && (
            <small className="p-error">{formik.errors.fullname}</small>
          )}
        </div>
        <div className="p-field mb-4">
          <span className="p-float-label">
            <InputText
              id="businessEmail"
              name="businessEmail"
              value={formik.values.businessEmail}
              onChange={formik.handleChange}
              className={formik.errors.businessEmail && formik.touched.businessEmail ? 'p-invalid' : ''}
            />
            <label htmlFor="businessEmail">Business Email</label>
          </span>
          {formik.errors.businessEmail && formik.touched.businessEmail && (
            <small className="p-error">{formik.errors.businessEmail}</small>
          )}
        </div>
        <div className="p-field mb-4">
          <span className="p-float-label">
            <InputText
              id="password"
              name="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              className={formik.errors.password && formik.touched.password ? 'p-invalid' : ''}
            />
            <label htmlFor="password">Password</label>
          </span>
          {formik.errors.password && formik.touched.password && (
            <small className="p-error">{formik.errors.password}</small>
          )}
        </div>
        <div className="p-field mb-4">
          <span className="p-float-label">
            <InputText
              id="contactNumber"
              name="contactNumber"
              value={formik.values.contactNumber}
              onChange={formik.handleChange}
              className={formik.errors.contactNumber && formik.touched.contactNumber ? 'p-invalid' : ''}
            />
            <label htmlFor="contactNumber">Contact Number</label>
          </span>
          {formik.errors.contactNumber && formik.touched.contactNumber && (
            <small className="p-error">{formik.errors.contactNumber}</small>
          )}
        </div>
        <div className="p-field p-fluid mb-4">
              <ReCAPTCHA
                className="recaptcha"
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={reCaptchaOnChange}
              />
              {/* <ErrorMessage name="recaptcha" component="div" className="p-error" /> */}
            </div>

        <Button type="submit" label="Submit" />
      </form>
    </div>
  );
};

export default SignupTest;
