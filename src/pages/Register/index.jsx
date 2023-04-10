import { useState } from 'react'
import { Link } from 'react-router-dom'
import { RegisterContainer, Form } from './styles'

export const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleRegister(e) {
        e.preventDefault()

        if (email.trim() !== '' && password.trim() !== '') {
            alert('Entrou')
        } else {
            alert('preencha os campos')

        }
    }

    return (
        <RegisterContainer>
            <h1>Sign up</h1>
            <span>Manage your schedule easily</span>

            <Form onSubmit={handleRegister}>
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

                <button>Sign up</button>
            </Form>

            <Link className='register-link'>Already have an account? <span> Log in </span></Link>
        </RegisterContainer>
    )
}