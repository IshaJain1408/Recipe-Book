import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { styled } from 'styled-components';
import { Link } from "react-router-dom";
const HighlyRated = () => {
    const [rated, setRated] = useState([]);

    useEffect(() => {
        getHighlyRated();
    }, []);

    const getHighlyRated = async () => {
        const check = localStorage.getItem('rated');
        if (check) {
            setRated(JSON.parse(check));
        } else {
            try {
                const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=19`);
                const data = await api.json();
                localStorage.setItem('rated', JSON.stringify(data.recipes));
                setRated(data.recipes);
                console.log(data.recipes);
            } catch (error) {
                console.error("Error fetching highly rated recipes:", error);
            }
        }
    }

    return (
        <div className="container my-4">
            <h3 className="text-center mb-4">Highly Rated Picks</h3>
            <Splide options={{
                perPage: 4,
                arrows: false,
                pagination: false,
                drag: 'free',
                gap: "2rem"
            }}>
                {rated.map((recipe, index) => (
                    <SplideSlide key={index}>
                        <div className="card">
                            <Link to={'/recipe/'+recipe.id}>
                                <img className="card-img-top" src={recipe.image} alt={recipe.title} />
                                <div className="card-img-overlay d-flex align-items-end">
                                    <div className="text-white w-100 p-2" style={{ background: 'rgba(0,0,0,0.5)' }}>
                                        <h5 className="card-title">{recipe.title}</h5>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
}

export default HighlyRated;