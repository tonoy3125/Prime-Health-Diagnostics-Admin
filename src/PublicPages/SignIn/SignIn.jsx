import "./signIn.css";

const SignIn = () => {
  return (
    <div className="background-container pt-40">
      <div className="flex items-center gap-5 md:gap-3 lg:gap-0 justify-center mb-10">
        <img
          className="w-8"
          src="https://i.postimg.cc/XqYK1cFJ/fevicon2.png"
          alt=""
        />
        <h1 className=" w-64 text-xl text-[#3d3d47] font-outfit">
          Prime Health Diagnostics
        </h1>
      </div>
      <div className="w-[450px]  mx-auto border p-10 rounded-[10px] border-[#0815420d] bg-[#fff]">
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
              <label className="checkbox-label" htmlFor="rememberMe">
                Remember password
              </label>
            </div>
            <p className="text-[#43b9b2] text-center font-outfit text-sm mt-3">
              Forgot password?
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
