import React, { useState } from "react";
import { IoCheckmarkDone, IoCheckmarkSharp } from "react-icons/io5";
import Image from "next/image";

import styles from "./chatbox.module.css";

function ChatBox(props) {
  const [seen, setSeen] = useState(true);
  const [delivered, setDelivered] = useState(true);
  return (
    <section className={styles.messagesbox}>
      <div className={styles.chatbox}>
        <div className={styles.incomingMessage}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse id et
            unde deserunt quam delectus provident? Natus a nobis esse vitae
            dolorem explicabo itaque blanditiis repellendus alias, facere ab.
          </p>
          <span>3:30pm</span>
        </div>
        <div className={styles.incomingImg}>
          <Image src="/assets/Profile.jpeg" width={250} height={250} alt="" />
          <span>3:30pm</span>
        </div>
        <div className={styles.incomingMessage}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse id et
            unde deserunt quam delectus provident? Natus a nobis esse vitae
            dolorem explicabo itaque blanditiis repellendus alias, facere ab.
          </p>
          <span>3:30pm</span>
        </div>
        <div className={styles.outgoingMessage}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
            veritatis, eligendi reiciendis iste eum delectus nisi soluta labore
            facere! Sapiente obcaecati velit ipsum cupiditate aperiam optio
            recusandae hic aliquid!
          </p>
          <div>
            <span>3:30pm</span>
            {delivered ? (
              <IoCheckmarkDone
                style={{ fontSize: 20, color: seen ? "blue" : "black" }}
              />
            ) : (
              <IoCheckmarkSharp style={{ fontSize: 20 }} />
            )}
          </div>
        </div>
        <div className={styles.incomingMessage}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse id et
            unde deserunt quam delectus provident? Natus a nobis esse vitae
            dolorem explicabo itaque blanditiis repellendus alias, facere ab.
          </p>
          <span>3:30pm</span>
        </div>
      </div>
      <div className={styles.textField}>
        <p></p>
        <input type="text" />
        <p></p>
      </div>
    </section>
  );
}

export default ChatBox;
