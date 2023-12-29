import Screen from "./[components]/ListingScreen/Screen";
import MessageScreen from "./[components]/MessagingScreen/MessageScreen";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Screen />
      <MessageScreen />
    </main>
  );
}
