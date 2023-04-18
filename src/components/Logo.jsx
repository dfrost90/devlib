import styled from 'styled-components';

const Logo = () => {
  return (
    <Wrapper href="/">
      dev<span>LIB</span>
    </Wrapper>
  );
};

const Wrapper = styled.a`
  color: var(--clr-logo-text);
  font-family: 'Khand', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: var(--spacing);
  margin: 0;
  text-transform: none;
  user-select: none;
  transition: color 0.3s;

  span {
    color: var(--clr-primary-5);
  }
`;

export default Logo;
