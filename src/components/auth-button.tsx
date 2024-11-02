"use client";
import React from "react";
import { Session } from "next-auth";
import Link from "next/link";
import { signOut } from "next-auth/react";

interface Props {
  session: Session | null
}

const AuthButton: React.FC<Props> = ({ session }) => {
  return (
    <div>
      {session?.user ? (
        <button
          className="bg-slate-900 rounded-md px-4 py-2 text-white"
          onClick={() => {
            signOut();
          }}
        >
          Sign Out
        </button>
      ) : (
        <button className="bg-slate-900 rounded-md px-4 py-2 text-white">
          <Link href="/sign-in">Sign In</Link>
        </button>
      )}
    </div>
  );
};

export default AuthButton;
