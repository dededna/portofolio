import DataImage from "./data";
import { listTools, listProyek } from "./data";


function App() {
  return (
    <>
    <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
      <div className="animate__animated animate__fadeInUp animated__delay-3s">
        <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
          <img src={DataImage.HeroImage} alt="Hero Image" className="w-15 rounded-md" loading="lazy" />
          <q>Build your dreams, one line at a time👌</q>
        </div>
        <h1 className="text-3xl/tight font-bold mb-6">Hi, Saya Dede Novianti</h1>
        <p className="text-base/loose mb-6 opacity-50">
        Saya mahasiswa Teknik Informatika yang suka belajar tentang pengembangan web dan desain UI/UX. Saya mempelajari HTML, CSS, Tailwind, Bootstrap, PHP, JavaScript, dan Python untuk membuat website yang menarik dan berfungsi dengan baik. Saya juga suka mendesain dengan Figma dan Canva agar tampilannya menarik dan nyaman digunakan.
        </p>
        <div className="flex items-center sm:gap-4 gap-2">
          <a href="#" className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600">Download CV <i class="ri-download-line ri-lg"></i>
          </a>
          <a href="#proyek" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600">Lihat Sertifikat <i className="ri-arrow-down-line ri-lg"></i>
          </a>
        </div>
      </div>
      <img src={DataImage.HeroImage} alt="Hero Image" className="w-[390px] md:ml-auto" animate__animated animate__fadeInUp animated__delay-3s loading="lazy" />
    </div>

    {/* tentang */}
    <div className="tentang mt-32 py-10" id="tentang">
      <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
      <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md mb-10 sm:hidden" loading="lazy" />
        <p className="text-base/loose mb-10">
        Saya merupakan mahasiswa Teknik Informatika yang berfokus pada pengembangan web dan desain antarmuka pengguna (UI/UX). Saya memiliki kemampuan dalam menggunakan HTML, CSS, Tailwind CSS, Bootstrap, PHP, JavaScript, dan Python untuk membangun website yang fungsional dan responsif. Selain itu, saya juga berpengalaman menggunakan Figma dan Canva untuk merancang tampilan yang profesional dan nyaman digunakan.
        </p>
        <div className="flex items-center justify-between">
          <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md sm:block hidden" />
          <div className="flex items-center gap-6">
            <div>
              <h1 className="text-4xl mb-1">
                {/* 45<span className="text-violet-500">+</span> */}
              </h1>
              {/* <p>Proyek Selesai</p> */}
            </div>
            <div>
              <h1 className="text-4xl mb-1">
                {/* 4<span className="text-violet-500">+</span> */}
              </h1>
              {/* <p>Tahun Pengalaman</p> */}
            </div>
          </div>
        </div>
      </div>

      <div className="tools mt-32">
        <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Tools yang dipakai</h1>
        <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Berikut ini beberapa yang biasa saya pakai untuk pembutan Website ataupun Design</p>
        <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listTools.map(tool => (
            <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group" key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad}>
            <img src={tool.gambar} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" loading="lazy" />
            <div>
            <h4 className="font-bold">{tool.nama}</h4>
            <p className="opacity-50">{tool.ket}</p>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
    {/* Tentang */}
    {/* Proyek */}
<div className="proyek mt-32 py-10" id="proyek">
  <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Sertifikat</h1>
  <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Berikut ini beberapa sertifikat yang telah Saya ikuti.</p>

  {/* Add this block inside the .proyek container */}
  <div className="proyek-box mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
    {listProyek.map((proyek) => (
      <div key={proyek.id} className="p-4 bg-zinc-500 rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad} data-aos-once="true">
        <img src={proyek.gambar} alt="Proyek Image" loading="lazy" />
        <div>
          <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
          <p className="text-base/loose mb-4">{proyek.desk}</p>
          <div>
            {proyek.tools.map((tool, index) => (
              <p className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold" key={index}>{tool}</p>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a href="#" className="bg-violet-700 rounded-lg block border border-zinc-600 hover:bg-violet-600">Lihat Website</a>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
{/* Proyek */}

{/* Kontak */}
<div className="kontak mt-32 sm:p-10 p-0" id="kontak">
  <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Kontak</h1>
  <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Mari terhubung dengan Saya.</p>
  <form action="https://formsubmit.co/dedeenoviantii@gmail.com" method="POST" className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label className="font-semibold">Nama Lengkap</label>
        <input type="text" name="nama" placeholder="Masukkan Nama..." className="border border-zinc-500 p-2 rounded-md" required />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-semibold">Email</label>
        <input type="email" name="email" placeholder="Masukkan Email..." className="border border-zinc-500 p-2 rounded-md" required />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="pesan" className="font-semibold">Pesan</label>
        <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder="Pesan..." className="border border-zinc-500 p-2 rounded-md" required></textarea>
      </div>
      <div className="text-center">
        <button type="submit" className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-violet-600">Kirim Pesan</button>
      </div>
    </div>
  </form>
</div>
{/* Kontak */}
    </>
  )
}

export default App;