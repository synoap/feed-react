import { Header } from "./components/Header";
import { Post } from "./components/Post";

import styles from "./App.module.css";

import "./global.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="John Doe" content="This is my first post" />
          <Post author="Oprah" content="This is my second post" />
        </main>
      </div>
    </div>
  );
}
