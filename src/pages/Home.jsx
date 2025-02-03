import "bootstrap/dist/css/bootstrap.min.css";
import "./home.scss";
import SearchBar from "../components/SearchBar/SearchBar";
import { useAuth } from "../auth/AuthProvider";

export default function Home() {
    const { user } = useAuth();

    return (
        <div className="container d-flex flex-column justify-content-center align-items-center">
            <div className="hero-content text-center text-white mb-4">
                <h1>Bienvenue sur notre site de super héros</h1>
                <p>Trouvez et découvrez des informations sur vos super héros préférés.</p>
            </div>
            <div className="intro-content card p-4 mb-4 text-white hero">
                <h2 className="text-center text-white">Introduction</h2>
                <p>Notre site vous permet de rechercher et d'obtenir des informations détaillées sur une multitude de super héros. Que vous soyez un fan de longue date ou un nouveau venu, vous trouverez tout ce dont vous avez besoin ici.</p>
            </div>
            {user && <SearchBar />}
        </div>
    );
}