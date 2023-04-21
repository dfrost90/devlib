import styled from 'styled-components';
import { FiSearch, FiX } from 'react-icons/fi';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import { useFilterContext } from '../context/filter_context';
import { useGlobalContext } from '../context/global_context';
const Search = () => {
  const {
    filters: { search },
    updateFilters,
    clearFilters,
  } = useFilterContext();

  const { searchMode, closeSearch } = useGlobalContext();

  const handleSubmit = (e) => e.preventDefault();

  return (
    <Wrapper>
      {searchMode && (
        <button type="button" className="back-btn" onClick={closeSearch}>
          <HiOutlineArrowLeft />
        </button>
      )}
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
            value={search}
            onChange={updateFilters}
          />
          <button className="clear-btn" type="button" onClick={clearFilters}>
            <FiX />
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: var(--clr-body-background);
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  align-items: end;
  padding: 0 5vw;

  @media screen and (min-width: 992px) {
    position: static;
  }

  .form {
    margin: 0 auto;
    max-width: var(--fixed-width);
    flex: 1 0 auto;
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
    height: 3rem;
    padding: 0.75rem 3rem 0.75rem 3rem;
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

  .clear-btn {
    background: transparent;
    border: 0;
    color: var(--clr-primary-8);
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 3rem;
    transition: all 0.3s;
  }

  .clear-btn:hover {
    background-color: var(--clr-search-hover);
    color: var(--clr-white);
  }

  .back-btn {
    background-color: transparent;
    border: 0;
    height: 3rem;
    width: 3rem;
    font-size: 1.2rem;
    color: var(--clr-primary-8);

    @media screen and (min-width: 992px) {
      display: none;
    }
  }
`;

export default Search;
