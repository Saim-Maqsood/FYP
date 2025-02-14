"use client"
import { signIn } from "next-auth/react"
 
export default function SignIn() {
  return <button onClick={() => signIn()} className="bg-white px-2 py-2 rounded-md">Sign In</button>
}