import { z } from "zod";

export const Register = z.object({
  Name: z.string(),
  Email: z.string().email({ message: "Please enter a valid email" }),
  Password: z.string().min(8, { message: "Password must be a minimum of 8 characters" }),
  Age: z.number(),
  Gender: z.enum(["male", "female"])
});