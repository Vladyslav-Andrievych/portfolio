import Head from 'next/head';

import Layout from '@/src/components/Layout/Layout';
import Banner from '@/src/components/Banner/Banner';
import TechStack from '@/src/components/TechStack/TechStack';
import About from '@/src/components/About/About';

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <Layout home>
        <Banner />
        <TechStack />
        <div style={{ backgroundColor: 'black', color: 'white' }}>Content</div>
        <About />
      </Layout>
    </>
  );
}
