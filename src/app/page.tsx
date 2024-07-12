import Image from "next/image";
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
          <Link href="/3-suspense-page">suspense (page)</Link>
        </li>
        <li>
          <Link href="/4-suspense-component">suspense (component)</Link>
        </li>
        <li>
          <Link href="/5-server-action">server action</Link>
        </li>
        <li>
          <Link href="/6-server-actions-hooks">server actions with hooks</Link>
        </li>
      </ol>
      <div className={styles.qr}>
        <h2>QR for GitHub repo</h2>
        <Image
          alt="qr code for https://github.com/bonnie/comments-r-us"
          src="/github-repo-qr.png"
          height={240}
          width={240}
        />
      </div>
    </div>
  );
}
