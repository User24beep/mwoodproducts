import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
function Map() {
  return (
    <section className="leafletContainer">
      <MapContainer
        style={{ height: "100%", width: "100%" }}
        center={[50.431395936028785, 11.399582174710256]}
        zoom={30}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[50.431395936028785, 11.399582174710256]}>
          <Popup>Sägewerk</Popup>
        </Marker>
      </MapContainer>
    </section>
  );
}

export default Map;
