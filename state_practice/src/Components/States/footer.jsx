import React, { useContext } from "react";
import { AppContext } from "./Context/AppContext";

function Footer() {

    const phone = useContext(AppContext)

  return (
    <div>
      <footer>
        <p>© 2023 My Website</p>
        <p>Contact:{phone}</p>
      </footer>
    </div>
  );
}

export default Footer;