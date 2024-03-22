import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components';
import { useParams } from 'react-router-dom';
const Recipe = () => {
    const [details,setDetails]=useState({});
    const [active,setActive]=useState('instructions');


    let params=useParams()
    const FetchDetails=async()=>{
        const data=await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
        const detailsData=await data.json()
        setDetails(detailsData)
    }
    useEffect(()=>{
        FetchDetails()
    },[params.name])
  return (
    <DetailWrapper className="container">
    <div className="row">
        <div className="col-lg-6 col-md-12">
            <RecipeImage className='image-fluid' src={details.image} alt='' />
            <h2>{details.title}</h2>
        </div>
        <div className="col-lg-6 col-md-12">
            <Info>
                <ButtonWrapper>
                    <Button className={active === 'instructions' ? 'active' : ''} onClick={() => setActive('instructions')}>Instructions</Button>
                    <Button className={active === 'ingredients' ? 'active' : ''} onClick={() => setActive('ingredients')}>Ingredients</Button>
                </ButtonWrapper>
                {active === 'instructions' && (
                    <div>
                        <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
                        <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
                    </div>
                )}
                {active === 'ingredients' && (
                    <ul>
                        {details.extendedIngredients.map((ingredient) =>
                            <li key={ingredient.id}>{ingredient.original}</li>
                        )}
                    </ul>
                )}
            </Info>
        </div>
    </div>
</DetailWrapper>
  )
}
const DetailWrapper = styled.div`
    margin-top: 5rem;
    margin-bottom: 5rem;
    h2 {
        margin-bottom: 2rem;
    }
    li {
        font-size: 1.2rem;
        line-height: 2.5rem;
    }
    ul {
        margin-top: 2rem;
    }
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
    align-items:center;
    gap:12px;
`;

const RecipeImage = styled.img`
    width: 100%;
    border-radius: 0.5rem;
`;

const Button = styled.div`
    padding: 1rem 1rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    cursor: pointer;
    font-weight: 600;
    &.active {
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
    }
`;

const Info = styled.div`
    @media (max-width: 768px) {
        margin-left: 0;
    }
`;
export default Recipe;