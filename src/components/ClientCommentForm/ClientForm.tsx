import React from "react";

import { User } from "@/types";

import Button from "../Button";
import styles from "./ClientForm.module.css";
export interface ClientFormProps {
  fetchQuoteStyles: (incomingQuote?: string) => Promise<void>;
  startOver: () => void;
}

// just pass a random userID rather than having to log in
//   or select from a dropdown
const getRandomUserId = (users: User[]) => {
  const rando = users[Math.floor(Math.random() * users.length)];
  return rando.id;
};

const ClientForm = ({}: ClientFormProps) => {
  const [body, setBody] = React.useState("");
  const [users, setUsers] = React.useState<User[]>([]);

  React.useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((data) => {
        console.log("DATA", data);
        setUsers(data.users);
      });
  }, []);

  // not handling loading/error status here
  //   ... but that should be done for a complete solution
  const handleSubmit: React.FormEventHandler = (event) => {
    event.preventDefault();
    fetch("/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ body, userId: getRandomUserId(users) }),
    });
  };

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <textarea
        placeholder="Enter a quote..."
        value={body}
        onChange={(event) => setBody(event.target.value)}
      />
      <div className={styles.buttons}>
        <Button type="reset" variant="outline">
          start over
        </Button>
        <Button type="submit">post comment</Button>
      </div>
    </form>
  );
};

export default ClientForm;
