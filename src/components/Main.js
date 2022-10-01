import Slide from "./Slide.js";
function Main() {
  return (
    <main className="bg-wood-dark text-light container text-center">
      <div className="row ">
        <p className="col-md-12">Willkommen beim Sägewerk Neubauer</p>
        <div className="col-md-12" style={{ float: "left" }}>
          <h2>Holz ist unser Element</h2>
          <p>
            Wir lieben Holz und wollen jedem Interessierten Holz als natürliches
            und ideales Baumaterial bzw. als Werkstoff näher bringen. In unserem
            Sägewerk in Schmidgaden (zwischen Schwarzenfeld und Nabburg)
            erreichen wir das mit unserer ausgezeichneten Arbeit und unseren
            Mitarbeitern vom Fach. Wir sind ein anerkannter und zertifizierter
            Sägewerkbetrieb, dessen Liebe der Verarbeitung von Holz gilt.
          </p>
        </div>
      </div>
      <div style={{ width: "95%", margin: "0 auto" }}>
        <Slide></Slide>
      </div>
      <div className="row my-3">
        <p className="col-md-12">
          Wir lieben Holz und wollen jedem Interessierten Holz als natürliches
          und ideales Baumaterial bzw. als Werkstoff näher bringen. In unserem
          Sägewerk in Schmidgaden (zwischen Schwarzenfeld und Nabburg) erreichen
          wir das mit unserer ausgezeichneten Arbeit und unseren Mitarbeitern
          vom Fach. Wir sind ein anerkannter und zertifizierter Sägewerkbetrieb,
          dessen Liebe der Verarbeitung von Holz gilt.
        </p>
      </div>
    </main>
  );
}

export default Main;
