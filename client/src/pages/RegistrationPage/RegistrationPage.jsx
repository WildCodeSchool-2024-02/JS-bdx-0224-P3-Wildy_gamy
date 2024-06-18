import "./RegistrationPage.scss";

function RegistrationPage() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const userNameInput = event.target.elements.username;
    const username = userNameInput.value;
    event.target.reset();

    alert(`${username} Votre formulaire à bien été envoyé !`);
  };
  return (
    <>
      <h2 className="contactTitle">Inscription </h2>
      <form className="ContactForm" onSubmit={handleSubmit}>
        <label className="labelContact" htmlFor="firstname">
          Prénom
        </label>
        <input
          className="inputContact"
          type="text"
          minLength="5"
          id="firstname"
          required
        />
        <label className="labelContact" htmlFor="lastname">
          Nom
        </label>
        <input
          className="inputContact"
          type="text"
          minLength="5"
          id="lastname"
          required
        />
        <label className="labelContact" htmlFor="Alias">
          Pseudo
        </label>
        <input
          className="inputContact"
          type="text"
          minLength="5"
          id="Alias"
          required
        />
        <label className="labelContact" htmlFor="email">
          Email
        </label>
        <input
          className="inputContact"
          type="email"
          id="email"
          pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
          required
        />
        <label className="labelContact" htmlFor="password">
          Mot de passe
        </label>
        <input
          className="inputContact"
          type="text"
          minLength="5"
          id="password"
          required
        />
        <button className="contactButton" type="submit" aria-label="submit">
          Valider
        </button>
      </form>
    </>
  );
}

export default RegistrationPage;
