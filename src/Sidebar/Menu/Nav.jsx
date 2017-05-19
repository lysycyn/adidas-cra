import styled from 'styled-components';

export default styled.nav`
  display: flex;
  flex-direction: column;
  text-align: center;
  ${props => props.isSub && `
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    margin-bottom: 2.25rem;
    display: flex;
  `}
`;
