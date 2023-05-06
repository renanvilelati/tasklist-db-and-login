import styled from 'styled-components';

export const ErrorPageContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  h1 {
    font-size: 3rem;
  }

  a {
    color: #fff;
    text-decoration: none;
    background-color: #3366ff;
    padding: 1rem 2rem;
    border-radius: 4px;
  }
`;
