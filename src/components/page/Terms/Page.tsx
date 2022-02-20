import Head from "next/head";

import { TermsPageView } from "./View";

import type { NextPage } from "next";

export const TermsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>terms</title>
        <meta
          name="description"
          content="Write page description here."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TermsPageView />
    </>
  );
};