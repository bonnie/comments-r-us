import React from 'react';

import styles from './Separator.module.css';

export interface SeparatorProps {}

function Separator({}: SeparatorProps) {
  return <div className={styles.wrapper}></div>;
}

export default Separator;
