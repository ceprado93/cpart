import { Switch, Route } from "react-router-dom";
import Grabados from "../pages/Grabados";
import Art from "../pages/Art";
import Bio from "../pages/Bio";
import Contact from "../pages/Contact";

import Home from "../pages/Home";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/arte" exact render={() => <Art />} />
        <Route path="/grabados" exact render={() => <Grabados />} />
        <Route path="/bio" exact render={() => <Bio />} />
        <Route path="/contacto" exact render={() => <Contact />} />
      </Switch>
    </>
  );
};

export default Routes;
