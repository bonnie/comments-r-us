"use client";

import * as Popover from "@radix-ui/react-popover";
import dayjs from "dayjs";
import { X } from "lucide-react";
import Image from "next/image";
import React from "react";

import { User } from "@/types";

import styles from "./Avatar.module.css";

export interface AvatarProps {
  user: User;
}

function Avatar({ user }: AvatarProps) {
  const { name, joinedAt, imageName } = user;

  // reference: https://www.radix-ui.com/primitives/docs/components/popover
  return (
    <div className={styles.wrapper}>
      <Popover.Root>
        <Popover.Trigger asChild>
          <button aria-label="show details">
            <Image
              width={52}
              height={52}
              alt={`${name} avatar`}
              src={`/avatars/${imageName}`}
              className={styles.iconButton}
            />
          </button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content className={styles.popoverContent} sideOffset={5}>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <p style={{ fontWeight: 700 }}>{name}</p>
              <p>joined {dayjs(joinedAt).format("MMM D, YYYY")}</p>
            </div>
            <Popover.Close className={styles.popoverClose} aria-label="Close">
              <X />
            </Popover.Close>
            <Popover.Arrow className={styles.popoverArrow} />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
}

export default Avatar;
