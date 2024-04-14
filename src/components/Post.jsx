import styles from "./Post.module.css";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src="https://github.com/synoap.png" />
          <div className={styles.authorInfo}>
            <strong>Eliandro Viana</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="11 de maio de 2022" dateTime="2022-05-11 20:00">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galera</p>
        <p>
          Acabei de subir mais um projeto no meu portifolio. É um projeto que
          fiz para treinar minhas habilidades em react e css. O nome do projeto
          é Feed Project.
        </p>
        <p>
          <a href="https://github.com/synoap/feed-react">
            👉 synoap/feed-react
          </a>
        </p>
        <p>
          <a>#react</a> <a>#react-vite</a> <a>#vite</a> <a>#css</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentaário..." />
        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>
      <div className={styles.commentList}></div>
      <Comment />
      <Comment />
      <Comment />
    </article>
  );
}
