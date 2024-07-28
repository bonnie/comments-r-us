"use client";

// useFormStatus is experimental / canary as of July 28, 2024
// https://react.dev/reference/react-dom/hooks/useFormStatus
import { useFormStatus } from "react-dom";

import Spinner from "@/components/Spinner";

function Loading() {
  // The useFormStatus Hook must be called from a component that is rendered inside a <form>.
  // reference: https://react.dev/reference/react-dom/hooks/useFormStatus
  const { pending } = useFormStatus();

  if (pending) {
    return <Spinner />;
  }

  return null;
}

export default Loading;
