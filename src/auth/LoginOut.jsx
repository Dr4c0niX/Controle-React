import { useAuth } from "./AuthProvider";
import { useState } from "react";
import { useNavigate } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import './loginout.scss';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="login-form card p-4">
        <h3 className="text-center text-white">Se connecter</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label text-white">Nom d'utilisateur:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Nom d'utilisateur"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-white">Mot de passe:</label>
            <input
              type="password"
              className="form-control"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-outline-light w-100">Se connecter</button>
        </form>
      </div>
    </div>
  );
}

function Logout() {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="logout-form card p-4">
        <h3 className="text-center text-white">Se déconnecter</h3>
        <button onClick={handleLogout} className="btn btn-outline-light w-100">Se déconnecter</button>
      </div>
    </div>
  );
}

export { Login, Logout };