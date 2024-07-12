"use client";

import * as Popover from "@radix-ui/react-popover";
import dayjs from "dayjs";
import { X } from "lucide-react";
import React from "react";

import { User } from "@/types";

import AvatarImage from "../AvatarImage";
import styles from "./AvatarWithPopover.module.css";

export interface AvatarWithPopoverProps {
  user: User;
}

function AvatarWithPopover({ user }: AvatarWithPopoverProps) {
  const { name, joinedAt } = user;

  // reference: https://www.radix-ui.com/primitives/docs/components/popover
  return (
    <div className={styles.wrapper}>
      <Popover.Root>
        <Popover.Trigger asChild>
          <button aria-label="show details">
            <AvatarImage user={user} />
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

export default AvatarWithPopover;
