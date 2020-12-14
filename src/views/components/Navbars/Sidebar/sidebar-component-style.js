import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 16.0714rem;
  height: 100%;
  background: linear-gradient(
    45deg,
    rgba(103, 209, 172, 1) 0%,
    rgba(18, 166, 166, 1) 100%
  );
  bottom: 0;
  position: fixed;
  border-bottom: 0.0714rem solid #dddddd;
  padding-top: 5rem;
  padding-left: 2.1429rem;
  vertical-align: middle;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  padding-top: 4.2857rem;
`;

export const NavItem = styled(NavLink)`
  display: block;
  text-transform: uppercase;
  padding: 0.7143rem;
  font-size: 0.9375rem;
  position: relative;
  color: #999999;

  &.${(props) => props.activeClassName} {
    color: #444444;
  }

  svg {
    margin: 0 0.7143rem 0 0;
    width: 1.0714rem;
  }
`;
