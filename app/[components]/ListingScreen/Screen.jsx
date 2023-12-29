import React from "react";
import Image from "next/image";

import styles from "./screen.module.css";

function Screen(props) {
  return (
    <section className={styles.listScreen}>
      <div className={styles.listScreenHeadingDisplay}>
        <Image
          width={45}
          height={45}
          className={styles.listImage}
          src="/assets/Profile.jpeg"
          alt=""
        />
        <p className={styles.icon}></p>
        <p className={styles.icon}></p>
        <p className={styles.icon}></p>
        <p className={styles.icon}></p>
      </div>
      <div className={styles.activeUsersContainer}>
        <div className={styles.userContainer}>
          <Image
            width={45}
            height={45}
            className={styles.activeUserImage}
            src="/assets/Profile.jpeg"
            alt=""
          />
          <div>
            <h4>Mario jeremiah12345</h4>
            <p>Lorem ipsum dolor sit amet conse .</p>
          </div>
        </div>
        <div className={styles.userContainer}>
          <Image
            width={45}
            height={45}
            className={styles.activeUserImage}
            src="/assets/Profile.jpeg"
            alt=""
          />
          <div>
            <h4>Mario jeremiah</h4>
            <p>Lorem ipsum dolor sit amet conse .</p>
          </div>
        </div>
        <div className={styles.userContainer}>
          <Image
            width={45}
            height={45}
            className={styles.activeUserImage}
            src="/assets/Profile.jpeg"
            alt=""
          />
          <div>
            <h4>Mario jeremiah</h4>
            <p>Lorem ipsum dolor sit amet conse .</p>
          </div>
        </div>
        <div className={styles.userContainer}>
          <Image
            width={45}
            height={45}
            className={styles.activeUserImage}
            src="/assets/Profile.jpeg"
            alt=""
          />
          <div>
            <h4>Mario jeremiah</h4>
            <p>Lorem ipsum dolor sit amet conse .</p>
          </div>
        </div>
        <div className={styles.userContainer}>
          <Image
            width={45}
            height={45}
            className={styles.activeUserImage}
            src="/assets/Profile.jpeg"
            alt=""
          />
          <div>
            <h4>Mario jeremiah</h4>
            <p>Lorem ipsum dolor sit amet conse .</p>
          </div>
        </div>
        <div className={styles.userContainer}>
          <Image
            width={45}
            height={45}
            className={styles.activeUserImage}
            src="/assets/Profile.jpeg"
            alt=""
          />
          <div>
            <h4>Mario jeremiah</h4>
            <p>Lorem ipsum dolor sit amet conse .</p>
          </div>
        </div>
        <div className={styles.userContainer}>
          <Image
            width={45}
            height={45}
            className={styles.activeUserImage}
            src="/assets/Profile.jpeg"
            alt=""
          />
          <div>
            <h4>Mario jeremiah</h4>
            <p>Lorem ipsum dolor sit amet conse .</p>
          </div>
        </div>
        <div className={styles.userContainer}>
          <Image
            width={45}
            height={45}
            className={styles.activeUserImage}
            src="/assets/Profile.jpeg"
            alt=""
          />
          <div>
            <h4>Mario jeremiah</h4>
            <p>Lorem ipsum dolor sit amet conse .</p>
          </div>
        </div>
        <div className={styles.userContainer}>
          <Image
            width={45}
            height={45}
            className={styles.activeUserImage}
            src="/assets/Profile.jpeg"
            alt=""
          />
          <div>
            <h4>Mario jeremiah</h4>
            <p>Lorem ipsum dolor sit amet conse .</p>
          </div>
        </div>
        <div className={styles.userContainer}>
          <Image
            width={50}
            height={50}
            className={styles.activeUserImage}
            src="/assets/Profile.jpeg"
            alt=""
          />
          <div>
            <h4>Mario jeremiah</h4>
            <p>Lorem ipsum dolor sit amet conse .</p>
          </div>
        </div>
        <div className={styles.userContainer}>
          <Image
            width={45}
            height={45}
            className={styles.activeUserImage}
            src="/assets/Profile.jpeg"
            alt=""
          />
          <div>
            <h4>Mario jeremiah</h4>
            <p>Lorem ipsum dolor sit amet conse .</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Screen;
