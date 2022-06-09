import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import Link from "next/link";
import styles from "../styles/Home.module.css";

type HomeProps = {
  text: string;
};

const Home: NextPage<HomeProps> = ({ text }) => {
  return (
    <div className={styles.container}>
      <h1>This is the sub-domain application</h1>
      <p>Text param: {text}</p>

      <Link href="/">
        <a>Go back to main domain</a>
      </Link>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return {
    props: {
      text: query.text,
    },
  };
};

export default Home;
