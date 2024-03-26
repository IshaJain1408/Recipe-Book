
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Searched = () => {
    const [searched, setSearched] = useState([]);
    const params = useParams();

    const getSearched = async (name) => {
        try {
            const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            // Save data to local storage
            localStorage.setItem('searchedRecipes', JSON.stringify(data.results));
            setSearched(data.results);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        // Check if data exists in local storage
        const storedData = localStorage.getItem('searchedRecipes');
        if (storedData) {
            setSearched(JSON.parse(storedData));
        } else {
            getSearched(params.search);
        }
    }, [params.search]);

    return (
        <Grid>
            {searched.map((item) => (
                <Card key={item.id}>
                    <Link to={`/recipe/${item.id}`}>
                        <img src={item.image} alt={item.title} />
                        <h4>{item.title}</h4>
                    </Link>
                </Card>
            ))}
        </Grid>
    );
};

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
`;

const Card = styled.div`
    img {
        width: 100%;
        border-radius: 2rem;
    }

    h4 {
        text-align: center;
        padding: 1rem;
    }
`;

export default Searched;
