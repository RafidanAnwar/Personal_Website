import "../style/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="overlay"></div> {/* Efek transparan di atas background */}
      <div className="container">
        <h1 className="fade-in">Hi, I'm <span>Rafidan Anwar</span></h1>
        <p className="slide-up">
          Mahasiswa Teknik Informatika yang memiliki passion dalam pengembangan web dan mobile.
        </p>
        <a href="#projects" className="btn btn-glow">Lihat Proyek</a>
      </div>
    </section>
  );
};

export default Hero;
