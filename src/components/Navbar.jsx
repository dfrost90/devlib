import { useState } from 'react';
import { Logo, Search, NavMenu } from './';

import styled from 'styled-components';

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <Wrapper>
      <div className="nav-center">
        <Logo />
        <Search showSearch={showSearch} setShowSearch={setShowSearch} />
        <NavMenu showSearch={showSearch} setShowSearch={setShowSearch} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0 0;

  .nav-center {
    align-items: baseline;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: var(--max-width);
    width: 90vw;
  }

  @media (min-width: 992px) {
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
  }
`;

export default Navbar;
