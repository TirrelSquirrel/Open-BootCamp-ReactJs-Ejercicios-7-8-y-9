import React, { useState } from "react";
import { ContactoClass } from "../../models/contacto.class";
import ContactoComponent from "../pure/contacto";
import ContactoForm from "./forms/contactoForm";

const ContactoLista = () => {
  const contacto1 = new ContactoClass("Baute", true);
  const contacto2 = new ContactoClass("Megan", true);
  const contacto3 = new ContactoClass("Brandy", false);

  const [contactos, setContactos] = useState([
    contacto1,
    contacto2,
    contacto3]);

  function eliminarContacto(contacto) {
    const index = contactos.indexOf(contacto);
    const tempContactosList = [...contactos];
    tempContactosList.splice(index, 1);
    setContactos(tempContactosList);
  }
  function conectar(contacto) {
    const index = contactos.indexOf(contacto);
    const tempContactosList = [...contactos];
    tempContactosList[index].conectado = !tempContactosList[index].conectado;
    setContactos(tempContactosList);
  }

  function agregarContacto(contacto) {
    const tempContactosList = [...contactos];
    tempContactosList.push(contacto);
    setContactos(tempContactosList);
  }
  return (
    <div>
    <header>
        <ContactoForm add={agregarContacto}></ContactoForm>
    </header>
      {contactos.map((datos, index) => {
        return (
          <ContactoComponent
            key={index}
            contacto={datos}
            remove={eliminarContacto}
            toggleConectado={conectar}
          ></ContactoComponent>
        );
      })}
    </div>
  );
};

export default ContactoLista;
