import React from "react";
import Layout from "./Layout";
import galleryImgSrc from "../../../public/images/galeri1.jpg";
import galleryImgSrc2 from "../../../public/images/galeri2.jpg";
import galleryImgSrc3 from "../../../public/images/galeri3.jpg";
import galleryImgSrc4 from "../../../public/images/galeri4.jpg";
import galleryImgSrc5 from "../../../public/images/galeri5.jpg";

export default function Gallery() {
  const galleries = [
    {
      id: 1,
      imageSrc: galleryImgSrc,
    },
    {
      id: 2,
      imageSrc: galleryImgSrc2,
    },
    {
      id: 3,
      imageSrc: galleryImgSrc3,
    },
    {
      id: 4,
      imageSrc: galleryImgSrc4,
    },
    {
      id: 5,
      imageSrc: galleryImgSrc5,
    },
  ];

  return (
    <>
      <Layout>
        <div className="p-20 2xl:px-72">
          <div className="flex flex-col items-center justify-center py-10">
            <h2 className="font-bold text-xl pb-20">Galeri</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              {galleries.map((gallery) => (
                <img
                  src={gallery.imageSrc}
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
