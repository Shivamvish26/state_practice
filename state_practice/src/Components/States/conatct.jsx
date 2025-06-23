import React, { useContext } from "react";
import { AppContext } from "./Context/AppContext";

const Contact = () => {
  const { phone, email } = useContext(AppContext);

  return (
    <div>
      <h1>Contact</h1>
      <h3>Phone:{phone}</h3>
      <h4>Email:{email}</h4>
    </div>
  );
};``

export default Contact;
