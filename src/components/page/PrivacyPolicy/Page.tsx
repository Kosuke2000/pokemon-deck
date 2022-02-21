import Head from "next/head";

import { PrivacyPolicyPageView } from "./View";

import type { NextPage } from "next";

export const PrivacyPolicyPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>PrivacyPolicy</title>
        <meta
          name="description"
          content="Write page description here."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PrivacyPolicyPageView />
    </>
  );
};