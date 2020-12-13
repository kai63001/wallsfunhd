import React from "react";
import styles from "../styles/Home.module.scss";
// import Layouter from '../components/Layout'
import dynamic from "next/dynamic";
const Layout = dynamic(import("../components/Layout"));

const Homepage = (props) =>  {
  return (
  <Layout>
    <div className="main">
      <br/><br/><br/>
      <h1 className={styles.slogan+ " center"}>
         Bringing content creators <br/>and their fanss together! 
      </h1>
      <h2 className="center">:asdsadas</h2>
    </div>
  </Layout>
)};


// export async function getStaticProps() {

//   const res = await fetch("http://localhost:3000/api/index/popularApartment")
//   const popular = await res.json()

// return {
//   props: {
//     popular,
//   },
// }
// }



export default Homepage;