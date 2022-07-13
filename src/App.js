import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import PortfolioIndex from "././components/PortfolioIndex/PortfolioIndex.jsx";
import EditPortfolio from "././components/EditPortfolio/EditPortfolio.jsx";
import AddToPortfolio from "././components/AddToPortfolio/AddToPortfolio.jsx";
import "./App.css";

// .... preloaded React App
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// export default App;
// ....End of preloaded App

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h2>MERN-Stack Portfolio App</h2>
        </header>
        <div className="container">
          <Route path="/" exact component={PortfolioIndex} />
          <Route path="/edit/:id" component={EditPortfolio} />
          <Route path="/add" component={AddToPortfolio} />
        </div>
        {/* OG preloaded react code */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {" "}
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </Router>
  );
}

export default App;
