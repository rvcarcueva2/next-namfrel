"use client";

import { useEffect } from "react";

export default function ForceLightMode() {
  useEffect(() => {
    document.documentElement.classList.remove("dark");
    document.body.classList.remove("dark");

    document.documentElement.style.colorScheme = "light";
  }, []);

  return null;
}
