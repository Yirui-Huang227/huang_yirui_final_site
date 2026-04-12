import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Home from './pages/Home';
import Work from './pages/Work';
import Resources from './pages/Resources';
import DeveloperSetup from './pages/DeveloperSetup';

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
  padding: 1rem 2rem;
  background: #1f2933;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: bold;
`;

function App() {
  return (
    <BrowserRouter>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/work">Work</NavLink>
        <NavLink to="/resources">Resources</NavLink>
        <NavLink to="/developer-setup">Developer Setup</NavLink>
      </Nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/developer-setup" element={<DeveloperSetup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
