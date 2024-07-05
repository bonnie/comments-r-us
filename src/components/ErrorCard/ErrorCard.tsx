import React from "react";

import Card from "../Card";

export interface ErrorCardProps {
  // optional, could be undefined
  error?: string;
}

function ErrorCard({ error }: ErrorCardProps) {
  return (
    <Card backgroundColor="var(--color-tomato-11)" textColor="white">
      <h2>An error occurred</h2>
      <p>{error}</p>
    </Card>
  );
}

export default ErrorCard;
