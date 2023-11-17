import React from "react";
import Layout from "./Layout";
import logoImgSrc from "../../../public/images/iron-horse-logo.png";
import awardImgSrc1 from "../../../public/images/award1.jpg";
import awardImgSrc2 from "../../../public/images/award2.jpg";

export default function Profil() {
  return (
    <>
      <Layout>
        <div className="p-20 2xl:px-72 bg-gradient-to-t from-black to-zinc-900/95 text-white">
          <div className="flex items-center justify-center py-10">
            <img src={logoImgSrc} className="h-48" />
          </div>
        </div>

        <div className="pt-10 px-20 2xl:px-48 flex flex-col gap-y-10 text-center">
          <h2 className="font-bold text-xl">Sejarah Perusahaan</h2>
          <div className="leading-relaxed flex flex-col gap-y-5">
            <p>
              Cerita awal Iron Horse dimulai pada sebuah pertemuan kecil di
              tahun 2019, di mana sekelompok pecinta motor bersatu oleh cinta
              mereka terhadap kebebasan di jalan raya. Para pendiri, dengan
              semangat petualangan dan cinta terhadap motor, memulai perjalanan
              yang akan membentuk identitas klub ini. Pada awalnya, klub ini
              hanya merupakan kelompok kecil pengendara yang sering bertemu di
              garasi-garasi rumahan, saling berbagi cerita perjalanan mereka dan
              tips tentang perawatan motor. Namun, semangat mereka untuk
              menjelajahi dunia dengan roda dua ini menginspirasi pertumbuhan
              klub. Seiring waktu, Iron Horse berkembang menjadi komunitas yang
              solid bagi para pecinta motor dari berbagai latar belakang. Dari
              pengendara berpengalaman hingga mereka yang baru terjun ke dunia
              motor, klub ini menjadi tempat yang ramah untuk berbagi
              pengalaman, pengetahuan, dan koneksi.
            </p>
            <p>
              Perjalanan Iron Horse tak hanya tentang mengeksplorasi jalan raya,
              tapi juga membangun ikatan yang kuat di antara anggotanya. Dari
              perjalanan panjang melintasi pegunungan hingga acara amal untuk
              membantu komunitas, setiap momen telah membentuk identitas unik
              klub ini. Saat ini, Iron Horse bukan hanya sebuah klub motor, ia
              adalah rumah bagi mereka yang merindukan petualangan,
              persaudaraan, dan kebebasan yang ditemukan di atas dua roda. Tentu
              saja, cerita ini bisa disesuaikan dan diperkaya lagi dengan detail
              atau momen-momen khusus yang ingin ditekankan dalam sejarah klub
              motor "Iron Horse" sesuai dengan pengalaman dan perjalanan
              sebenarnya klub tersebut.
            </p>
          </div>

          <h2 className="font-bold text-xl">Makna "Ride Strong, Ride Free"</h2>
          <div className="leading-relaxed flex flex-col gap-y-5">
            <p>
              "Ride Strong, Ride Free" bukan sekadar rangkaian kata, melainkan
              mantra yang memancarkan semangat petualangan yang tiada batas. Ini
              adalah panggilan bagi setiap pengendara untuk menemukan keberanian
              dalam setiap tikungan, setiap langkah yang diambil di atas roda
              besi mereka. "Ride strong" bukan hanya tentang kekuatan fisik,
              tetapi juga keberanian mental untuk menghadapi tantangan jalan
              raya, mengatasi rintangan, dan terus maju walaupun jalur terasa
              berat. Sementara itu, "Ride free" adalah seruan untuk merangkul
              kebebasan sejati; melupakan beban hidup sejenak dan merasakan
              angin yang menyapu wajah, meresapi keindahan dunia tanpa batas
              yang hanya bisa dirasakan di atas motor.
            </p>
            <p>
              Dalam konteks komunitas pengendara, ini menjadi simbol persatuan
              yang kuat. "Ride strong, ride free" memperlihatkan semangat yang
              menyatukan pengendara dari berbagai latar belakang, menciptakan
              hubungan yang kokoh di antara mereka. Ini adalah panggilan bagi
              setiap anggota untuk bersama-sama mengeksplorasi perjalanan,
              menopang satu sama lain dalam kesulitan, dan merayakan kebebasan
              dari keterikatan dalam momen yang tercipta di atas jalanan
              terbuka.
            </p>
          </div>
        </div>

        <div className="py-10 px-20 md:px-48 flex flex-col gap-y-10 text-center">
          <h2 className="font-bold text-xl">Penghargaan</h2>
          <div className="flex flex-col gap-x-10 lg:flex-row">
            <img
              src={awardImgSrc1}
              className="w-[400px] xl:w-[350px] 2xl:w-[400px] rounded-md self-center lg:self-start"
            />
            <p className="text-center lg:text-start mt-5 lg:mt-0">
              Iron Horse telah menerima penghargaan istimewa dalam Seminar
              Keselamatan Berkendara. Penghargaan ini mengakui kontribusi klub
              dalam mengedukasi dan mempromosikan keselamatan berkendara melalui
              serangkaian seminar yang informatif. Dengan mengadakan acara-acara
              ini, Iron Horse telah berhasil membantu anggotanya dan masyarakat
              umum memahami pentingnya praktik berkendara yang aman. Penghargaan
              ini menegaskan komitmen klub dalam menciptakan lingkungan
              berkendara yang lebih aman dan memberi pengaruh positif dalam
              meningkatkan kesadaran akan keselamatan di jalan raya.
            </p>
          </div>
          <div className="flex flex-col gap-x-10 lg:flex-row">
            <p className="text-center lg:text-end mb-5 lg:mb-0">
              Iron Horse mendapatkan penghargaan bergengsi di kategori Pameran
              Motor Terbaik. Penghargaan ini mencerminkan dedikasi klub dalam
              mengadakan pameran motor yang penuh inspirasi, menghadirkan
              koleksi motor yang menarik dan menampilkan keindahan serta
              keragaman dunia otomotif. Dengan menonjolkan motor-motor unik dan
              memikat, Iron Horse berhasil menciptakan pengalaman tak terlupakan
              bagi pengunjung, serta memberikan wadah yang sempurna bagi para
              penggemar motor untuk berbagi pengetahuan dan semangat mereka.
              Penghargaan ini menjadi bukti atas upaya klub dalam memperkuat
              komunitas penggemar motor dan memperluas apresiasi terhadap
              keindahan karya otomotif.
            </p>
            <img
              src={awardImgSrc2}
              className="w-[400px] xl:w-[350px] 2xl:w-[400px] rounded-md self-center lg:self-start"
            />
          </div>
        </div>
      </Layout>
    </>
  );
}
