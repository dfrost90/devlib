import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
const Search = ({ showSearch, setShowSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    console.log('handle change');
  };

  // ${showSearch ? 'block' : 'none'}

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="icon">
            <FiSearch />
          </div>
          <input
            type="search"
            id="search"
            name="search"
            className="form-input"
            placeholder={'search through libraries'}
            onChange={handleChange}
          />
        </div>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: block;

  @media screen and (min-width: 992px) {
    display: block;
  }

  .form {
    margin: 0 auto;
    max-width: var(--fixed-width);
  }

  .form-row {
    display: grid;
    grid-template-columns: 1fr auto;
    margin-bottom: 0;
    position: relative;
  }

  .form-input {
    background-color: var(--clr-search-background);
    color: var(--clr-search-text);
    border: 1px solid var(--clr-border-color);
    padding: 0.75rem 0.75rem 0.75rem 3rem;
    width: 100%;
    transition: all 0.3s;
  }

  .form-input:focus {
    box-shadow: 0 0 0 0.125rem var(--clr-primary-5);
    outline: none;
  }

  .icon {
    position: absolute;
    left: 1rem;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    color: var(--clr-primary-8);
  }
`;

export default Search;
