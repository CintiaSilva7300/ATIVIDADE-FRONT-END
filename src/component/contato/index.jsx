import { Link } from "react-router-dom";

function Contato() {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contato">Fale conosco</Link>
          </li>
        </ul>
      </div>

      <h1>Fale conosco</h1>
    </>
  );
}

export default Contato;
