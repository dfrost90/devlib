import styled from 'styled-components';
import data from '../data.json';
import Item from './Item';
import { useLibraryContext } from '../context/library_context';

const List = () => {
  const { storage: list } = useLibraryContext();

  return (
    <Wrapper>
      {/* items list */}
      {list.map((item, index) => {
        return <Item key={index} {...item} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2.5rem;
  margin: 2rem auto;
  max-width: var(--max-width);
  width: 90vw;

  @media screen and (min-width: 992px) {
    width: 95vw;
  }
`;

export default List;
