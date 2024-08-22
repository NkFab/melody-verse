import React from "react";
import AuthLayout from "../components/Layouts/AuthLayout";
import Button from "../components/Button";
import Input from "../components/Input";

const Login: React.FC = () => {
  return (
    <AuthLayout>
      <Input type="email" placeholder="Email" />
      <div className="w-full flex justify-end mt-5">
        <a
          href="#"
          className="font-medium text-sm text-blue-600 hover:underline"
        >
          Forgot password?
        </a>
      </div>

      <Input type="password" placeholder="Password" />

      <Button disabled>Login</Button>
      <div className="flex justify-end mt-2">
        <div className="flex items-center h-5">
          <input
            id="remember"
            type="checkbox"
            value=""
                      className="w-4 h-4 border border-blue-600 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
            required
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
        {" "}
        Not a member yet?{" "}
        <a
          href="#"
          className="font-medium text-blue-600 hover:underline"
        >
          Sign up here
        </a>
      </p>

      {/* <p className="mt-6 text-xs text-gray-600 text-center">
                                    I agree to abide by connectverse's {' '}
                                    <a href="#" className="border-b border-gray-500 border-dotted">
                                        Terms of Service {' '}
                                    </a>
                                    and its {' '}
                                    <a href="#" className="border-b border-gray-500 border-dotted">
                                        Privacy Policy
                                    </a>
                                </p> */}
    </AuthLayout>
  );
};

export default Login;
