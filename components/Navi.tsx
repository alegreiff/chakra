import Link from "next/link";
import React from "react";

export default function Navi() {
  return (
    <>
      <Link href="/">Inicio</Link>
      <Link href="/about">About</Link>
    </>
  );
}
