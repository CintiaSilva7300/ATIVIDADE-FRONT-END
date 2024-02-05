import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./src/component/Home";
import Contato from "./src/component/contato";

export default function RoutesConfig() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />

        {/* <Route path="/error" component={Error} /> */}

        {/* criar rota de erro */}
      </Routes>
    </Router>
  );
}
