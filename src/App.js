import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import ColorPage from "./pages/ColorPage";
import TypographyPage from "./pages/TypographyPage";
import SpacePage from "./pages/SpacePage";
import ButtonPage from "./pages/ButtonPage";
import InputPage from "./pages/InputPage";
import GridPage from "./pages/GridPage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <main>
          <aside>
            <Navbar />
          </aside>
          <section>
            <Switch>
              <Route exact path="/">
                <ButtonPage pageTitle="Buttons" />
              </Route>
              <Route path="/inputs">
                <InputPage pageTitle="Inputs" />
              </Route>
              <Route exact path="/colors">
                <ColorPage pageTitle="Colors" />
              </Route>
              <Route path="/typography">
                <TypographyPage pageTitle="Typography" />
              </Route>
              <Route path="/spaces">
                <SpacePage pageTitle="Spaces" />
              </Route>
              <Route path="/grid">
                <GridPage pageTitle="Grid" />
              </Route>
            </Switch>
            <Footer />
          </section>
        </main>
      </Router>
    </>
  );
}

export default App;
