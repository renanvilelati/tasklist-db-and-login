import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HomeContainer, Form } from './styles';

import { auth } from '../../firebaseConnection';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';

export const Home = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    if (email.trim() !== '' && password.trim() !== '') {
      await signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          navigate('./admin', { replace: true });
        })
        .catch((error) => {
          toast.error('Email or password invalid');
        });
    } else {
      toast.error('Please, enter your email and password');
    }
  }

  return (
    <HomeContainer>
      <h1>Task List</h1>
      <span>Manage your schedule easily</span>

      <Form onSubmit={handleLogin}>
        <input
          type='text'
          placeholder='Enter your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='Enter your password'
          value={password}
          autoComplete='false'
          onChange={(e) => setPassword(e.target.value)}
        />

        <button>Log in</button>
      </Form>

      <Link to='/register' className='register-link'>
        Not a member yet? <span> Sign up for free </span>
      </Link>
    </HomeContainer>
  );
};
