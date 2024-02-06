// appContext.js
// ... (otras importaciones)

const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		demo: []
		// ... (otros datos del store)
	  },
	  actions: {
		// ... (otras acciones)
  
		saveFormData: (formData) => {
		  // Obtén el estado actual
		  const store = getStore();
  
		  // Agrega el nuevo dato al array demo
		  const updatedDemo = [...store.demo, formData];
  
		  // Actualiza el estado global
		  setStore({ demo: updatedDemo });
		},
  
		deleteContact: (index) => {
		  // Obtén el estado actual
		  const store = getStore();
  
		  // Elimina el contacto del array demo usando el índice
		  const updatedDemo = store.demo.filter((_, i) => i !== index);
  
		  // Actualiza el estado global
		  setStore({ demo: updatedDemo });
		},
  
		editContact: (index, updatedData) => {
		  // Obtén el estado actual
		  const store = getStore();
  
		  // Actualiza los datos del contacto en el array demo usando el índice
		  const updatedDemo = store.demo.map((contact, i) => (i === index ? updatedData : contact));
  
		  // Actualiza el estado global
		  setStore({ demo: updatedDemo });
		}
	  }
	};
  };
  
  export default getState;
  