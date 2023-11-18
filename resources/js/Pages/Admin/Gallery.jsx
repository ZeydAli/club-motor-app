import React from "react";
import AdminLayout from "../../Pages/AdminLayout";
import { FaTrash } from "react-icons/fa";
import { useForm } from "@inertiajs/react";

export default function Gallery({ galleries }) {
  const { data, setData, post, delete: destroy, progress } = useForm();

  const iconStyles = {
    fontSize: "20px",
  };

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", data.image);

    post("/admin/galleries/", formData);
  }

  function handleDelete(galleryId) {
    try {
      const confirmed = window.confirm(
        "Are you sure you want to delete this gallery?"
      );
      if (confirmed) {
        destroy(`/admin/galleries/${galleryId}`);
      }
    } catch (error) {
      console.error("Error deleting gallery:", error);
    }
  }

  return (
    <>
      <AdminLayout>
        <div>
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-x-5"
            encType="multipart/form-data"
          >
            <div className="relative inline-block">
              <input
                class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                id="image"
                type="file"
                onChange={(e) => setData("image", e.target.files[0])}
              />
              {progress && (
                <progress value={progress.percentage} max="100">
                  {progress.percentage}%
                </progress>
              )}
            </div>
            <div>
              <button className="px-3 py-1.5 bg-zinc-800 text-white rounded-md text-sm">
                Submit
              </button>
            </div>
          </form>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-3">
            {galleries.map((gallery) => (
              <div
                className="flex w-80 md:w-56 lg:w-60 2xl:w-72 flex-col gap-y-2 items-center"
                key={gallery.id}
              >
                <img src={`/storage/${gallery.image}`} className="w-full" />
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleDelete(gallery.id);
                  }}
                >
                  <button type="submit">
                    <FaTrash style={iconStyles} />
                  </button>
                </form>
              </div>
            ))}
          </div>
        </div>
      </AdminLayout>
    </>
  );
}
