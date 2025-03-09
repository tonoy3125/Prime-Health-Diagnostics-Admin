/* eslint-disable react/no-unescaped-entities */
import "./signIn.css";
import { useState } from "react";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="background-container pt-[221px]">
      {/* Logo */}
      <div className="flex items-center gap-3 md:gap-3 lg:gap-2 justify-center mb-8 ">
        <img
          className="w-[105px]"
          src="https://i.ibb.co.com/1fgpqdPj/logo-1.png"
          alt=""
        />
        {/* <h1 className=" w-64 text-xl text-[#3d3d47] font-outfit">Edmin</h1> */}
      </div>
      {/* Sign in Border Container */}
      <div className="xs:w-[300px] sm:w-[340px] semi-sm:w-[380px] md:w-[450px]  mx-auto border xs:p-4 semi-sm:p-5 md:p-10 rounded-[10px] border-[#0815420d] bg-[#fff] shadow-2xl shadow-[#0815420d]">
        <h3
          className="text-center font-outfit text-[26px] font-medium  text-[#3d3d47]"
          style={{ lineHeight: "1.2", letterSpacing: ".6px" }}
        >
          Sign in to account
        </h3>
        <p
          className="text-[#898989] text-center font-outfit text-sm"
          style={{ lineHeight: "1.5", letterSpacing: ".3px" }}
        >
          Enter your email & password to login
        </p>

        <form>
          {/* Email */}
          <div>
            <h3
              className="text-[#333] text-[15px] font-outfit mb-[2px] mt-7"
              style={{ lineHeight: "1.5", letterSpacing: ".4px" }}
            >
              Email Address
            </h3>
            <input
              className="border-[#6a71854d] w-full py-3 pl-3 md:pl-6 bg-[#f4f5f8] rounded-[5px] font-outfit text-sm text-[#898989] focus:outline-none"
              type="email"
              name="email"
              placeholder="Test@gmail.com"
            />
          </div>

          {/* Password */}

          <div>
            <h3
              className="text-[#333] text-[15px] font-outfit mb-[2px] mt-[18px]"
              style={{ lineHeight: "1.5", letterSpacing: ".4px" }}
            >
              Password
            </h3>
            <div className="relative">
              <input
                className="border-[#6a71854d] w-full py-3 pl-3 md:pl-6 bg-[#f4f5f8] rounded-[5px] font-outfit text-sm text-[#898989] focus:outline-none"
                type={showPassword ? "text" : "password"}
                name="password"
                id=""
                placeholder="Enter your password"
              />
              <span
                className="absolute right-4 md:right-4 top-3 rtl:left-0 rtl:right-auto "
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              >
                {showPassword ? (
                  <p className="text-sm font-outfit text-[#43b9b2] cursor-pointer">
                    hide
                  </p>
                ) : (
                  <p className="text-sm font-outfit text-[#43b9b2] cursor-pointer">
                    show
                  </p>
                )}
              </span>
            </div>
          </div>
          {/* Remember Password and Forget password */}
          <div className="flex xs:flex-col sm:flex-row sm:items-center justify-between">
            <div className="checkbox-container">
              <input type="checkbox" id="rememberMe" />
              <label className="custom-checkbox" htmlFor="rememberMe"></label>
              <label
                className="checkbox-label"
                htmlFor="rememberMe"
                style={{ letterSpacing: ".4px" }}
              >
                Remember password
              </label>
            </div>
            <p
              className="text-[#43b9b2] text-end sm:text-center font-outfit text-sm mt-3"
              style={{ letterSpacing: ".4px" }}
            >
              Forgot password?
            </p>
          </div>
          {/* Sign in Button */}
          <input
            className="w-full py-2 bg-[#43b9b2] text-base font-outfit text-[#fff] font-medium rounded-[5px] border border-[#43b9b2] mt-[18px]"
            style={{ letterSpacing: ".3px" }}
            type="button"
            value="Sign In"
          />
        </form>
      </div>
    </div>
  );
};

export default SignIn;
