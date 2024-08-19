/* eslint-disable react/no-unknown-property */
import { IoMdMenu } from "react-icons/io";
import { RiSearch2Line } from "react-icons/ri";
import "./DashBoardNavbar.css";

const DashBoardNavbar = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-3 md:gap-3 lg:gap-2">
            <img
              className="w-8"
              src="https://i.postimg.cc/XqYK1cFJ/fevicon2.png"
              alt=""
            />
            <h1 className="text-xl text-[#3d3d47] font-outfit">Prime Admin</h1>
          </div>
          <div className="border border-[#F4F5F8] p-2 bg-[#F4F5F8]">
            <IoMdMenu className="text-3xl" />
          </div>
        </div>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <RiSearch2Line className="text-[#3d3d47] text-xl" />
          </span>
          <input
            className="bg-[#F4F5F8] w-[525px] border-[#6a71854d] text-[#212529] py-[14px] pl-10 pr-5 font-outfit text-sm focus:outline-none"
            type="text"
            placeholder="Search anything"
          />
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div className="border border-[#F4F5F8] pt-[4px] pb-[4px] pl-[6px] pr-[6px] bg-[#F4F5F8]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#3D3D47"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
          >
            <g id="Dark">
              <path d="M12.741,20.917a9.389,9.389,0,0,1-1.395-.105,9.141,9.141,0,0,1-1.465-17.7,1.177,1.177,0,0,1,1.21.281,1.273,1.273,0,0,1,.325,1.293,8.112,8.112,0,0,0-.353,2.68,8.266,8.266,0,0,0,4.366,6.857,7.628,7.628,0,0,0,3.711.993,1.242,1.242,0,0,1,.994,1.963h0A9.148,9.148,0,0,1,12.741,20.917ZM10.261,4.05a.211.211,0,0,0-.065.011,8.137,8.137,0,1,0,9.131,12.526h0a.224.224,0,0,0,.013-.235.232.232,0,0,0-.206-.136A8.619,8.619,0,0,1,14.946,15.1a9.274,9.274,0,0,1-4.883-7.7,9.123,9.123,0,0,1,.4-3.008.286.286,0,0,0-.069-.285A.184.184,0,0,0,10.261,4.05Z" />
            </g>
          </svg>
        </div>
        <div className="border border-[#F4F5F8] pt-[4px] pb-[4px] pl-[6px] pr-[6px] bg-[#F4F5F8]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
          </svg>
        </div>
        <div className="border border-[#F4F5F8] pt-[4px] pb-[4px] pl-[6px] pr-[6px] bg-[#F4F5F8]">
          <span className="text-[#3d3d47] font-medium">EN</span>
        </div>
        <div className="border border-[#F4F5F8] pt-[4px] pb-[4px] pl-[6px] pr-[6px] bg-[#F4F5F8]">
          <svg
            className="ring-animation"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            fill="#3d3d47"
            height="24px"
            width="24px"
            version="1.1"
            id="Layer_1"
            viewBox="0 0 512.001 512.001"
            xml:space="preserve"
          >
            <g>
              <g>
                <path d="M504.45,365.901c-60.22-60.237-69.282-90.462-69.282-186.701c0-98.97-80.213-179.2-179.166-179.2    S76.836,80.231,76.836,179.2c0,51.891-1.382,71.262-8.525,95.044c-8.883,29.628-27.119,57.993-60.766,91.657    C-8.574,382.029,2.844,409.6,25.645,409.6h142.054l-1.289,12.8c0,49.485,40.107,89.6,89.583,89.6    c49.476,0,89.583-40.115,89.583-89.6l-1.289-12.8h142.063C509.16,409.6,520.578,382.029,504.45,365.901z M256.01,486.4    c-35.337,0-63.991-28.663-63.991-64l1.289-12.8h125.389l1.306,12.8C320.002,457.737,291.347,486.4,256.01,486.4z M25.653,384    c76.783-76.8,76.783-128,76.783-204.8c0-84.821,68.753-153.6,153.566-153.6s153.566,68.779,153.574,153.6    c0,76.8,0,128,76.783,204.8H25.653z" />
              </g>
            </g>
          </svg>
        </div>

        <div className="border border-[#F4F5F8] pt-[4px] pb-[4px] pl-[6px] pr-[6px] bg-[#F4F5F8]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z"
              stroke="#3d3d47"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="border border-[#F4F5F8] pt-[4px] pb-[4px] pl-[6px] pr-[6px] bg-[#F4F5F8]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M3.79424 12.0291C4.33141 9.34329 4.59999 8.00036 5.48746 7.13543C5.65149 6.97557 5.82894 6.8301 6.01786 6.70061C7.04004 6 8.40956 6 11.1486 6H12.8515C15.5906 6 16.9601 6 17.9823 6.70061C18.1712 6.8301 18.3486 6.97557 18.5127 7.13543C19.4001 8.00036 19.6687 9.34329 20.2059 12.0291C20.9771 15.8851 21.3627 17.8131 20.475 19.1793C20.3143 19.4267 20.1267 19.6555 19.9157 19.8616C18.7501 21 16.7839 21 12.8515 21H11.1486C7.21622 21 5.25004 21 4.08447 19.8616C3.87342 19.6555 3.68582 19.4267 3.5251 19.1793C2.63744 17.8131 3.02304 15.8851 3.79424 12.0291Z"
              stroke="#3D3D47"
              stroke-width="1.5"
            />
            <circle cx="15" cy="9" r="1" fill="#1C274C" />
            <circle cx="9" cy="9" r="1" fill="#1C274C" />
            <path
              d="M9 6V5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5V6"
              stroke="#3D3D47"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div className="border border-[#F4F5F8] pt-[4px] pb-[4px] pl-[6px] pr-[6px] bg-[#F4F5F8]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              opacity="0.4"
              d="M17.2678 8.56104L13.0024 11.9953C12.1952 12.6282 11.0636 12.6282 10.2564 11.9953L5.95435 8.56104"
              stroke="#3D3D47"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.88787 3H16.3158C17.6752 3.01525 18.969 3.58993 19.896 4.5902C20.823 5.59048 21.3022 6.92903 21.222 8.29412V14.822C21.3022 16.1871 20.823 17.5256 19.896 18.5259C18.969 19.5262 17.6752 20.1009 16.3158 20.1161H6.88787C3.96796 20.1161 2 17.7407 2 14.822V8.29412C2 5.37545 3.96796 3 6.88787 3Z"
              stroke="#3D3D47"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="flex items-center gap-3">
          <img src="https://i.ibb.co/SnFnBjD/download-1.png" alt="" />
          <div>
            <h3
              className="text-base font-medium text-[#3d3d47] font-outfit"
              style={{ lineHeight: "1.4", letterSpacing: ".6px" }}
            >
              Wade Warren
            </h3>
            <h5 className="text-xs font-normal font-outfit">UI Designer</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardNavbar;
