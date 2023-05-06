import { BrowserRouter } from 'react-router-dom';
import { RouterApp } from './routes';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <BrowserRouter>
      <RouterApp />
      <ToastContainer autoClose={3000} />
    </BrowserRouter>
  );
};
