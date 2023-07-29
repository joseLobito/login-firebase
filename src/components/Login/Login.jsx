import { Link, useNavigate } from "react-router-dom";
import style from "./Login.module.css";
import InputControl from "../InputControl/InputControl";
import { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({ email: "", pass: "" });
  const [errorMsg, setErrorMsg] = useState([]);
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const loguearse = () =>{
    if (!values.email || !values.pass) {
        setErrorMsg("Datos incompletos");
        return;
      }
      setErrorMsg("");
      setSubmitButtonDisabled(true);
      signInWithEmailAndPassword(auth, values.email, values.pass)
        .then(async (res) => {
          setSubmitButtonDisabled(false);
          navigate("/");
        })
        .catch((err) => {
          setSubmitButtonDisabled(false);
          setErrorMsg(err.message);
        });
  }
  return (
    <div className={style.container}>
      <div className={style.inneBox}>
        <h1 className={style.heading}>Login</h1>
        <InputControl
          label="Email"
          placeholder="Ingrese su correo"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          label="Contraseña"
          placeholder="Ingrese su conttraseña"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
        />
        <div className={style.footer}>
          <b className={style.error}>{errorMsg}</b>
          <button className={style.loginBtn} onClick={loguearse} disabled={submitButtonDisabled}>loging btn</button>
          <p>Crear cuenta</p>
          <span>
            <Link to="/singup">ir</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
