import Head from "next/head";
import dynamic from "next/dynamic";
const Navbar = dynamic(import("./Navbar"))
const Header = dynamic(import("./Header"));

const Layout = (props) => (
  <>
    <Head>
      <link rel="icon" type="image/svg+xml" href="/favicon2.svg" />
    </Head>
    <Header title={props.title} des={props.des} />
    <Navbar/>
    <main>{props.children}</main>
  </>
);

export default Layout