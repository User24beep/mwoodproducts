import "./App.css";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import WorkInProgress from "./components/WorkInProgress";
import Impressum from "./components/Impressum";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <div className="bg-wood-light">
                  <Header></Header>
                </div>
                <div className="bg-wood-dark p-3">
                  <Main />
                </div>
                <div className="bg-wood-light">
                  <Footer />
                </div>
              </main>
            }
          ></Route>
          <Route
            path="/start"
            element={
              <main>
                <div className="bg-wood-light">
                  <Header></Header>
                </div>
                <div className="bg-wood-dark p-3">
                  <Main />
                </div>
                <div className="bg-wood-light">
                  <Footer />
                </div>
              </main>
            }
          ></Route>
          <Route
            path="/ueber-uns"
            element={
              <main>
                <div className="bg-wood-light">
                  <Header></Header>
                </div>
                <div className=" p-3">
                  <WorkInProgress></WorkInProgress>
                </div>
                <div className="bg-wood-light">
                  <Footer />
                </div>
              </main>
            }
          ></Route>
          <Route
            path="/kontakt"
            element={
              <main>
                <div className="bg-wood-light">
                  <Header></Header>
                </div>
                <div className="p-3">
                  <WorkInProgress></WorkInProgress>
                </div>
                <div className="bg-wood-light">
                  <Footer />
                </div>
              </main>
            }
          ></Route>
          <Route
            path="/impressum"
            element={
              <main>
                <div className="bg-wood-light">
                  <Header></Header>
                </div>
                <div className="p-3">
                  <Impressum />
                </div>
              </main>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
