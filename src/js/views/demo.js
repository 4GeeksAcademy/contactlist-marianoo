import React, { useContext, useState } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';
import '../../styles/demo.css';

export const Demo = () => {
  const { actions } = useContext(Context);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    address: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Llama a la acción para guardar los datos en el contexto
    actions.saveFormData(formData);

    // Limpia el formulario después de guardar los datos
    setFormData({
      name: '',
      email: '',
      number: '',
      address: ''
    });

    // Agrega un retraso de 2 segundos antes de limpiar el formulario
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        number: '',
        address: ''
      });
    }, 2000);
  };

  return (
    <div>
      <h2>Formulario</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <br />
        <label>
          Número:
          <input type="text" name="number" value={formData.number} onChange={handleChange} />
        </label>
        <br />
        <label>
          Dirección:
          <input type="text" name="address" value={formData.address} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default Demo;

