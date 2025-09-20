import React from "react";
import "./Form.css";

export const Form = () => {
  const [name, setName] = React.useState("Jméno a Příjmení");
  const [email, setEmail] = React.useState("@");
  const [message, setMessage] = React.useState("Zpráva");
  return (
    <div className="contact_container" id="contact">
      <div className="contact">
        <h2 className="headings">Kontakt</h2>
        <form className="form_content">
          <div></div>
        </form>
      </div>
    </div>
  );
};
