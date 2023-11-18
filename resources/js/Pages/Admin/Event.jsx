import React from "react";
import AdminLayout from "../AdminLayout";
import { Link, useForm } from "@inertiajs/react";

export default function Event({ events }) {
  const { delete: destroy } = useForm();

  function handleDelete(eventId) {
    try {
      const confirmed = window.confirm(
        "Are you sure you want to delete this event?"
      );
      if (confirmed) {
        destroy(`/admin/events/${eventId}`);
      }
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  }
  return (
    <>
      <AdminLayout>
        <div className="flex justify-end mb-4">
          <Link href="/admin/events/create">
            <button className="text-white bg-zinc-800 hover:bg-zinc-800/80 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
              Create Event
            </button>
          </Link>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-600">
            <thead className="text-xs text-gray-700 uppercase bg-gray-300">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Id
                </th>
                <th scope="col" className="px-6 py-3">
                  Event Name
                </th>
                <th scope="col" className="px-12 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {events.map((event) => (
                <tr
                  key={event.id}
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                  <td className="px-6 py-4">{event.id}</td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {event.name}
                  </th>
                  <td className="px-6 py-4 flex">
                    <Link href={`/admin/events/${event.id}/edit`}>
                      <button className="font-medium text-blue-600 hover:underline px-2">
                        Edit
                      </button>
                    </Link>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleDelete(event.id);
                      }}
                    >
                      <button
                        type="submit"
                        className="font-medium text-blue-600 hover:underline px-2"
                      >
                        Hapus
                      </button>
                    </form>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AdminLayout>
    </>
  );
}
