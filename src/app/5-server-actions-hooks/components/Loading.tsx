"use client";

// useFormStatus is experimental / canary as of July 5, 2024
// https://react.dev/reference/react-dom/hooks/useFormStatus
import { useFormStatus } from "react-dom";

import Spinner from "@/components/Spinner";

function Loading() {
  // The useFormStatus Hook must be called from a component that is rendered inside a <form>.
  // reference: https://react.dev/reference/react-dom/hooks/useFormStatus
  const { pending } = useFormStatus();
  console.log("PENDING", pending);

  if (pending) {
    return <Spinner />;
  }

  return null;
}

export default Loading;
