import React from 'react';
import styled, { css } from 'styled-components';

import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
  ${({ paddingAll }) => css`
    padding: ${paddingAll};
  `}
`;


function PageDefault({ children, paddingAll }) {
  return (
    <>
      <Menu />
        <Main paddingAll={paddingAll}>
          {children}
        </Main>
      <Footer />
    </>
  );
}

export default PageDefault;