import { Link , useNavigate} from "react-router-dom";
import {auth} from "../../firebase"


const Home = (props) => {
  const salir = () =>{
    return auth.signOut()
    navigate("/");
  }
   const  {name} = props
  return (
    <div>
      <div>
        <h1>
          <Link to="/login">Login</Link>
        </h1>
        <br />
        <h1>
          <Link to="/singup">Registrar</Link>
        </h1>
      </div>
      <h2>{name? `Bienvenido - ${name}`:"Iniciar Sesion"}</h2>
      <button onClick={salir}>Salir</button>
    </div>
  );
};

export default Home;
