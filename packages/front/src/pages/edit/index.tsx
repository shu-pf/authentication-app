import type { ReactElement } from "react";
import Head from "next/head";
import type { NextPageWithLayout } from ".././_app";
import { SimpleLayout } from "shared/components/layout";
import { HeaderNavigation } from "components/layout/HeaderNavigation";
import { TextButton } from "shared/components/ui";
import { EditPage } from "components/page/edit";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <EditPage />
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <SimpleLayout
      header={<TextButton iconName="AngleLeft">Back</TextButton>}
      navigation={<HeaderNavigation />}
    >
      {page}
    </SimpleLayout>
  );
};

export default Home;
