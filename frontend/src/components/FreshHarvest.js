
// import React, { useEffect, useState } from "react";
// import { Splide, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/splide/dist/css/splide.min.css';
// import { Link } from "react-router-dom";

// import { styled } from 'styled-components';


// export const FreshHarvest = () => {
//     const [veggie, setVeggie] = useState([]);

//     useEffect(() => {
//         getVeggie();
//     }, []);

//     const getVeggie = async () => {
//         const check = localStorage.getItem('veggie');
//         if (check) {
//             setVeggie(JSON.parse(check));
//         } else {
//             try {
//                 const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`);
//                 const data = await api.json();
//                 localStorage.setItem('veggie', JSON.stringify(data.recipes));
//                 setVeggie(data.recipes);
//                 console.log(data.recipes);
//             } catch (error) {
//                 console.error("Error fetching highly rated recipes:", error);
//             }
//         }
//     }


//     const Wrapper = styled.div`
//     margin: 4rem 0rem;
// `;

// const Card = styled.div`
//     min-height: 13rem;
//     border-radius: 2rem;
//     overflow: hidden;
//     position: relative;

//     img {
//         border-radius: 2rem;
//         position: absolute;
//         left: 0;
//         width: 100%;
//         height: 100%;
//         object-fit: cover;
//     }
// `;

// const Text = styled.p`
//     position: absolute;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     z-index: 10;
//     left: 50%;
//     bottom: 0%;
//     transform: translate(-50%, 0%);
//     color: white;
//     width: 100%;
//     text-align: center;
//     font-weight: 600;
//     font-size: 1rem;
//     height: 40%;
// `;

// const Gradient=styled.div` 
// z-index:3;
// position:absolute;
// width:100%;
// height:100%;
// background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5))
// `

//   return (
//     <Wrapper>
//     <h3 className="my-4 text-center">Highly Rated Vegetarian Picks</h3>
//     <Splide options={{
//         perPage: 3,
//         arrows: false,
//         pagination: false,
//         drag: 'free',
//         gap: "5rem"
//     }}>
//         {veggie.map((recipes, index) => (
//             <SplideSlide key={index}>
//                 <Card>
//                 <Link to={'/recipe/'+recipes.id}>
//                     <Text>{recipes.title}</Text>
//                     <img className="card-img-top border-0" src={recipes.image} alt={recipes.title} />
//                     <Gradient/>
//                     </Link>

//                 </Card>
//             </SplideSlide>
//         ))}
//     </Splide>
// </Wrapper>  )

// }
import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from "react-router-dom";
import { styled } from 'styled-components';

export const FreshHarvest = () => {
    const [veggie, setVeggie] = useState([]);

    useEffect(() => {
        getVeggie();
    }, []);

    const getVeggie = async () => {
        const check = localStorage.getItem('veggie');
        if (check) {
            setVeggie(JSON.parse(check));
        } else {
            try {
                const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`);
                const data = await api.json();
                localStorage.setItem('veggie', JSON.stringify(data.recipes));
                setVeggie(data.recipes);
                console.log(data.recipes);
            } catch (error) {
                console.error("Error fetching highly rated recipes:", error);
            }
        }
    }

    return (
        <div className="container my-4">
            <h3 className="text-center mb-4">Highly Rated Vegetarian Picks</h3>
            <Splide options={{
                perPage: 3,
                arrows: false,
                pagination: false,
                drag: 'free',
                gap: "5rem"
            }}>
                {veggie.map((recipes, index) => (
                    <SplideSlide key={index}>
                        <div className="card">
                            <Link to={'/recipe/' + recipes.id}>
                                <img className="card-img-top" src={recipes.image} alt={recipes.title} />
                                <div className="card-img-overlay d-flex align-items-end">
                                    <div className="text-white w-100 p-2" style={{ background: 'rgba(0,0,0,0.5)' }}>
                                        <h5 className="card-title">{recipes.title}</h5>
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
