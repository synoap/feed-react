import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/synoap.png" />
      <div className={styles.commentContent}>
        <div className={styles.commentBox}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Eliandro Viana</strong>
              <time title="11 de maio de 2022" dateTime="2022-05-11 20:00">
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>

          <p>Muito bom Eliandro, parabéns</p>
        </div>
        <footer>
          <button title="Like">
            <ThumbsUp size={18} />
            Like
            <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
