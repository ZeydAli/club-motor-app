import React from "react";
import Nav from "../Shared/Nav";

export default function Layout({ children }) {
  return (
    <>
      <div className="font-inter min-h-screen min-w-full">
        <Nav />

        <div className="py-16">{children}</div>
      </div>
    </>
  );
}
