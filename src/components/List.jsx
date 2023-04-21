import styled from 'styled-components';
import Item from './Item';
import { useFilterContext } from '../context/filter_context';

const List = () => {
  const { filteredData: list } = useFilterContext();

  return (
    <Wrapper>
      {/* items list */}
      {list.map((item) => {
        return <Item key={item.libID} {...item} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  margin: 2rem auto;
  max-width: var(--max-width);
  width: 90vw;

  @media screen and (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 95vw;
  }
`;

export default List;
