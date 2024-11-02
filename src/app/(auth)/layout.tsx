import React from "react";
import { redirect } from "next/navigation";
import Session from "@/lib/session";

interface Props {
  children: React.ReactNode;
}

const AuthLayout: React.FC<Props> = async ({ children }) => {
  const session = await Session();
  const user = session?.user;

  if (user) {
    redirect("/");
  }

  return <>{children}</>;
};

export default AuthLayout;
