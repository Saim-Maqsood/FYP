"use client";

import { signIn } from "next-auth/react";

export default function SignIn() {
  const handleClick = () => {
    signIn("google");
  };

  return (
    <button onClick={handleClick} className="bg-black text-white px-4 py-2 rounded-md">
      Sign In
    </button>
  );
}