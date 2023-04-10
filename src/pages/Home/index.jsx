import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HomeContainer, Form } from './styles'

export const Home = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleLogin(e) {
        e.preventDefault()

        if (email.trim() !== '' && password.trim() !== '') {
            alert('Entrou')
        } else {
            alert('preencha os campos')

        }
    }

    return (
        <HomeContainer>
            <h1>Task List</h1>
            <span>Manage your schedule easily</span>

            <Form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder='Enter your email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder='Enter your password'
                    value={password}
                    autoComplete='false'
                    onChange={e => setPassword(e.target.value)}
                />

                <button>Log in</button>
            </Form>

            <Link className='register-link'>Not a member yet? <span> Sign up for free </span></Link>
        </HomeContainer>
    )
}