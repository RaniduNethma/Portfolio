"use client";

import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <header className={styles.header} id="header">
        <div className={styles.inner}>
          <h1>This is the Header</h1>
        </div>
      </header>
    </>
  );
}

export default Header;
