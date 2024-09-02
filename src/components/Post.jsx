import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/PedroLucasAraujo.png" />

          <div className={styles.authorInfo}>
            <strong>Pedro Lucas Araujo</strong>
            <span>Software Developer</span>
          </div>
        </div>
        <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>
          <p></p>
          <p></p>
          <p>
            <a href="jane.design/doctorcare">jane.design/doctorcare</a>
          </p>
          <p>
            <a href="#">#novoprojeto</a> <a href="#">#nlw</a>{" "}
            <a href="#">#rocketseat</a>
          </p>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
