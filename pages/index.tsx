import Head from 'next/head';

import Layout from '@/src/components/Layout/Layout';
import Banner from '@/src/components/Banner/Banner';

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <Layout home>
        <Banner />
        <div>Content</div>
      </Layout>
    </>
  );
}
