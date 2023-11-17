import React from "react";
import Layout from "./Layout";
import imgSrc from "../../../public/images/motobike1.jpg";
import imgSrc2 from "../../../public/images/motobike2.jpg";
import galleryImgSrc from "../../../public/images/galeri1.jpg";
import galleryImgSrc2 from "../../../public/images/galeri2.jpg";
import galleryImgSrc3 from "../../../public/images/galeri3.jpg";
import galleryImgSrc4 from "../../../public/images/galeri4.jpg";
import galleryImgSrc5 from "../../../public/images/galeri5.jpg";
import eventImgSrc1 from "../../../public/images/event1.jpg";
import eventImgSrc2 from "../../../public/images/event2.jpg";
import produkImgSrc1 from "../../../public/images/produk1.png";
import produkImgSrc2 from "../../../public/images/produk2.png";
import produkImgSrc3 from "../../../public/images/produk3.png";
import artikelImgSrc1 from "../../../public/images/artikel1.jpg";
import artikelImgSrc2 from "../../../public/images/artikel2.jpg";
import artikelImgSrc3 from "../../../public/images/artikel3.jpg";
import logoImgSrc1 from "../../../public/images/logo1.png";
import logoImgSrc2 from "../../../public/images/logo2.png";
import logoImgSrc3 from "../../../public/images/logo3.png";
import logoImgSrc4 from "../../../public/images/logo4.png";
import logoImgSrc5 from "../../../public/images/logo5.png";
import logoImgSrc6 from "../../../public/images/logo6.png";
import { Link } from "@inertiajs/react";

export default function Beranda() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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

  const events = [
    {
      id: 1,
      name: "Seminar Safety Riding",
      imageSrc: eventImgSrc1,
      description:
        "Dalam acara ini, kami menghadirkan para ahli dan praktisi berpengalaman untuk membahas praktik berkendara yang aman dan bertanggung jawab. Peserta seminar mendapatkan wawasan mendalam tentang pentingnya perawatan motor, teknik berkendara yang aman, serta langkah-langkah untuk mengurangi risiko kecelakaan di jalan raya. Dengan fokus pada keselamatan, seminar ini menjadi tempat bagi para pengendara untuk memperoleh pengetahuan praktis yang dapat diterapkan dalam pengalaman berkendara sehari-hari.",
    },
    {
      id: 2,
      name: "Charity Ride",
      imageSrc: eventImgSrc2,
      description:
        "Charity Ride dari Iron Horse adalah perjalanan amal yang memberikan bantuan kepada mereka yang membutuhkan. Kami berkendara untuk mengumpulkan dana atau barang untuk membantu anak-anak, lingkungan, atau program kesehatan. Ini adalah kesempatan untuk bersenang-senang sambil memberikan dampak positif kepada komunitas.",
    },
  ];

  const products = [
    {
      id: 1,
      name: "T-shirt Iron Horse White",
      imageSrc: produkImgSrc1,
    },
    {
      id: 2,
      name: "Hoodie Iron Horse Black",
      imageSrc: produkImgSrc2,
    },
    {
      id: 3,
      name: "Totebag Iron Horse Brown",
      imageSrc: produkImgSrc3,
    },
  ];

  const articles = [
    {
      id: 1,
      title:
        "Mengungkap Rahasia Keberhasilan Seminar Safety Riding Iron Horse: Tips Terbaik untuk Berkendara Aman",
      imageSrc: artikelImgSrc1,
      publishedAt: "11 Nov 2023",
    },
    {
      id: 2,
      title:
        "Charity Ride Bersama Iron Horse: Bagaimana Petualangan Berkendara Bisa Membawa Perubahan Positif?",
      imageSrc: artikelImgSrc2,
      publishedAt: "11 Nov 2023",
    },
    {
      id: 3,
      title:
        "Di Balik Layar Pameran Motor Iron Horse: Melihat Koleksi Unik dan Kisah di Baliknya",
      imageSrc: artikelImgSrc3,
      publishedAt: "11 Nov 2023",
    },
  ];

  return (
    <>
      <Layout>
        <div className="bg-gradient-to-t from-zinc-800 to-zinc-800 h-[700px] md:h-[700px] 2xl:h-[800px] w-full relative right-0 left-0 top-0">
          <img
            src={imgSrc}
            className="w-full h-full object-cover object-center absolute mix-blend-overlay"
          />
          <div className="w-full flex mix-blend-lighten h-full justify-center md:justify-end">
            <div className="text-white/70 flex w-1/3 flex-col justify-center items-start">
              <div className="items-start">
                <div className="text-[35px] 2xl:text-[50px] font-kdam">
                  <h2>Ride Strong,</h2>
                  <h2>Ride Free.</h2>
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("kontak-section");
                  }}
                  className="bg-red-button px-2 py-1 rounded-md text-sm 2xl:text-base hover:text-white transition-all duration-200 ease-in"
                >
                  Join Us
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="py-16 px-5 xl:px-20 2xl:px-48 flex flex-col md:flex-row gap-x-4">
          <img
            src={imgSrc2}
            className="h-64 2xl:h-80 self-center md:self-start"
          />
          <div className="flex flex-col gap-y-2 pt-6 px-10 md:p-0">
            <h2 className="text-lg 2xl:text-2xl font-semibold">About us</h2>
            <p className="leading-relaxed">
              Selamat datang di Iron Horse, tempat di mana cinta terhadap motor
              mendorong petualangan kami. Berdiri sejak 2019, kami adalah
              kelompok pengendara yang bersemangat dalam menjelajahi jalan dan
              membentuk ikatan yang kuat. Di Iron Horse, kami merayakan
              kebebasan dalam berkendara dan hubungan yang kami bangun. Kelompok
              kami yang beragam memiliki kesamaan dalam cinta terhadap motor,
              mulai dari cruiser hingga sportbike, dan berbagai tipe lainnya.
            </p>
            <Link href="/profil">
              <button className="bg-red-500/90 text-white/80 hover:text-white transition-all duration-100 ease-in p-2 rounded-md text-sm w-24">
                Find more
              </button>
            </Link>
          </div>
        </div>

        <div className="bg-gradient-to-tr from-black to-zinc-900/95 text-white pt-20 pb-7">
          <div className="flex whitespace-nowrap overflow-x-scroll scroll-smooth scrollbar-thin scrollbar-thumb-white/30 hover:scrollbar-thumb-white/50 scrollbar-track-transparent scrollbar-thumb-rounded">
            {galleries.map((gallery) => (
              <div key={gallery.id} className="min-w-max">
                <img
                  src={gallery.imageSrc}
                  className="h-52 2xl:h-72 object-cover"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center pt-5 px-10">
            <Link href="/galeri">
              <button className="p-2 bg-black/60 rounded-md text-sm w-28">
                Visit gallery
              </button>
            </Link>
          </div>

          <div className="p-20 2xl:px-48 flex flex-col gap-y-10 text-center">
            <h2 className="text-white font-bold text-xl">Upcoming events</h2>
            {events.map((event) => (
              <div
                className="relative h-60 rounded overflow-hidden group"
                key={event.id}
              >
                <img
                  className="w-full object-cover object-center"
                  src={event.imageSrc}
                  alt="Card"
                />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-center bg-black/30 group-hover:hidden">
                  <div className="p-4">
                    <h2 className="text-2xl font-bold mb-2">{event.name}</h2>
                  </div>
                </div>
                <div className="absolute top-60 left-0 xl:px-10 2xl:px-20 w-full h-full items-center justify-center text-white text-center bg-black/80 group-hover:flex group-hover:top-0 transition-all duration-100 ease-in">
                  <div className="p-4">
                    <p className="text-sm mb-2">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="py-10 pr-0 md:pr-20 flex flex-col items-center"
          id="visimisi-section"
        >
          <div className="flex flex-col md:flex-row items-center h-[200px] md:h-[400px]">
            <h2 className="origin-center md:-rotate-90 text-[50px] md:text-[80px] px-8 font-bold">
              VISION
            </h2>
            <p className="px-10 md:pr-0 md:pl-10 text-center md:text-start">
              Menjadi komunitas yang solid dan saling mendukung bagi para
              penggemar motor, menginspirasi semangat petualangan, dan menjadi
              tempat bagi para pecinta motor untuk berkumpul dan berbagi
              pengalaman yang tak terlupakan.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center h-[600px] md:h-[800px]">
            <h2 className="origin-center md:-rotate-90 text-[50px] md:text-[80px] font-bold">
              MISSION
            </h2>
            <ul className="px-10 md:pr-0 md:pl-10 flex flex-col gap-y-20 text-center md:text-start">
              <li>
                Menggalang persaudaraan: Menjadi tempat bagi semua penggemar
                motor untuk merasakan ikatan persaudaraan yang kuat, membangun
                komunitas yang inklusif dan saling mendukung.
              </li>
              <li>
                Keselamatan berkendara: Memperkuat kesadaran akan keselamatan
                berkendara, dengan mendukung edukasi, pelatihan, dan praktik
                berkendara yang bertanggung jawab.
              </li>
              <li>
                Berbagi pengetahuan: Mendorong pertukaran informasi dan
                pengalaman antara anggota klub untuk memperluas pengetahuan
                tentang dunia motor, teknik berkendara, dan perawatan motor.
              </li>
              <li>
                Kontribusi sosial: Melakukan kegiatan amal dan berpartisipasi
                dalam inisiatif sosial yang positif untuk memberikan dampak yang
                baik bagi masyarakat sekitar.
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-br from-black to-zinc-900/95 text-white pt-5 pb-14 px-20 2xl:px-72">
          <div className="py-2" id="produk-section">
            <h2 className="font-bold">Produk Terpopuler</h2>
            <div className="py-10 w-full flex gap-x-4 overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-thin scrollbar-thumb-white/30 hover:scrollbar-thumb-white/50 scrollbar-track-transparent scrollbar-thumb-rounded">
              {products.map((product) => (
                <div className="w-52 relative group" key={product.id}>
                  <img
                    src={product.imageSrc}
                    className="h-full w-full object-cover object-center rounded-md"
                  />
                  <div className="absolute top-0 left-0 w-full h-full hidden bg-black/50 items-center justify-center group-hover:flex">
                    <button className="bg-black/40 px-2 py-1 rounded-xl border border-white/40">
                      Shop now
                    </button>
                  </div>
                  <span className="text-sm">{product.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 flex gap-x-4">
            <div className="flex flex-col justify-between w-1/3 md:w-1/5">
              <div className="font-kdam font-bold text-[40px]">
                <h2>AR</h2>
                <h2>TI</h2>
                <h2>KEL</h2>
              </div>
              <button className="bg-red-900 px-2 py-1 w-28 rounded-sm">
                Read more
              </button>
            </div>
            <div className="w-2/3 md:w-4/5 pb-2 flex gap-x-4 overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-thin scrollbar-thumb-white/30 hover:scrollbar-thumb-white/50 scrollbar-track-transparent scrollbar-thumb-rounded">
              {articles.map((article) => (
                <div className="w-64" key={article.id}>
                  <img src={article.imageSrc} className="" />
                  <div className="flex flex-col border-2 border-x-0 border-t-0 border-red-800 pb-4 w-3/4">
                    <span className="text-sm mt-2 truncate">
                      {article.title}
                    </span>
                    <span className="text-xs mt-2 text-white/50">
                      {article.publishedAt}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="py-20 text-center" id="klien-section">
          <h2 className="font-bold text-xl tracking-widest pb-20">
            ~KLIEN KAMI~
          </h2>
          <div className="grid grid-cols-3 2xl:grid-cols-6">
            <div>
              <img src={logoImgSrc1} />
            </div>
            <div>
              <img src={logoImgSrc2} />
            </div>
            <div>
              <img src={logoImgSrc3} />
            </div>
            <div>
              <img src={logoImgSrc4} />
            </div>
            <div>
              <img src={logoImgSrc5} />
            </div>
            <div>
              <img src={logoImgSrc6} />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
