import { FaLinkedinIn } from "react-icons/fa6";
import "./signIn.css";
import { CiTwitter } from "react-icons/ci";
import { FaFacebookF, FaGoogle } from "react-icons/fa";

const SignIn = () => {

  


  return (
    <div className="background-container pt-[148px]">
      <div className="flex items-center gap-5 md:gap-3 lg:gap-0 justify-center mb-8">
        <img
          className="w-8"
          src="https://i.postimg.cc/XqYK1cFJ/fevicon2.png"
          alt=""
        />
        <h1 className=" w-64 text-xl text-[#3d3d47] font-outfit">
          Prime Health Diagnostics
        </h1>
      </div>
      <div className="w-[450px]  mx-auto border p-10 rounded-[10px] border-[#0815420d] bg-[#fff] shadow-2xl shadow-[#0815420d]">
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
          <div>
            <h3
              className="text-[#333] text-[15px] font-outfit mb-[2px] mt-7"
              style={{ lineHeight: "1.5", letterSpacing: ".4px" }}
            >
              Email Address
            </h3>
            <input
              className="border-[#6a71854d] w-full py-3 pl-6 bg-[#f4f5f8] rounded-[5px] font-outfit text-sm text-[#898989] focus:outline-none"
              type="email"
              name="email"
              placeholder="test123@gmail.com"
            />
          </div>

          <div>
            <h3
              className="text-[#333] text-[15px] font-outfit mb-[2px] mt-[18px]"
              style={{ lineHeight: "1.5", letterSpacing: ".4px" }}
            >
              Password
            </h3>
            <input
              className="border-[#6a71854d] w-full py-3 pl-6 bg-[#f4f5f8] rounded-[5px] font-outfit text-sm text-[#898989] focus:outline-none"
              type="password"
              name="email"
              placeholder=""
            />
          </div>
          <div className="flex items-center justify-between">
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
              className="text-[#43b9b2] text-center font-outfit text-sm mt-3"
              style={{ letterSpacing: ".4px" }}
            >
              Forgot password?
            </p>
          </div>
          <input
            className="w-full py-2 bg-[#43b9b2] text-base font-outfit text-[#fff] font-medium rounded-[5px] border border-[#43b9b2] mt-[18px]"
            style={{ letterSpacing: ".3px" }}
            type="button"
            value="Sign In"
          />
          <div
            className="divider text-[#898989] font-outfit text-sm font-normal"
            style={{ lineHeight: "1", letterSpacing: ".6px" }}
          >
            Or Sign In With
          </div>

          <div className="flex items-center gap-4 justify-center mt-5">
            <div>
              <button className="border border-[#6a71854d] rounded-full px-3 py-3 bg-[#43b9b20d] hover:bg-[#43b9b2] text-[#43b9b2] hover:text-[#fff]">
                <FaGoogle className="text-lg" />
              </button>
            </div>
            <div>
              <button className="border border-[#6a71854d] rounded-full px-3 py-3 bg-[#43b9b20d] hover:bg-[#43b9b2] text-[#43b9b2] hover:text-[#fff]">
                <FaLinkedinIn className="text-lg" />
              </button>
            </div>
            <div>
              <button className="border border-[#6a71854d] rounded-full px-3 py-3 bg-[#43b9b20d] hover:bg-[#43b9b2] text-[#43b9b2] hover:text-[#fff]">
                <CiTwitter className="text-lg" />
              </button>
            </div>
            <div>
              <button className="border border-[#6a71854d] rounded-full px-3 py-3 bg-[#43b9b20d] hover:bg-[#43b9b2] text-[#43b9b2] hover:text-[#fff]">
                <FaFacebookF className="text-lg" />
              </button>
            </div>
          </div>
          <p
            className=" text-center font-outfit text-sm mt-5"
            style={{ letterSpacing: ".4px" }}
          >
            <span className="text-[#898989]">Don't have account?  </span>
            <span className="text-[#43b9b2]"> Create Account</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
