import Head from "next/head";
import { SignUpPage } from "components/page/auth/sign-up";
import { AuthLayout } from "shared/components/layout/AuthLayout";
import { NextPage } from "next/types";

const SignUp: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AuthLayout>
        <SignUpPage />
      </AuthLayout>
    </>
  );
};

export default SignUp;
