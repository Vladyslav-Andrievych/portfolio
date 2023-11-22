import Head from 'next/head';

import Layout from '@/src/components/Layout/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <Layout home>
        <div>Content</div>
      </Layout>
    </>
  );
}
