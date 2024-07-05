import Link from "next/link";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <ol>
        <li>
          <Link href="/1-client-only">client only</Link>
        </li>
        <li>
          <Link href="/2-server-only">server only</Link>
        </li>
        <li>
          <Link href="/3-server-action">server action</Link>
        </li>
        <li>
          <Link href="/4-suspense">suspense</Link>
        </li>
        <li>
          <Link href="/5-server-actions-hooks">server actions with hooks</Link>
        </li>
      </ol>
    </div>
  );
}
