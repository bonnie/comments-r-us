import React from "react";

import Button from "../Button";
import styles from "./QuoteForm.module.css";

export interface QuoteStyleFormProps {
  fetchQuoteStyles: (incomingQuote?: string) => Promise<void>;
  startOver: () => void;
}

const QuoteStyleForm = ({
  fetchQuoteStyles,
  startOver,
}: QuoteStyleFormProps) => {
  const [quote, setQuote] = React.useState("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    fetchQuoteStyles(quote);
  };
  const reset = () => {
    startOver();
    setQuote("");
  };

  const buttonLabel = quote ? "generate styles" : "use random quote";

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <textarea
        placeholder="Enter a quote..."
        value={quote}
        onChange={(event) => setQuote(event.target.value)}
      />
      <div className={styles.buttons}>
        <Button type="button" variant="outline" onClick={reset}>
          start over
        </Button>
        <Button type="submit">{buttonLabel}</Button>
      </div>
    </form>
  );
};

export default QuoteStyleForm;
