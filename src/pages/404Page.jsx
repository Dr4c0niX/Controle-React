import { useNavigate } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import './404page.scss';

export default function NotFound() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="not-found-form card p-4">
        <h3 className="text-center text-white">Erreur 404</h3>
        <p className="text-center text-white">La page que vous cherchez n'existe pas.</p>
        <div className="text-center mt-4">
          <button onClick={handleRedirect} className="btn btn-light">Retour à l'accueil</button>
        </div>
      </div>
    </div>
  );
}