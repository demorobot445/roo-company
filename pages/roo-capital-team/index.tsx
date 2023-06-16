import Carousel from "@/components/Carousel/Carousel";
import Head from "next/head";

const RooCapitalTeam = () => {
  return (
    <>
      <Head>
        <title>Roo Capital - Team</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Carousel cardType="team" bgChange />
    </>
  );
};

export default RooCapitalTeam;
