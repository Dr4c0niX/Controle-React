import { useState } from "react";
import { Link } from "react-router";
import "./searchbar.scss";

export default function SearchBar() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(`https://corsproxy.io/https://superheroapi.com/api/ba89627ef6d5cdd0d38c2317d97be959/search/${query}`);
            if (!response.ok) {
                throw new Error("Erreur lors de la récupération des données");
            }
            const data = await response.json();
            if (data.response === "error") {
                setError("Aucun résultat trouvé");
                setResults([]);
            } else {
                setResults(data.results || []);
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="search-bar-container">
            <form onSubmit={handleSearch} className="d-flex mb-4">
                <input
                    type="text"
                    className="form-control me-2"
                    placeholder="Rechercher un super héros..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit" className="btn btn-light">Rechercher</button>
            </form>
            {isLoading && <div className="loader"></div>}
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="results row">
                {results.map((hero) => (
                    <div key={hero.id} className="col-md-4 mb-4">
                        <div className="card h-100">
                            <Link to={`/hero/${hero.id}`}>
                                <img src={hero.image.url} alt={hero.name} className="card-img-top" />
                            </Link>
                            <div className="card-body">
                                <h5 className="card-title">{hero.name}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}