import React, { useContext, useState } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';
import '../../styles/home.css';

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [editedIndex, setEditedIndex] = useState(null);
  const [editedContact, setEditedContact] = useState({
    name: '',
    email: '',
    number: '',
    address: ''
  });

  const handleDelete = (index) => {
    actions.deleteContact(index);
  };

  const handleEdit = (index) => {
    setEditedIndex(index);
    setEditedContact(store.demo[index]);
  };

  const handleSave = () => {
    actions.editContact(editedIndex, editedContact);
    setEditedIndex(null);
    setEditedContact({
      name: '',
      email: '',
      number: '',
      address: ''
    });
  };

  const handleChange = (e) => {
    setEditedContact({
      ...editedContact,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container">
      <h2>Datos Recopilados</h2>
      <ul>
        {store.demo.map((data, index) => (
          <li key={index} className="card">
           {editedIndex === index ? (
      <div>
        <form>
      <input
        type="text"
        name="name"
        value={editedContact.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        value={editedContact.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="number"
        value={editedContact.number}
        onChange={handleChange}
      />
      <input
        type="text"
        name="address"
        value={editedContact.address}
        onChange={handleChange}
      />
        </form>
       <button onClick={handleSave}>Guardar</button>
    </div>
            ) : (
              <div>
                <div className="profile">
                  <img src="https://img.freepik.com/foto-gratis/hombre-moreno-positiva-brazos-cruzados_1187-5797.jpg" alt="Profile" />
                </div>
                <div className="details">
                  <strong>Nombre:</strong> {data.name}
                  <br />
                  <strong>Email:</strong> {data.email}
                  <br />
                  <strong>Número:</strong> {data.number}
                  <br />
                  <strong>Dirección:</strong> {data.address}
                  <br />
                  <div className="button-container">
                 <button onClick={() => handleDelete(index)}>Eliminar</button>
                 <button onClick={() => handleEdit(index)}>Editar</button>
               </div>
               </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
