'use client'
import { useEffect } from "react";

export default function ImportJSFiles() {
  useEffect(() => {
    // Solo ejecutar en el cliente
    if (typeof window !== 'undefined') {
      require("bootstrap/dist/js/bootstrap.min.js");
      require("../js/main");
    }
  }, []);
  return null;
}