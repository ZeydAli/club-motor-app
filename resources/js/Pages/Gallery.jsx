import React from "react";
import Layout from "./Layout";

export default function Gallery({ galleries }) {
  return (
    <>
      <Layout>
        <div className="p-20 2xl:px-72">
          <div className="flex flex-col items-center justify-center py-10">
            <h2 className="font-bold text-xl pb-20">Galeri</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              {galleries.map((gallery) => (
                <img
                  src={`/storage/${gallery.image}`}
                  key={gallery.id}
                  className="py-2 self-center"
                />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
