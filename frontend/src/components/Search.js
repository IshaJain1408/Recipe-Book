
import React, { useState } from 'react';
import { styled } from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const submit1 = (e) => {
        e.preventDefault();
        navigate('/searched/' + input);
    };

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    return (
        <CustomSearchBar>
        <div className="container">
        <form onSubmit={submit1} className="d-flex justify-content-center align-items-center">
            <div className="input-group">
                <span className="input-group-text bg-transparent border-0">
                    <FaSearch />
                </span>
                <input 
                    onChange={handleInputChange}
                    type='text'
                    value={input}
                    className="form-control bg-transparent border-0"
                    placeholder="Search..."
                />
            </div>
        </form>
    </div>
    </CustomSearchBar>
    );
};

const CustomSearchBar = styled.div`
    background-color: #f8f9fa; /* Custom background color */
    padding: 10px; /* Custom padding */
    border-radius: 10px; /* Custom border radius */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Custom box shadow */
`;

export default Search;


