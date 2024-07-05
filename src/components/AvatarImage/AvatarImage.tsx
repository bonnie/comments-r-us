import Image from "next/image";
import React from "react";

import { User } from "@/types";

import styles from "./AvatarImage.module.css";

export interface AvatarImageProps {
  user: User;
}

function AvatarImage({ user }: AvatarImageProps) {
  const { name, imageName } = user;

  return (
    <Image
      width={52}
      height={52}
      alt={`${name} avatar`}
      src={`/avatars/${imageName}`}
      className={styles.iconButton}
    />
  );
}

export default AvatarImage;
