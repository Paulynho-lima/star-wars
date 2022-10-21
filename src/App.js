/* eslint-disable quotes */
import React from "react";
import "./App.css";
import Table from "./component/Table";
import InputSearch from "./component/InputSearch";
import StarProvider from "./context/StarProvider";
import ColumSelect from "./component/SelectForm";

function App() {
  return (
    <StarProvider>
      <div className="divmain">
        <span>
          <h1>Star Wars Planets</h1>
        </span>
        <div className="inputs">
          <InputSearch />
          <ColumSelect />
        </div>
        <Table />
      </div>
    </StarProvider>
  );
}

export default App;
