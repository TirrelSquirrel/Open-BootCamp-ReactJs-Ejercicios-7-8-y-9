import React, { useRef } from "react";
import PropTypes from "prop-types";
import { ContactoClass } from "../../../models/contacto.class";

const ContactoForm = ({ add }) => {
  const nombreRef = useRef("");

  function addContacto(e) {
    e.preventDefault();
    const newContacto = new ContactoClass(nombreRef.current.value, false);
    add(newContacto);
  }
  return (
      <form onSubmit={addContacto}>
        <input
          type="text"
          id="nombre"
          ref={nombreRef}
          placeholder="Nombre"
          required
        ></input>
        <button type="submit">Añadir</button>
      </form>
  );
};

ContactoForm.propTypes = {
  add: PropTypes.func.isRequired,
};

export default ContactoForm;
