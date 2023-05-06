import styled from 'styled-components';

export const AdminContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;

  h1 {
    font-size: 48px;
    margin-bottom: 8px;
  }

  span {
    margin-bottom: 28px;
  }

  .button-link {
    color: #b4b8bb;
    text-decoration: none;
    margin: 14px 0;
    font-size: 14px;
  }

  a.register-link {
    color: #ccc;
    text-decoration: none;
    margin: 14px 0;
    font-size: 14px;

    &:hover {
      text-decoration: underline;
    }

    span {
      color: #3366ff;
    }
  }

  .list {
    width: 90%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    background-color: #262d40;
    border-radius: 4px;
    margin-bottom: 12px;
    margin-top: 1rem;
    justify-content: center;
    padding: 1rem;
  }

  .list p {
    margin-bottom: 8px;
  }

  .list button {
    margin-right: 8px;
    border: 0;
    border-radius: 4px;
    padding: 0.5rem 2rem;

    &:hover {
      filter: brightness(0.9);
    }
  }

  .list .btn-edit {
    color: #fff;
    background-color: #3366ff;
  }

  .btn-delete {
    color: #3366ff;
    outline: 1px solid #3366ff;
    background-color: transparent;
  }

  .btn-logout {
    position: absolute;
    top: 2%;
    right: 1%;
    padding: 0.5rem 2rem;
    border-radius: 4px;
    border: 0;
    background-color: #5c5c5cfa;
    color: #fafafa;
    transition: all 0.5s;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .btn-logout:hover {
    background-color: rgba(200, 40, 40, 1);
    color: #fafafa;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 600px;

  input {
    border: 0;
    margin-bottom: 12px;
    height: 36px;
    border-radius: 4px;
    padding: 0 8px;
  }

  button {
    height: 36px;
    border: 0;
    border-radius: 4px;
    background-color: #3366ff;
    color: #fff;
    font-size: 18px;
  }

  button.edit {
    background-color: #437e2a;
  }

  textarea {
    margin-bottom: 12px;
    border: 0;
    height: 90px;
    padding: 0.5rem;
    resize: none;
    border-radius: 4px;
  }
`;
