import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import './Category.css'
const Category = () => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-wrap mt-4">
      <NavLink to={'/cuisine/Italian'} className="category-link mx-2 my-2">
        <FaPizzaSlice className="category-icon" />
        <h4 className="category-text">Italian</h4>
      </NavLink>
      <NavLink to={'/cuisine/American'} className="category-link mx-2 my-2">
        <FaHamburger className="category-icon" />
        <h4 className="category-text">American</h4>
      </NavLink>
      <NavLink to={'/cuisine/Thai'} className="category-link mx-2 my-2">
        <GiNoodles className="category-icon" />
        <h4 className="category-text">Thai</h4>
      </NavLink>
      <NavLink to={'/cuisine/Japanese'} className="category-link mx-2 my-2">
        <GiChopsticks className="category-icon" />
        <h4 className="category-text">Japanese</h4>
      </NavLink>
    </div>
  );
};



export default Category;
