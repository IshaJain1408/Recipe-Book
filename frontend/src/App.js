import Category from './components/Category';
import Search from './components/Search';
import { Segments } from './pages/Segments';
import { BrowserRouter } from "react-router-dom"
import styled from 'styled-components';
import { GiKnifeFork } from 'react-icons/gi';
import { Link } from 'react-router-dom';
const App = () => {


  return (
    <div className='App'>
       <BrowserRouter>
       <Nav>
       <GiKnifeFork/>
        <Logo to={"/"}>Recipe Book</Logo>
       </Nav>
<Search/>
   <Category/>
    <Segments/>
    </BrowserRouter>
    </div>
  );
};
const Logo=styled(Link)`
text-decoration:none;
font-size:1.5rem;
font-weight:400;
font-family:'Lobster Two', cursive;

`
const Nav=styled.div`
padding:4rem 8rem;
display:flex;
justify-content:center;
align-item:center;
 
 svg{
  font-size:2rem;

 }


`

export default App;
