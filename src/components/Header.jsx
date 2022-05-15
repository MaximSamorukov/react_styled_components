import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { Container } from './Container';
import { IoMoon, IoMoonOutline } from "react-icons/io5";

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: (--colors-ui-base);

`;

const WrapperEl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const Title = styled.a.attrs({
  href: '/',
})`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;

const ModeSwitcher = styled.div`
color: var(--colors-text);
font-size: var(--fs-sm);
cursor: pointer;
font-weight: var(--fw-bold);
text-transform: capitalize;
`;

export default function Header() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => setTheme((currentTheme) => currentTheme === 'light' ? 'dark' : 'light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme])

  return (
    <HeaderEl>
      <Container>
        <WrapperEl>
          <Title>Where is the world?</Title>
          <ModeSwitcher onClick={toggleTheme}>
            {theme === 'light' ? (<IoMoon size="14px" />) : (<IoMoonOutline size="14px" />)}
            <span style={{ marginLeft: '0.75rem' }}>{theme === 'light' ? 'Light' : 'Dark'} Theme</span>
          </ModeSwitcher>
        </WrapperEl>
      </Container>
    </HeaderEl>
  )
}
