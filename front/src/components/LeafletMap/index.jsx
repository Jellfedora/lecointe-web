import React, { Component } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";

const customMarker = L.icon({
  iconUrl: require("../../ressources/images/logo.png"),
});
class LeafletMap extends Component {
  render() {
    return (
      <MapContainer
        center={[46.0816723, -0.7177109]}
        zoom={12}
        scrollWheelZoom={false}
        className="contact__map__leatflet"
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          icon={customMarker}
          iconSize={[64, 64]}
          position={[46.0816723, -0.7177109]}
        ></Marker>
      </MapContainer>
    );
  }
}

export default LeafletMap;
