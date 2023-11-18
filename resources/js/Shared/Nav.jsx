import { Link, useForm, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import logoImgSrc from "../../../public/images/iron-horse-logo.png";
import { IoIosMenu } from "react-icons/io";
import { HiMiniXMark } from "react-icons/hi2";

export default function Nav() {
  const { url, props } = usePage();
  const { post } = useForm();
  const isAuthenticated = props.auth && props.auth.user;

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(!open);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    post("/logout");
  };

  const iconStyles = {
    fontSize: "30px",
  };

  let [open, setOpen] = useState(false);

  const links = [
    {
      id: 1,
      name: "Beranda",
      href: "/",
    },
    {
      id: 2,
      name: "Profil",
      href: "/profil",
    },
    {
      id: 3,
      name: "Visi Misi",
      href: "/visimisi",
    },
    {
      id: 4,
      name: "Produk",
      href: "/produk",
    },
    {
      id: 5,
      name: "Klien",
      href: "/klien",
    },
    {
      id: 6,
      name: "Kontak",
      href: "/kontak",
    },
  ];

  return (
    <>
      <div className="fixed z-50 top-0 w-full bg-black/60 py-5">
        <ul className="md:flex hidden items-center justify-center gap-x-5 lg:gap-x-8 2xl:gap-x-14 text-white/70">
          <li>
            <Link
              href="/"
              className={
                url === "/"
                  ? "text-white"
                  : "hover:text-white transition-all duration-500 ease-out"
              }
            >
              Beranda
            </Link>
          </li>
          <li>
            <Link
              href="/profil"
              className={
                url === "/profil"
                  ? "text-white"
                  : "hover:text-white transition-all duration-500 ease-out"
              }
            >
              Profil
            </Link>
          </li>
          <li>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("visimisi-section");
              }}
              className="hover:text-white transition-all duration-500 ease-out cursor-pointer"
            >
              Visi Misi
            </a>
          </li>
          <li>
            <img src={logoImgSrc} className="w-24" />
          </li>
          <li>
            <a
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("produk-section");
              }}
              className="hover:text-white transition-all duration-500 ease-out cursor-pointer"
            >
              Produk
            </a>
          </li>
          <li>
            <a
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("klien-section");
              }}
              className="hover:text-white transition-all duration-500 ease-out cursor-pointer"
            >
              Klien
            </a>
          </li>
          <li>
            <a
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("kontak-section");
              }}
              className="hover:text-white transition-all duration-500 ease-out cursor-pointer"
            >
              Kontak
            </a>
          </li>
          <div className="absolute right-10">
            {isAuthenticated ? (
              <form onSubmit={handleLogout}>
                <button
                  type="submit"
                  className=" bg-white/20 py-1 px-2 text-sm rounded-md border border-white/25"
                >
                  logout
                </button>
              </form>
            ) : (
              <Link href="/login">
                <button className=" bg-white/20 py-1 px-2 text-sm rounded-md border border-white/25">
                  login
                </button>
              </Link>
            )}
          </div>
        </ul>
        <div className="flex md:hidden justify-between items-center px-10 text-white">
          <div>
            <img src={logoImgSrc} className="w-24" />
          </div>
          <div className="flex gap-x-4">
            {isAuthenticated ? (
              <form onSubmit={handleLogout}>
                <button
                  type="submit"
                  className=" bg-white/20 py-1 px-2 text-sm rounded-md border border-white/25"
                >
                  logout
                </button>
              </form>
            ) : (
              <Link href="/login">
                <button className=" bg-white/20 py-1 px-2 text-sm rounded-md border border-white/25">
                  login
                </button>
              </Link>
            )}
            <div className="cursor-pointer" onClick={() => setOpen(!open)}>
              {open ? (
                <HiMiniXMark style={iconStyles} />
              ) : (
                <IoIosMenu style={iconStyles} />
              )}
            </div>
          </div>
        </div>
        <div className="fixed z-40 bg-zinc-950 min-w-full mt-4">
          <ul
            className={`text-white/60 transition-all duration-500 ease-in-out ${
              open
                ? "md:hidden flex flex-col gap-y-20 items-center justify-center h-screen"
                : "top-[-490px] absolute"
            }`}
          >
            <li>
              <Link
                href="/"
                className={
                  url === "/"
                    ? "text-white"
                    : "hover:text-white transition-all duration-500 ease-out"
                }
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                href="/profil"
                className={
                  url === "/profil"
                    ? "text-white"
                    : "hover:text-white transition-all duration-500 ease-out"
                }
              >
                Profil
              </Link>
            </li>
            <li>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("visimisi-section");
                }}
                className="hover:text-white transition-all duration-500 ease-out cursor-pointer"
              >
                Visi Misi
              </a>
            </li>
            <li>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("produk-section");
                }}
                className="hover:text-white transition-all duration-500 ease-out cursor-pointer"
              >
                Produk
              </a>
            </li>
            <li>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("klien-section");
                }}
                className="hover:text-white transition-all duration-500 ease-out cursor-pointer"
              >
                Klien
              </a>
            </li>
            <li>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("kontak-section");
                }}
                className="hover:text-white transition-all duration-500 ease-out cursor-pointer"
              >
                Kontak
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
