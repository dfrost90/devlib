import styled from 'styled-components';
import data from '../data.json';
import Item from './Item';
import Search from './Search';

const List = () => {
  return (
    <Wrapper>
      {/* items list */}
      {data.map((item) => {
        return <Item key={item.id} {...item} />;
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
