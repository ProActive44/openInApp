import React from "react";

const SignInForm = ({changePage}) => {
  return (
    <div className="text-left p-10 font-semibold w-[400px] bg-white rounded-md">
      <form className="flex flex-col space-y-5">
        <div>
          <label htmlFor="email">Email address</label>
          <br />
          <input
            type="email"
            id="email"
            required
            className="rounded-md bg-gray-200 outline-none py-2 px-2 my-1 w-[100%] focus:bg-gray-300"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            id="password"
            className="rounded-md bg-gray-200 outline-none py-2 px-2 my-1 w-[100%] focus:bg-gray-300"
          />
        </div>

        <p className="text-blue-500 hover:cursor-pointer">Forgot password?</p>

        <div className="flex text-white ">
            <button className="flex-grow bg-[#605BFF]" onClick={changePage}>Sign In</button>
        </div>
      </form>

      <div className="my-5 flex justify-center">
        <span>Don't have an account?<span className="text-blue-500 hover:cursor-pointer"> Register here</span></span>
      </div>
    </div>
  );
};

export default SignInForm;
