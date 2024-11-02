import React from "react";
import SignInCard from "./_components/sign-in-card";

const SignIn = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-5">
      <h2 className="text-2xl font-bold tracking-tighter">
        Available Providers
      </h2>

      <div>
        <SignInCard />
      </div>
    </main>
  );
};

export default SignIn;
