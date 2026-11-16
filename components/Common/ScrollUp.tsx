"use client";

import { useEffect } from "react";

export default function ScrollUp() {
  // Braces matter: newer browsers return a Promise from scrollTo, and React
  // would try to call whatever the effect returns as its cleanup function.
  useEffect(() => {
    window.document.scrollingElement?.scrollTo(0, 0);
  }, []);

  return null;
}
