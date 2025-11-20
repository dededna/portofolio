const Footer = () => {
    return (
      <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
          <h1 className="text-2xl font-bold">Portofolio</h1>
          <div className="flex gap-7">
              <a href="#beranda">Beranda</a>
              <a href="#tentang">Tentang</a>
              <a href="#proyek">Sertifikat</a>
          </div>
          <div>
              <a href="https://github.com/dededna">
                  <i className="ri-github-fill ri-2x"></i>
              </a>
              <a href="https://www.instagram.com/dededna_">
                  <i className="ri-instagram-fill ri-2x"></i>
              </a>
              <a href="https://www.linkedin.com/in/dede-novianti">
                  <i className="ri-linkedin-fill ri-2x"></i>
              </a>
              <a href="https://www.youtube.com/@dedenovianti7868">
                  <i className="ri-youtube-fill ri-2x"></i>
              </a>
          </div>
      </div>
    )
  }
  
  export default Footer