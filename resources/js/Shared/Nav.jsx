import { Link } from "@inertiajs/react";
import React from "react";

export default function Nav() {
  return (
    <>
      <div className="fixed z-50 top-0 w-full bg-blue-400 flex py-5 justify-between">
        <div>
          <h2>LOGO</h2>
        </div>
        <ul className="flex">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <Link href="/visidanmisi">Visi dan Misi</Link>
          </li>
          <li>
            <Link href="/produkkami">Produk kami</Link>
          </li>
          <li>
            <Link href="/kontakkami">Kontak kami</Link>
          </li>
          <li>
            <Link href="/aboutus">About us</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
