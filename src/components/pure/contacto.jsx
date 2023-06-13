import React from "react";
import PropTypes from "prop-types";
import { ContactoClass } from "../../models/contacto.class";

const ContactoComponent = ({ contacto, remove, toggleConectado }) => {
  function conectado() {
    if (contacto.conectado) {
      return (
        <>
          <h2 style={{ color: "green", fontWeight: "bold" }}>Conectado</h2>
          <button
            onClick={()=> {
                toggleConectado(contacto)
            }}
          >
            Desconectar
          </button>
        </>
      );
    } else {
      return (<><h2 style={{ color: "red", fontWeight: "bold" }}>Desconectado</h2><button
          onClick={() => {
              toggleConectado(contacto);
          } }
      >
          Conectar
      </button></>);
    }
  }
  return (
    <div>
      <h1>
        Nombre: <span>{contacto.nombre}</span>
      </h1>
      {conectado()}
      <button
        onClick={() => {
          remove(contacto);
        }}
      >
        Eliminar
      </button>
    </div>
  );
};

ContactoComponent.propTypes = {
  contacto: PropTypes.instanceOf(ContactoClass).isRequired,
  remove: PropTypes.func.isRequired,
  toggleConectado: PropTypes.func.isRequired,
};

export default ContactoComponent;
