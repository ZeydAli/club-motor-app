import React from "react";
import logoImgSrc from "../../../public/images/iron-horse-logo.png";
import { Link, useForm, usePage } from "@inertiajs/react";

export default function AdminLayout({ children }) {
  const { post } = useForm();
  const { url } = usePage();

  const handleLogout = (e) => {
    e.preventDefault();
    post("/logout");
  };
  return (
    <>
      <div className="flex">
        <div className="min-h-screen w-1/5 bg-zinc-900 text-white flex flex-col items-center">
          <div className="w-36 mt-5">
            <img src={logoImgSrc} className="" />
          </div>
          <div className="w-52 px-5 py-10">
            <ul className="flex flex-col gap-y-3 items-center">
              <li>
                <Link
                  href="/admin/galleries"
                  className={
                    url.startsWith("/admin/galleries")
                      ? "bg-white/20 rounded-md py-1.5"
                      : "hover:bg-white/20 rounded-md py-1.5"
                  }
                >
                  <button className="w-44">Galeri</button>
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/events"
                  className={
                    url.startsWith("/admin/events")
                      ? "bg-white/20 rounded-md py-1.5"
                      : "hover:bg-white/20 rounded-md py-1.5"
                  }
                >
                  <button className="w-44">Event</button>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <form onSubmit={handleLogout}>
              <button
                type="submit"
                className=" bg-white/20 py-1 px-2 text-sm rounded-md border border-white/25"
              >
                logout
              </button>
            </form>
          </div>
        </div>
        <div className="w-4/5 min-h-screen p-10">{children}</div>
      </div>
    </>
  );
}
