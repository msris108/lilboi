import "./styles.css";

import Particles from "react-particles-js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Home";
import Analytics from "./Analytics";
import Navigation from "./Navigation";

export default function App() {
  const particleParams = {
    fpsLimit: 60,
    particles: {
      color: {
        value: "#6b605a"
      },
      number: {
        density: {
          enable: true,
          value_area: 1000
        },
        value: 100
      },
      opacity: {
        value: 1,
        random: false,
        anim: {
          enable: false
        }
      },
      shape: {
        type: "circle"
      },
      size: {
        random: false,
        value: 5
      }
    },
    retina_detect: true
  };
  return (
    <div className="App">
      <Particles className="particles" params={particleParams} />
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/stats">
            <Analytics />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
