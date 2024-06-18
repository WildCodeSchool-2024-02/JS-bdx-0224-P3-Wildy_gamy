import "./RegistrationPage.scss";

function RegistrationPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
  };
  return (
    <>
      <h2 className="registration-title">Inscription </h2>
      <form className="registration-form" onSubmit={handleSubmit}>
        <label className="label-registration" htmlFor="firstname">
          Prénom
        </label>
        <input
          className="input-registration"
          type="text"
          minLength="5"
          id="firstname"
          required
        />
        <label className="label-registration" htmlFor="lastname">
          Nom
        </label>
        <input
          className="input-registration"
          type="text"
          minLength="5"
          id="lastname"
          required
        />
        <label className="label-registration" htmlFor="Alias">
          Pseudo
        </label>
        <input
          className="input-registration"
          type="text"
          minLength="5"
          id="Alias"
          required
        />
        <label className="label-registration" htmlFor="email">
          Email
        </label>
        <input
          className="input-registration"
          type="email"
          id="email"
          pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
          required
        />
        <label className="label-registration" htmlFor="password">
          Mot de passe
        </label>
        <input
          className="input-registration"
          type="text"
          minLength="5"
          id="password"
          required
        />
        <button
          className="validation-button"
          type="submit"
          aria-label="validation"
        >
          Valider
        </button>
      </form>
    </>
  );
}

export default RegistrationPage;
