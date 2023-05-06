import { ErrorPageContainer } from './styles';
import { Link } from 'react-router-dom';

export const ErrorPage = () => {
  return (
    <ErrorPageContainer>
      <h1>404 Error - Page not found!</h1>
      <Link to='/'> Go Home </Link>
    </ErrorPageContainer>
  );
};
