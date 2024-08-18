import { FaLinkedinIn } from "react-icons/fa6";
import "./signUp.css";
import { CiTwitter } from "react-icons/ci";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoCloudUploadOutline } from "react-icons/io5";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="background-container pt-[40px]">
      <div className="flex items-center gap-3 md:gap-3 lg:gap-2 justify-center mb-8 ml-6">
        <img
          className="w-8"
          src="https://i.postimg.cc/XqYK1cFJ/fevicon2.png"
          alt=""
        />
        <h1 className=" w-64 text-xl text-[#3d3d47] font-outfit">
          Prime Health Diagnostics
        </h1>
      </div>
      <div className="xs:w-[300px] sm:w-[340px] semi-sm:w-[380px] md:w-[450px]  mx-auto border xs:p-4 semi-sm:p-5 md:p-10 rounded-[10px] border-[#0815420d] bg-[#fff] shadow-2xl shadow-[#0815420d]">
        <h3
          className="text-center font-outfit text-[26px] font-medium  text-[#3d3d47]"
          style={{ lineHeight: "1.2", letterSpacing: ".6px" }}
        >
          Create your account
        </h3>
        <p
          className="text-[#898989] text-center font-outfit text-sm"
          style={{ lineHeight: "1.5", letterSpacing: ".3px" }}
        >
          Enter your personal details to create account
        </p>

        <form>
          <div>
            <h3
              className="text-[#333] text-[15px] font-outfit mb-[2px] mt-7"
              style={{ lineHeight: "1.5", letterSpacing: ".4px" }}
            >
              Your Name
            </h3>
            <div className="flex items-center gap-5">
              <input
                className="border-[#6a71854d] w-full py-3 pl-3 md:pl-6 bg-[#f4f5f8] rounded-[5px] font-outfit text-sm text-[#898989] focus:outline-none"
                type="email"
                name="email"
                placeholder="First Name"
              />
              <input
                className="border-[#6a71854d] w-full py-3 pl-3 md:pl-6 bg-[#f4f5f8] rounded-[5px] font-outfit text-sm text-[#898989] focus:outline-none"
                type="email"
                name="email"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div>
            <h3
              className="text-[#333] text-[15px] font-outfit mb-[2px] mt-[18px]"
              style={{ lineHeight: "1.5", letterSpacing: ".4px" }}
            >
              Email Address
            </h3>
            <input
              className="border-[#6a71854d] w-full py-3 pl-3 md:pl-6 bg-[#f4f5f8] rounded-[5px] font-outfit text-sm text-[#898989] focus:outline-none"
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
          <div>
            <h3
              className="text-[#333] text-[15px] font-outfit mb-[2px] mt-[18px]"
              style={{ lineHeight: "1.5", letterSpacing: ".4px" }}
            >
              Upload Picture
            </h3>
            <div className="flex items-center justify-center w-full">
              {uploadedImage ? (
                <img
                  src={uploadedImage}
                  alt="Uploaded"
                  className="w-full h-24 object-cover rounded-[5px]"
                />
              ) : (
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-24 border border-[#6a71854d] border-dashed rounded-[5px] cursor-pointer bg-[#f4f5f8] dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6 font-outfit">
                    <IoCloudUploadOutline className="text-4xl"></IoCloudUploadOutline>
                    <p className="mb-2 text-sm text-[#898989] dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-[#898989] dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                </label>
              )}
            </div>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="rememberMe" />
            <label className="custom-checkbox" htmlFor="rememberMe"></label>
            <label
              className="checkbox-label"
              htmlFor="rememberMe"
              style={{ letterSpacing: ".4px" }}
            >
              Agree With
              <span className="text-[#43b9b2]"> Privacy Policy</span>
            </label>
          </div>
          <input
            className="w-full py-2 bg-[#43b9b2] text-base font-outfit text-[#fff] font-medium rounded-[5px] border border-[#43b9b2] mt-[18px]"
            style={{ letterSpacing: ".3px" }}
            type="button"
            value="Create Account"
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
            <span className="text-[#898989]">Already have an account? </span>
            <Link to="/admin/signin">
              <span className="text-[#43b9b2] cursor-pointer"> Sign in</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
