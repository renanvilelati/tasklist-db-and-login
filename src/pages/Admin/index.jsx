import { auth, db } from '../../firebaseConnection';
import { signOut } from 'firebase/auth';

import { useState, useEffect } from 'react';

import { SignOut } from 'phosphor-react';

import { AdminContainer, Form } from './styles';

// Criando collection
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  orderBy,
  where,
  doc,
  deleteDoc,
  updateDoc,
} from 'firebase/firestore';
import { toast } from 'react-toastify';

export const Admin = () => {
  const [tarefaInput, setTarefaInput] = useState('');
  const [user, setUser] = useState({});
  const [editTask, setEditTask] = useState({});

  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    async function loadTaks() {
      const userDetails = localStorage.getItem('@userDetails');
      setUser(JSON.parse(userDetails));

      if (userDetails) {
        const data = JSON.parse(userDetails);

        const tarefaRef = collection(db, 'tarefas');
        const q = query(
          tarefaRef,
          orderBy('created', 'desc'),
          where('userUid', '==', data?.uid)
        );
        const unsub = onSnapshot(q, (snapshot) => {
          let lista = [];

          snapshot.forEach((doc) => {
            lista.push({
              id: doc.id,
              tarefa: doc.data().tarefa,
              userUid: doc.data().userUid,
            });
          });

          setTarefas(lista);
        });
      }
    }

    loadTaks();
  }, []);

  async function handleRegister(e) {
    e.preventDefault();

    if (tarefaInput.trim() === '') {
      toast.warning('Enter your task');
      return;
    }

    if (editTask?.id) {
      handleUpdateTask();
      return;
    }

    await addDoc(collection(db, 'tarefas'), {
      tarefa: tarefaInput,
      created: new Date(),
      userUid: user?.uid,
    })
      .then(() => {
        setTarefaInput('');
      })
      .catch((error) => {
        console.error(error);
        toast.error('Unable to create task');
      });
  }

  async function handleLogout() {
    await signOut(auth);
  }

  async function handleDeleteTask(id) {
    const docRef = doc(db, 'tarefas', id);
    await deleteDoc(docRef);
  }

  function handleEditTask(item) {
    setTarefaInput(item.tarefa);
    setEditTask(item);
  }

  async function handleUpdateTask() {
    const docRef = doc(db, 'tarefas', editTask?.id);
    await updateDoc(docRef, {
      tarefa: tarefaInput,
    })
      .then(() => {
        toast.success('Task updated');
        setTarefaInput('');
        setEditTask({});
      })
      .catch((error) => {
        toast.error('Unable to update task');
        setTarefaInput('');
        setEditTask({});
      });
  }

  return (
    <AdminContainer>
      <h1>My tasks 📘</h1>

      <Form onSubmit={handleRegister}>
        <textarea
          placeholder='Enter your task'
          value={tarefaInput}
          onChange={(e) => setTarefaInput(e.target.value)}
        />

        {Object.keys(editTask).length > 0 ? (
          <button className='edit'>Update Task</button>
        ) : (
          <button> Create task </button>
        )}
      </Form>

      {tarefas.map((item) => (
        <article key={item.id} className='list'>
          <p>{item.tarefa}</p>
          <div>
            <button
              onClick={() => handleDeleteTask(item.id)}
              className='btn-delete'
            >
              Delete
            </button>
            <button className='btn-edit' onClick={() => handleEditTask(item)}>
              Edit
            </button>
          </div>
        </article>
      ))}

      <button className='btn-logout' onClick={handleLogout}>
        <SignOut size={20} /> Log out
      </button>
    </AdminContainer>
  );
};
