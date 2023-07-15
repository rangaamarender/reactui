import React, { useRef, useState } from 'react';
import { useFormik } from 'formik';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser, checkEmailAvailability, sendResetPasswordEmail } from '../../services/LoginServices';
import RequiredLabel from '../RequiredLabel';
import { Messages } from 'primereact/messages';
import LoginImage from '../../../src/assets/LoginImage.jpg';
import { Password } from 'primereact/password';
import * as Yup from 'yup';

const Login = () => {
  const navigate = useNavigate();
  const messages = useRef(null);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const handleSubmit = async (values) => {
    try {
      const isAuthenticated = await loginUser(values.email, values.password);
      console.log(isAuthenticated);
      if (isAuthenticated) {
        localStorage.setItem('token', '123');
        navigate('/dashboard');
      } else {
        messages.current.show({ severity: 'error', detail: 'Invalid Email or Password...' });
      }
    } catch (error) {
      console.error('Failed to log in:', error);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handleForgotPasswordSubmit = async (values) => {
    try {
      const isEmailAvailable = await checkEmailAvailability(values.email);
      if (isEmailAvailable) {
        // Send email to the entered email address
        await sendResetPasswordEmail(values.email);
        messages.current.show({ severity: 'success', detail: 'Password reset email sent!' });
      } else {
        messages.current.show({ severity: 'error', detail: 'Email not found in user data' });
      }
    } catch (error) {
      console.error('Failed to send password reset email:', error);
    }

    formik.resetForm();
    setShowForgotPassword(false);
  };


  const handleForgotPasswordClick = () => {
    formik.resetForm();
    setShowForgotPassword(true);
  };

  return (
    <>
      <div className="container-fluid d-flex vh-100 align-items-center">
        <div className="login-image col-md-6 d-none d-md-block">
          <img src={LoginImage} alt="Login" className="w-100 vh-100" />
        </div>
        <div className="login-form col-md-6 col-sm-12 d-flex justify-content-center align-items-center vh-100">
          {!showForgotPassword ? (
            <form onSubmit={formik.handleSubmit} className="w-100 ps-5 pe-5">
              <div className=' p-fluid flex flex-wrap gap-3 ps-5 pe-5'>
                <h2 className="text-center">EMS</h2>
                <div className="flex-auto p-fluid pb-2">
                  <Messages ref={messages} />
                  <RequiredLabel label="Email" required />
                  <InputText
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className={formik.errors.email && formik.touched.email ? 'p-invalid' : ''}
                  />
                  {formik.errors.email && formik.touched.email && (
                    <small className="p-error">{formik.errors.email}</small>
                  )}
                </div>
                <div className="flex-auto pb-2">
                  <RequiredLabel label="Password" required />
                  <Password
                    toggleMask
                    id="password"
                    name="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    className={formik.errors.password && formik.touched.password ? 'p-invalid' : ''}
                  />
                  {formik.errors.password && formik.touched.password && (
                    <small className="p-error">{formik.errors.password}</small>
                  )}
                </div>

                <div className="flex-auto pb-2">
                  <div className="p-field-checkbox float-start">
                    <Checkbox
                      className=""
                      inputId="rememberMe"
                      name="rememberMe"
                      onChange={formik.handleChange}
                      checked={formik.values.rememberMe}
                    />
                    <label htmlFor="rememberMe" className="p-checkbox-label ps-1">
                      Remember me
                    </label>
                  </div>
                  <div className="float-end">
                    <Link onClick={handleForgotPasswordClick}>Forgot password?</Link>
                  </div>
                </div>
                <div className="p-fluid pb-3 mt-4">
                  <Button type="submit" label="Login" className="p-button-success" />
                </div>
                <div className="p-fluid flex flex-wrap">
                  <div className="text-center">
                    Don't have an account?
                    <Link to="/signup" className=""> Apply Now</Link>
                  </div>
                </div>
              </div>
            </form>
          ) : (
            <form onSubmit={formik.handleSubmit} className="w-100 ps-5 pe-5">
              <h2 className="text-center">Forgot your password?</h2>
              <p className="text-center">We'll help you reset it and get back on track </p>

              <div className=' p-fluid flex flex-wrap gap-3 ps-5 pe-5'>
                <div className="flex-auto pb-3">
                  <RequiredLabel label="Email" required />
                  <InputText
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className={formik.errors.email && formik.touched.email ? 'p-invalid' : ''}
                  />
                  {formik.errors.email && formik.touched.email && (
                    <small className="p-error">{formik.errors.email}</small>
                  )}
                </div>
                <div className="flex-auto pb-2 mt-2">
                  <Button type="submit" label="Reset Password" className="p-button-success" />
                </div>
                <div className="flex-auto flex flex-wrap">
                  <div className="text-center">
                    Already have an account?
                    <Link onClick={() => setShowForgotPassword(false)} className=""> Login</Link>
                  </div>
                </div>
                <Messages ref={messages} />
              </div>

            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
