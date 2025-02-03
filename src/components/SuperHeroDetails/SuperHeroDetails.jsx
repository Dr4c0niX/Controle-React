import { useState, useEffect } from "react";
import { useParams } from "react-router";
import "./superherodetails.scss";

export default function SuperHeroDetails() {
    const { id } = useParams();
    const [hero, setHero] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchHeroDetails = async () => {
            try {
                const response = await fetch(`https://corsproxy.io/https://superheroapi.com/api/ba89627ef6d5cdd0d38c2317d97be959/${id}`);
                if (!response.ok) {
                    throw new Error("Erreur lors de la récupération des données");
                }
                const data = await response.json();
                setHero(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchHeroDetails();
    }, [id]);

    if (isLoading) {
        return <div className="loader"></div>;
    }

    if (error) {
        return <div className="alert alert-danger">{error}</div>;
    }

    return (
        <div className="hero-details-container">
            {hero && (
                <div className="card">
                    <img src={hero.image.url} alt={hero.name} className="card-img-top " />
                    <div className="card-body">
                        <h5 className="card-title">{hero.name}</h5>
                        <p className="card-text"><strong>Nom complet:</strong> {hero.biography["full-name"]}</p>
                        <p className="card-text"><strong>Publisher:</strong> {hero.biography.publisher}</p>
                        <p className="card-text"><strong>Première apparition:</strong> {hero.biography["first-appearance"]}</p>
                        <p className="card-text"><strong>Alignement:</strong> {hero.biography.alignment}</p>
                        <h6><strong>Statistiques :</strong></h6>
                        <ul>
                            <li>- Intelligence: {hero.powerstats.intelligence}</li>
                            <li>- Force: {hero.powerstats.strength}</li>
                            <li>- Vitesse: {hero.powerstats.speed}</li>
                            <li>- Durabilité: {hero.powerstats.durability}</li>
                            <li>- Puissance: {hero.powerstats.power}</li>
                            <li>- Combat: {hero.powerstats.combat}</li>
                        </ul>
                        <h6><strong>Biographie :</strong></h6>
                        <ul>
                            <li>- Nom complet: {hero.biography["full-name"]}</li>
                            <li>- Alter ego: {hero.biography["alter-egos"]}</li>
                            <li>- Alias: {hero.biography.aliases.join(", ")}</li>
                            <li>- Lieu de naissance: {hero.biography["place-of-birth"]}</li>
                            <li>- Première apparition: {hero.biography["first-appearance"]}</li>
                            <li>- Publisher: {hero.biography.publisher}</li>
                            <li>- Alignement: {hero.biography.alignment}</li>
                        </ul>
                        <h6><strong>Apparence :</strong></h6>
                        <ul>
                            <li>- Genre: {hero.appearance.gender}</li>
                            <li>- Race: {hero.appearance.race}</li>
                            <li>- Taille: {hero.appearance.height.join(" / ")}</li>
                            <li>- Poids: {hero.appearance.weight.join(" / ")}</li>
                            <li>- Couleur des yeux: {hero.appearance["eye-color"]}</li>
                            <li>- Couleur des cheveux: {hero.appearance["hair-color"]}</li>
                        </ul>
                        <h6><strong>Travail :</strong></h6>
                        <ul>
                            <li>- Occupation: {hero.work.occupation}</li>
                            <li>- Base: {hero.work.base}</li>
                        </ul>
                        <h6><strong>Connexions :</strong></h6>
                        <ul>
                            <li>- Groupe d'affiliation: {hero.connections["group-affiliation"]}</li>
                            <li>- Relations: {hero.connections.relatives}</li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}