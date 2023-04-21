import styled from 'styled-components';
import { FiExternalLink, FiTrash2 } from 'react-icons/fi';
import { useGlobalContext } from '../context/global_context';
import { useAuthContext } from '../context/auth_context';
import { useFilterContext } from '../context/filter_context';

const Item = ({
  libID: id,
  libName: title,
  libInfo: description,
  libUrl: url,
  libCategories: categories,
}) => {
  const { openModal } = useGlobalContext();
  const { authUser } = useAuthContext();
  const { updateFilters } = useFilterContext();

  const handleTagClick = (e) => {
    updateFilters(e, e.target.innerText, 'search');
  };

  return (
    <Wrapper>
      <header>
        <h5>{title}</h5>
        {authUser && (
          <button
            className="btn remove-btn"
            type="button"
            onClick={() => openModal('remove-item-modal', id)}
          >
            <FiTrash2 />
          </button>
        )}
        <a href={url} target="_blank">
          <FiExternalLink />{' '}
        </a>
      </header>
      <p>{description}</p>
      <div>
        {categories.split(',').map((category, index) => {
          return (
            <button
              className="btn tag-btn"
              type="button"
              key={index}
              onClick={handleTagClick}
            >
              {category}
            </button>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  background-color: var(--clr-item-background);
  border: 1px solid var(--clr-item-border);
  padding: 1.5rem;
  transition: background-color 0.3s;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
  }

  h5 {
    padding-right: 1rem;
    margin-bottom: 0;
  }

  a {
    color: var(--clr-primary-8);
    padding: 0.375rem 0.75rem;
    margin-right: -0.75rem;
  }

  .remove-btn {
    background-color: transparent;
    color: var(--clr-red-light);
    margin-left: auto;
    opacity: 0;
  }

  :hover .remove-btn {
    opacity: 0.25;
  }

  :hover .remove-btn:hover {
    opacity: 1;
  }

  p {
    color: var(--clr-item-text);
    font-size: 0.88rem;
    margin-bottom: 0.5rem;
    transition: color 0.3s;
  }

  .tag-btn {
    background-color: var(--clr-category-background);
    color: var(--clr-category-text);
    display: inline-block;
    font-family: 'Switzer', sans-serif;
    letter-spacing: normal;
    font-size: 12px;
    margin: 0 0.5rem 0.5rem 0;
    padding: 0.125rem 0.5rem;
    text-transform: none;
    transition: all 0.3s;
  }

  .tag-btn:hover {
    background-color: var(--clr-category-hover);
  }
`;

export default Item;
