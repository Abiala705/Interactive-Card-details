import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import InteractiveCard from "./components/InteractiveCard";
import InteractiveForm from "./components/Details/Form/InteractiveForm";
import { Container } from "react-bootstrap";

function App() {
  const [changeNumber, setChangeNumber] = useState("");

  const changeNumberHandler = (e) => {
    setChangeNumber(e.target.value);
  };
  return (
    <div className="row">
      <InteractiveCard className="col-5" value={changeNumber} />
      <InteractiveForm
        className="col-8 margin-md"
        change={changeNumberHandler}
        value={changeNumber}
      />
    </div>
  );
}

export default App;
