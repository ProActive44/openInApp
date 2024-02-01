import React from "react";
import logo from "../assets/Ellipse1.png";
import vector from "../assets/Vector1.png";
import github from "../assets/Github1.png";
import twitter from "../assets/Twitter1.png";
import linkedIn from "../assets/LinkedIn1.png";
import discord from "../assets/Discord1.png";
import leftSide from '../assets/LeftSide.png'
import SignInForm from "../components/SignInForm";
import googleSignIn from "../assets/GoogleSignIn.png"
import appleSignIn from '../assets/AppleSignIn.png'

const SignInPage = () => {
  return (
    <div className="flex h-[100%]">
      <div className="flex flex-col bg-cover w-1/2 p-10 " style={{backgroundImage:`url(${leftSide})`}}>
        {/* LOGO */}
        <div
          className="bg-cover flex items-center bg-center w-20 h-20"
          style={{ backgroundImage: `url(${logo})` }}
        >
          <img src={vector}/>
        </div>
        <div className="flex-grow flex items-center justify-center text-white text-6xl font-semibold font-sans font-montserrat">BASE</div>
        <div className="flex items-center justify-center space-x-5 ">
          <img src={github} />
          <img src={twitter} />
          <img src={linkedIn} />
          <img src={discord} />
        </div>
      </div>
      <div className="w-1/2 flex flex-col text-left items-center justify-center">
        <div className="w-[400px] flex flex-col gap-2 font-semibold">
            <h1 className="font-bold">Sign In</h1>
            <p>Sign in to your account</p>
            <div className="flex my-2 gap-1">
                <img src={googleSignIn} className="border rounded cursor-pointer"/>
                <img src={appleSignIn} className="border rounded cursor-pointer"/>
            </div>
        </div>
        <div>
            <SignInForm/>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
