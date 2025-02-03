import "./header.scss";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../../auth/AuthProvider";

export default function Header() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
        window.location.reload();
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark intro-content card">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    SuperHeroes
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        {user && (
                            <Link to="/contact" className="nav-link">
                                Contact
                            </Link>
                        )}
                        {user ? (
                            <button onClick={handleLogout} className="btn btn-link nav-link">
                                Deconnexion
                            </button>
                        ) : (
                            <Link to="/loginout-page" className="nav-link">
                                Connexion
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}