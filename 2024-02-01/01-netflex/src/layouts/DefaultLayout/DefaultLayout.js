import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import styles from "./DefaultLayout.module.scss";

function DefaultLayout() {
  console.log(1);
  return (
    <div className={styles.layout}>
      <Header />

      <Outlet />
    </div>
  );
}

export default DefaultLayout;
