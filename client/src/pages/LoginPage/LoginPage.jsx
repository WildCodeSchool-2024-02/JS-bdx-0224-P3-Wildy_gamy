import "./LoginPage.scss"

function LoginPage() {

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
          <label className="labelContact" htmlFor="name">
            Name
          </label>
          <input
            className="inputContact"
            type="text"
            minLength="5"
            id="name"
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
          <label className="labelContact" htmlFor="message">
            Message
          </label>
          <textarea
            className="textareaContact"
            name="message"
            id="message"
            cols="30"
            rows="10"
            required
          />
          <button className="contactButton" type="submit" aria-label="submit">
            Submit
          </button>
        </form>
      </>
    );
  }

export default LoginPage;
