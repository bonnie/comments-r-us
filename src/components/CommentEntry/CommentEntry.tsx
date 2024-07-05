import React from "react";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";

import { User } from "@/types";

import Button from "../Button";
import styles from "./ClientForm.module.css";

// just pass a random userID rather than having to log in
//   or select from a dropdown
const getRandomUserId = (users: User[]) => {
  const rando = users[Math.floor(Math.random() * users.length)];
  return rando.id;
};

// for useSWRMutation
async function sendRequest(
  url: string,
  { arg }: { arg: { body: string; userId: number } }
) {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(arg),
  });
}

const ClientForm = ({}: ClientFormProps) => {
  const [body, setBody] = React.useState("");

  const { data: users, isLoading: isLoadingUsers } = useSWR("/api/users", () =>
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => data.users)
  );

  // invalidates and refetches "/api/comments" automatically
  const { trigger, isMutating } = useSWRMutation("/api/comments", sendRequest);

  const handleSubmit: React.FormEventHandler = (event) => {
    event.preventDefault();
    if (isLoadingUsers || isMutating || body.length === 0) {
      // don't allow submission until users are available and there's
      //   no submission currently in process.
      // a production app would give some feedback to the user here
      //   about why nothing's gonna happen
      return;
    }

    trigger({ body, userId: getRandomUserId(users) });

    // clear the input
    setBody("");
  };

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <textarea
        placeholder="Enter a comment..."
        value={body}
        onChange={(event) => setBody(event.target.value)}
      />
      <div className={styles.buttons}>
        <Button type="reset" variant="outline" onClick={() => setBody("")}>
          reset
        </Button>
        <Button type="submit">
          {isLoadingUsers || isMutating ? "working..." : "post"}
        </Button>
      </div>
    </form>
  );
};

export default ClientForm;
