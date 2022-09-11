import Head from "next/head";
import { AuthLayout } from "shared/components/layout/AuthLayout";
import { useAuth0 } from "@auth0/auth0-react";
import { NextPage } from "next/types";

const SignUp: NextPage = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AuthLayout>
        <button
          onClick={() =>
            loginWithRedirect({
              audience: "https://example-authentication-app-server",
            })
          }
        >
          Log In
        </button>
      </AuthLayout>
    </>
  );
};

export default SignUp;
