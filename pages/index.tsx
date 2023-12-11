import Head from 'next/head';

import Layout from '@/src/components/Layout/Layout';
import Banner from '@/src/components/Banner/Banner';
import TechStack from '@/src/components/TechStack/TechStack';

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <Layout home>
        <Banner />
        <TechStack />
        <div>Content</div>
      </Layout>
    </>
  );
}
