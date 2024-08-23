import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from "react-router-dom";
import AuthLayout from "../components/Layouts/AuthLayout";
import Button from "../components/Button";
import Input from "../components/Input";

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const Login: React.FC = () => {
    return (
        <AuthLayout>
            <Formik
                initialValues={{ email: '', password: '', remember: false }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                 
                    console.log(values, '[][][][');
                    setSubmitting(false);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="">
                            <Field
                                type="email"
                                name="email"
                                placeholder="Email"
                                as={Input}
                            />
                            <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />
                        </div>

                        <div className="w-full flex justify-end mt-5">
                            <a
                                href="#"
                                className="font-medium text-sm text-blue-600 hover:underline"
                            >
                                Forgot password?
                            </a>
                        </div>

                        <div className="">
                            <Field
                                type="password"
                                name="password"
                                placeholder="Password"
                                as={Input}
                            />
                            <ErrorMessage name="password" component="p" className="text-red-500 text-sm" />
                        </div>

                        <Button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Logging in...': 'Login'}</Button>

                        <div className="flex justify-end mt-2">
                            <div className="flex items-center h-5">
                                <Field
                                    type="checkbox"
                                    name="remember"
                                    id="remember"
                                    className="w-4 h-4 border border-blue-600 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                                />
                            </div>
                            <label
                                htmlFor="remember"
                                className="ms-2 text-sm font-medium text-gray-600"
                            >
                                Remember me
                            </label>
                        </div>

                        <p className="mt-6 text-gray-600 text-center text-sm">
                            Not a member yet?{' '}
                            <Link
                                to="/signup"
                                className="font-medium text-blue-600 hover:underline"
                            >
                                Sign up here
                            </Link>
                        </p>
                    </Form>
                )}
            </Formik>
        </AuthLayout>

    );
};

export default Login;
