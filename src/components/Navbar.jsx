import { useGlobalContext } from '../context/global_context';
import { Logo, Search, NavMenu } from './';

import styled from 'styled-components';

const Navbar = () => {
  const { searchMode } = useGlobalContext();

  return (
    <Wrapper>
      <div className="nav-center">
        <Logo />
        <section className={searchMode ? 'show-mobile' : 'hide-mobile'}>
          <Search />
        </section>
        <NavMenu />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0 0;
  position: relative;

  .hide-mobile {
    @media (max-width: 992px) {
      display: none;
    }
  }

  .show-mobile {
    @media (max-width: 992px) {
      display: block;
    }
  }

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
