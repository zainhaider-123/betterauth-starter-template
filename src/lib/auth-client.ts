import { createAuthClient } from "better-auth/react"; // make sure to import from better-auth/react

export const authClient = createAuthClient({
  baseURL: process.env.BASEURL,
  emailAndPassword: {
    enabled: true,
  },
  //you can pass client configuration here
});
