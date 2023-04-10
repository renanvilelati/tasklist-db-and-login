import { auth, db } from '../../firebaseConnection'
import { signOut } from 'firebase/auth';

import { useState, useEffect } from "react";

import { AdminContainer, Form } from "./styles";

// Criando collection
import {
    addDoc,
    collection,
    onSnapshot,
    query,
    orderBy,
    where,
    doc,
    deleteDoc
} from 'firebase/firestore'

export const Admin = () => {

    const [tarefaInput, setTarefaInput] = useState('')
    const [user, setUser] = useState({})

    const [tarefas, setTarefas] = useState([])

    useEffect(() => {

        async function loadTaks() {
            const userDetails = localStorage.getItem('@userDetails')
            setUser(JSON.parse(userDetails))

            if (userDetails) {
                const data = JSON.parse(userDetails)

                const tarefaRef = collection(db, 'tarefas')
                const q = query(tarefaRef, orderBy('created', 'desc'), where('userUid', '==', data?.uid))
                const unsub = onSnapshot(q, (snapshot) => {
                    let lista = []

                    snapshot.forEach((doc) => {
                        lista.push({
                            id: doc.id,
                            tarefa: doc.data().tarefa,
                            userUid: doc.data().userUid
                        })
                    })

                    setTarefas(lista)
                })

            }
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
                setTarefaInput('')
            })
            .catch(error => {
                console.error('ERRO AO REGISTRAR' + error);
            })
    }

    async function handleLogout() {
        await signOut(auth)
    }

    async function handleDeleteTask(id) {
        const docRef = doc(db, 'tarefas', id)
        await deleteDoc(docRef)
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

            {
                tarefas.map(item => (
                    <article key={item.id} className="list">
                        <p>
                            {item.tarefa}
                        </p>
                        <div>
                            <button>Edit</button>
                            <button onClick={() => handleDeleteTask(item.id)} className="btn-delete">Delete</button>
                        </div>
                    </article>
                ))
            }

            <button className="btn-logout" onClick={handleLogout}>Log out</button>
        </AdminContainer>
    )
}