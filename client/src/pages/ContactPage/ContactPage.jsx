import { Form } from "react-router-dom";
import "./ContactPage.scss";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function ContactPage() {
  const position = [44.865171, -0.559612];

  return (
    <main>
      <h1 id="formulaire">Contact</h1>
      <Form method="post" className="registration-form">
        <label className="label-registration" htmlFor="firstname">
          Prénom
        </label>
        <input
          className="input-registration"
          type="text"
          id="firstname"
          name="firstname"
          placeholder="Prénom"
          required
        />
        <label className="label-registration" htmlFor="lastname">
          Nom
        </label>
        <input
          className="input-registration"
          type="text"
          id="lastname"
          name="lastname"
          placeholder="Nom"
          required
        />
        <label className="label-registration" htmlFor="email">
          Email
        </label>
        <input
          className="input-registration"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
          required
        />
        <label className="label-registration" htmlFor="message">
          Message
        </label>
        <textarea
          className="input-registration input-message"
          type="text"
          id="message"
          name="message"
          placeholder="Votre message..."
          rows="20"
          required
        />
        <button className="validation-button validation-message" type="submit">
          Envoyer le message
        </button>
      </Form>
      <h2 id="nous-trouver">Nos coordonnées</h2>
      <MapContainer center={position} zoom={13} className="leaflet-container">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>Wildy Gamy, 42 rue de Galaga, 33000 Bordeaux</Popup>
        </Marker>
      </MapContainer>
    </main>
  );
}

export default ContactPage;
