import Map from "./Map.js";
function Footer() {
  return (
    <footer className="bg-wood-light p-3 container">
      <div className="row">
        <div className="p-3 col-lg-6 ">
          <h1 className="header-color">Kontakt</h1>
          <hr></hr>
          <p>Manuel Neubauer</p>
          <p>
            <i class="bi bi-geo-alt"></i> Ringstraße 1a, 96358 Teuschnitz
          </p>
          <div className="row">
            <p className="my-2 col-sm-6">
              <i className="bi bi-telephone"></i> Tel: 015140800282
            </p>
            <a href="tel: 015140800282" className="btn btn-background col-sm-6">
              <i className="bi bi-telephone"></i> Rufen sie uns an
            </a>
          </div>
          <div className="row">
            <p className="my-2 col-sm-6">
              <i class="bi bi-envelope"></i> Mail: manuel.neubauer@outlook.de
            </p>
            <a
              href="mailto:manuel.neubauer@outlook.de"
              className="btn btn-background col-sm-6"
            >
              <i class="bi bi-envelope"></i> Kontaktieren sie uns über Mail
            </a>
          </div>
          <hr></hr>
        </div>

        <div className="p-3 col-lg-6">
          <h1 className="pb-2 header-color">Anfahrt</h1>
          <Map></Map>
        </div>
      </div>
      <hr></hr>
      <a href="impressum" className="text-green">
        Impressum
      </a>
      <p>©M.Wood Products</p>
    </footer>
  );
}

export default Footer;
