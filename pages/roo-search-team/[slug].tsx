import Bio from "@/components/Bio/Bio";
import Head from "next/head";

const BioPage = () => {
  return (
    <>
      <Head>
        <title>Roo Search - Bio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Bio bgChange={false} />
    </>
  );
};

export default BioPage;
