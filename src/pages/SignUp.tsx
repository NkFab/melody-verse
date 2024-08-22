import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from "react-router-dom";
import AuthLayout from "../components/Layouts/AuthLayout";
import Button from "../components/Button";
import Input from "../components/Input";


const validationSchema = Yup.object({
    fullName: Yup.string().required('Full name is required'),
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const SignUp: React.FC = () => {
    return (
        <AuthLayout>
            <Formik
                initialValues={{ fullName: '', username: '', email: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    
                    console.log(values);
                    setSubmitting(false);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="mb-5">
                            <Field
                                type="text"
                                name="fullName"
                                placeholder="Full name"
                                as={Input}
                            />
                            <ErrorMessage name="fullName" component="div" className="text-red-500 text-sm" />
                        </div>

                        <div className="mb-5">
                            <Field
                                type="text"
                                name="username"
                                placeholder="Username"
                                as={Input}
                            />
                            <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />
                        </div>

                        <div className="mb-5">
                            <Field
                                type="email"
                                name="email"
                                placeholder="Email"
                                as={Input}
                            />
                            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                        </div>

                        <div className="mb-5">
                            <Field
                                type="password"
                                name="password"
                                placeholder="Password"
                                as={Input}
                            />
                            <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
                        </div>

                        <Button type="submit" disabled={isSubmitting}>Sign up</Button>
                    </Form>
                )}
            </Formik>

            <p className="mt-6 text-gray-600 text-center text-sm">
                Already a member?{' '}
                <Link
                    to="/"
                    className="font-medium text-blue-600 hover:underline"
                >
                    Login here
                </Link>
            </p>

            <p className="mt-6 text-xs text-gray-600 text-center">
                By signing up, I agree to abide by connectverse's{' '}
                <a href="#" className="border-b border-gray-500 border-dotted">
                    Terms of Service{' '}
                </a>
                and its{' '}
                <a href="#" className="border-b border-gray-500 border-dotted">
                    Privacy Policy
                </a>
            </p>
        </AuthLayout>
    );
};

export default SignUp;
