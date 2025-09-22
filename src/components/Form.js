import React from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import "./Form.css";

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

export const Form = () => {
  const contactForm = React.useRef();
  const [name, setName] = React.useState("Jméno");
  const [email, setEmail] = React.useState("@");
  const [message, setMessage] = React.useState("Text zprávy");

  const sendEmail = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, contactForm.current, PUBLIC_KEY)
      .then(
        () => {
          alert("Zpráva byla úspěšně odeslána! Děkujeme!");
          contactForm.current.reset();
          setName("Jméno");
          setEmail("@");
          setMessage("Zpráva");
        },
        (error) => {
          console.error("Chyba při odesílání:", error);
          alert("Něco se pokazilo. Zkus to znovu.");
        }
      );
  };

  return (
    <div className="contact_container" id="contact">
      <div className="contact">
        <h2 className="headings">Kontakt</h2>
        <form className="form" ref={contactForm} onSubmit={sendEmail}>
          <div className="form_leftSide">
            <div className="form_icons">
              <a
                className="icon_github"
                href="https://github.com/MichaelaKrakowka">
                <FontAwesomeIcon
                  icon={faGithub}
                  size="lg"
                  style={{ color: "#1b3156" }}
                />
              </a>
              <a
                className="icon_linkedin"
                href="https://www.linkedin.com/in/michaela-krakowka-8abbb2b1">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="lg"
                  style={{ color: "#1b3156" }}
                />
              </a>
            </div>
            <p className="email"> michaela.krakowka@gmail.com</p>
          </div>
          <div className="form_rightSide">
            <div className="form_field">
              <label className="form_label"></label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form_input"
                name="name"
                required
              />

              <label className="form_label"></label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form_input"
                name="email"
                required
              />

              <label className="form_label"></label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="form_textarea"
                name="message"
                required
              />
              <div className="form_gdpr">
                <input
                  type="checkbox"
                  className="checkbox"
                  id="gdpr"
                  name="gdprConsent"
                  required
                />
                <div className="gdpr_paragraph">
                  <p>
                    Vámi poskytnuté údaje (jméno, e-mail, text zprávy) používáme
                    výhradně za účelem odpovědi na váš dotaz.
                  </p>{" "}
                </div>
              </div>

              <button type="submit" className="form_btn">
                Odeslat
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
