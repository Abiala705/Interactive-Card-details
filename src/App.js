import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import InteractiveCard from "./components/InteractiveCard";
import InteractiveForm from "./components/Details/InteractiveForm";

function App() {
  console.log("Israel");
  return (
    <>
      <InteractiveCard />
      <InteractiveForm />
    </>
  );
}

export default App;
