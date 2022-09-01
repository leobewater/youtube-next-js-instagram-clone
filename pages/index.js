import Head from 'next/head';
import Header from '../components/Header';
import Feed from '../components/Feed';
import Modal from '../components/Modal';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Instagram 2.0 Youtube</title>
        <meta name="description" content="Instagram Clone with Next.js Tutorial" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Feed />
      <Modal />
    </div>
  );
}
