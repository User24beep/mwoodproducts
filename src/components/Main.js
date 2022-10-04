import Slide from "./Slide.js";
function Main() {
  return (
    <main className="bg-wood-dark text-light container text-center">
      <div className="row ">
        <p className="col-md-12">Willkommen beim Sägewerk Neubauer</p>
        <div className="col-md-12" style={{ float: "left" }}>
          <h2>Regionale Produkte aus dem Frankenwald</h2>
          <p>
            Wir sind ein familiengeführtes Sägewerk aus Oberfranken in Haßlach
            bei Teuschnitz. Unseren Kunden bieten wir Holz als Werkstoff für
            Ihre individuellen Projekte aus regionalen Wäldern an.
            Selbstverständlich beraten wir Sie auch gerne, um Ihnen bei
            Bauvorhaben bestmöglich weiterhelfen zu können. Egal ob es sich um
            einen Großauftrag oder nur um Kleinmengen handelt.
          </p>
        </div>
      </div>
      <div style={{ width: "95%", margin: "0 auto" }}>
        <Slide></Slide>
      </div>
      <div className="row my-3">
        <p className="col-md-12">
          Kontaktieren sie uns doch gerne bei Interesse!
        </p>
      </div>
    </main>
  );
}

export default Main;
