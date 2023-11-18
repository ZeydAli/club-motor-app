import React, { useEffect, useState } from "react";
import AdminLayout from "../AdminLayout";
import { Link, useForm, usePage } from "@inertiajs/react";
import { router } from "@inertiajs/react";

export default function EventEdit({ event, eventImage }) {
  // console.log(eventImage);
  const { errors } = usePage().props;

  const { data, setData, put, post } = useForm({
    name: event.name,
    description: event.description,
  });

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);

    put(`/admin/events/${event.id}`, formData);
  }

  const handleNameChange = (e) => {
    setData("name", e.target.value);
  };
  const handleDescChange = (e) => {
    setData("description", e.target.value);
  };

  function handleImageSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", data.image);

    post(`/admin/events/${event.id}/image`, formData);
  }

  return (
    <>
      <AdminLayout>
        <div>
          <div className="flex justify-between">
            <h2 className="font-bold text-xl">Edit Event</h2>
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
                onChange={handleNameChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Event A"
                required
              />
              {errors.name && <div className="text-red-500">{errors.name}</div>}
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
                onChange={handleDescChange}
                required
              ></textarea>
              {errors.description && (
                <div className="text-red-500">{errors.description}</div>
              )}
            </div>
            <button
              type="submit"
              className="text-white bg-zinc-800 hover:bg-zinc-800/80 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Submit
            </button>
          </form>
          <div className="mt-10 flex justify-center">
            {eventImage && (
              <img
                src={`/storage/${eventImage.image}`}
                className="w-64 rounded-md"
              />
            )}
          </div>
          <div className="mt-10">
            <form
              onSubmit={handleImageSubmit}
              className="flex gap-x-4"
              encType="multipart/form-data"
            >
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                id="image"
                type="file"
                onChange={(e) => setData("image", e.target.files[0])}
              />
              <button
                type="submit"
                className="text-white bg-zinc-800 hover:bg-zinc-800/80 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </AdminLayout>
    </>
  );
}
