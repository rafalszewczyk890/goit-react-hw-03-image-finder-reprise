import { Routes, Route, NavLink } from 'react-router-dom';

import { User } from './User';
import { Start } from './pages/Start';
import { UserPage } from './pages/UserPage';
import { NotFound } from './pages/NotFound';
import { AboutPage } from './pages/AboutPage';
import styled from 'styled-components';
import { ProductsPage } from './pages/ProductsPage';

const StyledNavLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export const App = () => {
  return (
    <div>
      <nav>
        <p>
          <StyledNavLink to="/">Start</StyledNavLink>
        </p>
        <p>
          <StyledNavLink to="/user">User</StyledNavLink>
        </p>
        <p>
          <StyledNavLink to="/user-page">User Page</StyledNavLink>
        </p>
        <p>
          <StyledNavLink to="/about-page">About</StyledNavLink>
        </p>
        <p>
          <StyledNavLink to="/products">Products</StyledNavLink>
        </p>
      </nav>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="user" element={<User />} />
        <Route path="user-page" element={<UserPage />} />
        <Route path="about-page" element={<AboutPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
