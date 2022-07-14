import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import PortfolioIndex from "../../components/PortfolioIndex/PortfolioIndex";
// import EditPortfolio from "../../components/EditPortfolio/EditPortfolio";
// import AddToPortfolio from "../../components/AddToPortfolio/AddToPortfolio";
import styles from "../../components/Button/Button.module.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h2>MERN-Stack Portfolio App</h2>
          <div className="container">
            {/* <Route path="/" exact component={PortfolioIndex} />
            <Route path="/edit/:id" component={EditPortfolio} />
            <Route path="/add" component={AddToPortfolio} /> */}
          </div>
          <button className="btn" onClick={() => alert("I am globally styled")}>
            I am button 1 - Press Me
          </button>
          <button
            className={styles.btn}
            onClick={() => alert("I am globally styled with css Modules")}
          >
            I am button 2 - Press Me
          </button>{" "}
        </header>
      </div>
    </Router>
  );
}

export default App;
