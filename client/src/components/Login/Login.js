import React, { useState } from "react";
import Swal from "sweetalert2";
import "react-toastify/dist/ReactToastify.css";
import closeIcon from "../../icons/closeIcon.png";
import "./Login.css";
import Axios from "axios";
export default function Login() {
  const [username, setUsername] = useState("");
  const [pass, setpass] = useState("");
  const [showhide, setshowhide] = useState(false);
  const [uname, setuname] = useState("");
  const [passwor, setpasswor] = useState("");
  const [loginstatus, setloginstatus] = useState("");

  const handlesubmit = (event) => {
    event.preventDefault();
    Swal.fire({
      title: "Registered",
      text: "You can use your username and password for login",
      icon: "success",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "OK",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload(5000);
      }
    });
  };
  const register12 = () => {
    Axios.post("http://localhost:5000/login", {
      username: username,
      pass: pass,
    }).then(() => {
      console.log("success");
    });
  };
  const logins = (event) => {
    event.preventDefault();
    Axios.post("http://localhost:5000/logins", {
      uname: uname,
      passwor: passwor,
    }).then((response) => {
      if (response.data.message) {
        //setloginstatus(response.data.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Invalid username/password!",
        });
      } else {
        window.open(`/Join`, "_self");
        // window.close("/");
      }
    });
  };
  return (
    <div className="whole">
      <div className="box12">
        <div className="glass12"></div> &gt;
        <div className="content12">
          <h1 className="login_name">Login</h1>
          <form className="form12">
            <label>Username:</label>
            <input
              type="text"
              onChange={(event) => {
                setuname(event.target.value);
              }}
            />
            <label>Password:</label>
            <input
              type="password"
              onChange={(event) => {
                setpasswor(event.target.value);
              }}
            />
            <span style={{ color: "white" }}>{loginstatus}</span>

            <button
              style={{ textDecoration: "none" }}
              className="btn btn-primary"
              onClick={logins}
            >
              Login
            </button>

            <p className="spanning" onClick={() => setshowhide(true)}>
              Create account
            </p>
          </form>
        </div>
      </div>
      {showhide ? (
        <div className="register">
          <a href="/" style={{ float: "right", marginRight: "10px" }}>
            <img src={closeIcon} alt="close icon" />
          </a>

          <h1 style={{ textAlign: "center" }}>Registration </h1>
          <form className="form12" onSubmit={handlesubmit}>
            <label>Username:</label>

            <input
              type="text"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
            <label>Password:</label>
            <input
              type="password"
              onChange={(event) => {
                setpass(event.target.value);
              }}
            />
            <button className="btn btn-primary" onClick={register12}>
              Register
            </button>
          </form>
        </div>
      ) : null}
    </div>
  );
}
