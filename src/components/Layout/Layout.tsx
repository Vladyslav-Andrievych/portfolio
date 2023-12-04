import Head from 'next/head';
import Image from 'next/image';

import styles from './layout.module.scss';

import { robotoRegular } from '@/src/fonts/fonts';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

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
        <header className={styles.header}>
          <Image
            src="/images/logo.png"
            height={45}
            width={45}
            alt="logo"
            className={styles.headerLogo}
          />
          <FontAwesomeIcon
            icon={faPenToSquare}
            className={styles.headerEditIcon}
          />
        </header>
        <main>{children}</main>
        <footer className={styles.footer}></footer>
      </div>
    </>
  );
}
