import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link
          href="//db.onlinewebfonts.com/c/32026f24f42d61d41b540609a4cd90a5?family=Marola"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <div className="h-screen bg-studo">
        <h1>Wavy</h1>
      </div>
    </>
  );
};

export default Home;
