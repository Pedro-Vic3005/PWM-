import styles from "./page.module.css";

export default function Home() {
  return (
    <div style={{ fontSize: "30px" }} className={styles.titulo}>
      <h1>PVGA3005!</h1>
      <img src="assets/steveimage.jpg" width="350" height="400"/>  
      <pre>
        Uma descrição de um aluno super dedicado
      </pre>

      <p>
        Uma descrição de um aluno bacana
      </p>
      <h2>+ um TITLE</h2>
    </div>
  );
}
0;
