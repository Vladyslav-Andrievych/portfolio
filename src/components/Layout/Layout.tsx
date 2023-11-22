import Head from 'next/head';

import styles from './layout.module.scss';

import { robotoRegular } from '@/src/fonts/fonts';

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={`root ${robotoRegular.className}`}>
        <header className={styles.header}></header>
        <main>{children}</main>
        <footer className={styles.footer}></footer>
      </div>
    </>
  );
}
