import clsx from "clsx";
import React from "react";

import { User } from "@/types";

import styles from "./ClientUserSelect.module.css";

export interface ClientUserSelectProps {
  userId: number | undefined;
  setUserId: React.Dispatch<React.SetStateAction<number | undefined>>;
}

function ClientUserSelect({ userId, setUserId }: ClientUserSelectProps) {
  const [users, setUsers] = React.useState<User[]>([]);

  React.useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((data) => {
        console.log("DATA", data);
        setUsers(data.users);
      });
  }, []);

  // don't show the select until there are users available
  console.log("USERS", users);

  if (users.length === 0) {
    return null;
  }

  // reference: https://css-tricks.com/striking-a-balance-between-native-and-custom-select-elements/
  return (
    <>
      <div className={styles.select}>
        <span className={styles.selectLabel} id="userLabel">
          {" "}
          Users
        </span>
        <div className={styles.selectWrapper}>
          <select className={styles.selectNative} aria-labelledby="userLabel">
            <option value="sel" disabled selected>
              {" "}
              Select user...
            </option>
            {users.map(({ id, name }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </select>

          {/* Hide the custom select from AT (e.g. SR) using aria-hidden */}
          <div className={styles.selectCustom} aria-hidden="true">
            <div className={styles.selectCustomTrigger}>Select user...</div>
            <div className={styles.selectCustomOptions}>
              {users.map(({ id, name }) => (
                <div
                  key={id}
                  className={styles.selectCustomOption}
                  data-value={id}
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ClientUserSelect;
