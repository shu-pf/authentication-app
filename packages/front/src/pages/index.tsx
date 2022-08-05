import type { ReactElement } from "react";
import Head from "next/head";
import { HomeContainer } from "components/page/home";
import type { NextPageWithLayout } from "./_app";
import { DefaultLayout } from "shared/components/layout";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomeContainer />
      </main>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <DefaultLayout
      title="Personal info"
      subTitle="Basic info, like your name and photo"
      navigation={<div>test</div>}
    >
      {page}
    </DefaultLayout>
  );
};

export default Home;
