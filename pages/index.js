import Head from "next/head";
import About from "../components/About/index";
import Shapes from "../components/Shapes/index";
import Random from "../components/Random/index";
import Grid from "../components/Grid/index";

export default function Home() {
  return (
    <>
      <Head>
        <title>About Me</title>
        <meta name="keywords" content="about" />
      </Head>
      <div>
        <div className="fluid">
          <div className="content">
            <About />
          </div>
        </div>
        <div className="content">
          <Shapes />
        </div>

        <div className="fluid">
          <div className="content">
            <Random />
          </div>
        </div>

        <div className="content">
          <Grid />
        </div>
      </div>
    </>
  );
}
