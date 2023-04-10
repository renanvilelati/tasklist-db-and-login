import { auth } from '../../firebaseConnection'
import { signOut } from 'firebase/auth';

import { useState } from "react";

import { AdminContainer, Form } from "./styles";

export const Admin = () => {

    const [tarefaInput, setTarefaInput] = useState('')

    function handleRegister(e) {
        e.preventDefault()
        alert('teste')
    }

    async function handleLogout() {
        await signOut(auth)
    }

    return (
        <AdminContainer>
            <h1>My tasks</h1>

            <Form onSubmit={handleRegister}>
                <textarea
                    placeholder="Digite sua tarefa"
                    value={tarefaInput}
                    onChange={e => setTarefaInput(e.target.value)}
                />

                <button>Add task</button>
            </Form>

            <article className="list">
                <p>
                    Estudar react hoje a noite
                </p>
                <div>
                    <button>Edit</button>
                    <button className="btn-delete">Delete</button>
                </div>
            </article>

            <button className="btn-logout" onClick={handleLogout}>Log out</button>
        </AdminContainer>
    )
}