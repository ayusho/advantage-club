import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CompanyCard from "./components/Company";
import data from "./data";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

function App() {
  return (
    <div className="App">
      <Grid container spacing={3}>
        {data.map((card) => (
          <Grid item xs={3}>
            <CompanyCard data={card} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default App;
