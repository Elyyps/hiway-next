import { GetStaticProps } from "next";
import Link from "next/link";
import Layout from "../../components/Layout";
import List from "../../components/List";

type Props = {
  items: any[];
};

const WithStaticProps = ({ items }: Props) => (
  <Layout title="Users List | Next.js + TypeScript Example">
    <h1>Users List</h1>
    <p>
      Example fetching data from inside <code>getStaticProps()</code>.
    </p>
    <p>You are currently on: /users</p>
    {/* <List items={sampleUserData} /> */}
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);

export default WithStaticProps;
