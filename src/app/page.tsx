import Link from "next/link";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <ol>
        <li>
          <Link href="/client-only">client only</Link>
        </li>
        <li>
          <Link href="/server-only">server only</Link>
        </li>
        <li>
          <Link href="/server-action">server action</Link>
        </li>
        <li>
          <Link href="/suspense">suspense</Link>
        </li>
        <li>
          <Link href="/server-actions-hooks">server actions with hooks</Link>
        </li>
      </ol>
    </div>
  );
}
