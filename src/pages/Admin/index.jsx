import { auth, db } from '../../firebaseConnection'
import { signOut } from 'firebase/auth';

import { useState, useEffect } from "react";

import { AdminContainer, Form } from "./styles";

// Criando collection
import { addDoc, collection } from 'firebase/firestore'

export const Admin = () => {

    const [tarefaInput, setTarefaInput] = useState('')
    const [user, setUser] = useState({})

    useEffect(() => {

        async function loadTaks() {
            const userDetails = localStorage.getItem('@userDetails')
            setUser(JSON.parse(userDetails))
        }

        loadTaks()
    }, [])

    async function handleRegister(e) {
        e.preventDefault()

        if (tarefaInput.trim() === '') {
            alert('Digite alguma tarefa')
            return
        }

        await addDoc(collection(db, 'tarefas'), {
            tarefa: tarefaInput,
            created: new Date(),
            userUid: user?.uid
        })
            .then(() => {
                alert('TAREFA REGISTRADA');
                setTarefaInput('')
            })
            .catch(error => {
                console.error('ERRO AO REGISTRAR' + error);
            })
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