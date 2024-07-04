import React from "react";

import Button from "../Button";
import styles from "./ClientForm.module.css";
import ClientUserSelect from "./ClientUserSelect";

export interface ClientFormProps {
  fetchQuoteStyles: (incomingQuote?: string) => Promise<void>;
  startOver: () => void;
}

const ClientForm = ({}: ClientFormProps) => {
  const [body, setBody] = React.useState("");
  const [userId, setUserId] = React.useState<number>();

  // not handling loading/error status here
  //   ... but that should be done for a complete solution
  const handleSubmit = () => {
    fetch("/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ body, userId }),
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
        <ClientUserSelect userId={userId} setUserId={setUserId} />
        <Button type="reset" variant="outline">
          start over
        </Button>
        <Button type="submit">post comment</Button>
      </div>
    </form>
  );
};

export default ClientForm;
