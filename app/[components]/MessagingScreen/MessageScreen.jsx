"use client";

import React, { useState } from "react";

import styles from "./screen.module.css";
import Image from "next/image";
import ChatBox from "../ChatBox/ChatBox";
import { IoChatbox } from "react-icons/io5";

function MessageScreen(props) {
  const [activeChat, setActiveChat] = useState(true);

  return (
    <section className={styles.MessageScreen}>
      {!activeChat ? (
        <div className={styles.noActiveChat}>
          <IoChatbox style={{ fontSize: 100 }} />
          <span>Start chating now</span>
        </div>
      ) : (
        <div className={styles.activeChat}>
          <div className={styles.currentChatHeader}>
            <Image
              src="/assets/Profile.jpeg"
              className={styles.currentChatProfileImage}
              width={45}
              height={45}
              alt=""
            />
            <div className={styles.userChatCallToAction}>
              <p className={styles.icon}></p>
              <p className={styles.icon}></p>
              <p className={styles.icon}></p>
            </div>
          </div>
          <div className={styles.currentChatBody}>
            <ChatBox />
          </div>
        </div>
      )}
    </section>
  );
}

export default MessageScreen;
