import React from "react";
import AdminLayout from "../AdminLayout";
import { Link, useForm } from "@inertiajs/react";

export default function EventCreate() {
  const { data, setData, post } = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    post("/admin/events", {
      data,
    });
  };

  return (
    <>
      <AdminLayout>
        <div>
          <div className="flex justify-between">
            <h2 className="font-bold text-xl">Create Event</h2>
            <Link href="/admin/events">
              <button className="text-white bg-zinc-800 hover:bg-zinc-800/80 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                Back
              </button>
            </Link>
          </div>

          <form
            className="mt-10"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Nama Event
              </label>
              <input
                type="text"
                id="name"
                value={data.name}
                onChange={(e) => setData("name", e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Event A"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Deskripsi Event
              </label>
              <textarea
                id="description"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Ketik deskripsi di sini..."
                value={data.description}
                onChange={(e) => setData("description", e.target.value)}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-white bg-zinc-800 hover:bg-zinc-800/80 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Submit
            </button>
          </form>
        </div>
      </AdminLayout>
    </>
  );
}
