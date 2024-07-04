"use client";

import * as Popover from "@radix-ui/react-popover";
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
          <button className="IconButton" aria-label="Update dimensions">
            <Image
              width={52}
              height={52}
              alt={`${name} avatar`}
              src={`/avatars/${imageName}`}
            />
          </button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content className="PopoverContent" sideOffset={5}>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <p className="Text" style={{ marginBottom: 10 }}>
                Dimensions
              </p>
              <fieldset className="Fieldset">
                <label className="Label" htmlFor="width">
                  Width
                </label>
                <input className="Input" id="width" defaultValue="100%" />
              </fieldset>
              <fieldset className="Fieldset">
                <label className="Label" htmlFor="maxWidth">
                  Max. width
                </label>
                <input className="Input" id="maxWidth" defaultValue="300px" />
              </fieldset>
              <fieldset className="Fieldset">
                <label className="Label" htmlFor="height">
                  Height
                </label>
                <input className="Input" id="height" defaultValue="25px" />
              </fieldset>
              <fieldset className="Fieldset">
                <label className="Label" htmlFor="maxHeight">
                  Max. height
                </label>
                <input className="Input" id="maxHeight" defaultValue="none" />
              </fieldset>
            </div>
            <Popover.Close className="PopoverClose" aria-label="Close">
              <X />
            </Popover.Close>
            <Popover.Arrow className="PopoverArrow" />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
}

export default Avatar;
