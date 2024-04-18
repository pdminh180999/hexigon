import Head from "next/head";
import Banner from "./components/banner";
import Feature from "./components/feature";
import Vision from "./components/vision";
import Teams from "./components/teams";
import Partner from "./components/partner";
import Projects from "./components/project";
import FAQ from "./components/faq";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>HEXIGON</title>
        <meta
          name="description"
          content="Hexigon"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner />
      <Feature />
      <Vision />
      <Teams />
      <Partner />
      <Projects />
      <FAQ />
      <Footer />
    </>
  );
}
