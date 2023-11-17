import React from "react";
import Nav from "../Shared/Nav";
import Footer from "../Shared/Footer";

export default function Layout({ children }) {
  return (
    <>
      <div className="font-inter min-h-screen min-w-full flex flex-col justify-between">
        <Nav />

        <div>{children}</div>

        <Footer />
      </div>
    </>
  );
}
