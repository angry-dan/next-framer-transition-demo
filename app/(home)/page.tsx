import Link from "next/link";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.boxes}>
      <div className={styles.box}>
        <Link href={"/case-study/a-client"}>view the case study</Link>
      </div>
      <div className={styles.box}>
        <Link href={"/case-study/b-client"}>view the other case study</Link>
      </div>
    </div>
  );
}
