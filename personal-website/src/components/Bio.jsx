import "../style/Bio.css";

const Bio = () => {
  return (
    <section className="bio" id="bio">
      <div className="container">
        <h2 className="fade-in">Biodata Diri</h2>
        <div className="bio-content">
          <div className="bio-info">
            <p><strong>Nama:</strong> Rafidan Anwar</p>
            <p><strong>Tempat, Tanggal Lahir:</strong> Samarinda, 24 September 2003</p>
            <p><strong>Jenis Kelamin:</strong> Laki-laki</p>
            <p><strong>Alamat:</strong> Jl. M.SAID Gg. Polewali 4</p>
            <p><strong>Email:</strong> rafidananwar24@gmail.com</p>
            <p><strong>No. HP:</strong> +62 857-0593-7055</p>
            <p><strong>Pendidikan:</strong> S1 Teknik Informatika - STMIK Widya Cipta Dharma</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
