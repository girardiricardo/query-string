import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import { AgrotisUIProvider } from "agrotis-ui";

import Tela1 from "./pages/Tela1";
import Tela2 from "./pages/Tela2";
import Tela3 from "./pages/Tela3";

function App() {
  return (
    <AgrotisUIProvider>
      <BrowserRouter>
        <Route exact path="/" component={Tela1} />
        <Route exact path="/2" component={Tela2} />
        <Route exact path="/3" component={Tela3} />
      </BrowserRouter>
    </AgrotisUIProvider>
  );
}

export default App;
