"use client";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa6";
import { loginWithGoogle, loginWithLinkedin } from "../action";
import Recaptcha from "./recaptcha";

const SignInCard: React.FC = () => {
  const [isHuman, setIsHuman] = useState<boolean>(false);

  return (
    <div className="parent rounded-md border p-4">
      {/* reCAPTCHA Section */}
      <div className="pb-5">
        <Recaptcha setIsHuman={setIsHuman} />
      </div>

      {/* Authentication Buttons */}
      <div className="flex flex-col items-center gap-4">
        <button
          disabled={!isHuman}  // Enabled only when isHuman is true
          onClick={loginWithGoogle}
          className={`rounded-md border px-6 py-2 ${!isHuman ? "cursor-not-allowed opacity-50" : ""}`}
        >
          <div className="flex items-center gap-4">
            <FcGoogle size={24} />
            <span>Continue with Google</span>
          </div>
        </button>

        <button
          disabled={!isHuman}  // Enabled only when isHuman is true
          onClick={loginWithLinkedin}
          className={`rounded-md border px-6 py-2 ${!isHuman ? "cursor-not-allowed opacity-50" : ""}`}
        >
          <div className="flex items-center gap-4">
            <FaLinkedin size={24} className="text-blue-500" />
            <span>Continue with LinkedIn</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default SignInCard;
