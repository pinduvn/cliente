import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [responseText, setResponseText] = useState('');
  const [name, setName] = useState('');

  const sendJson = async () => {
    const json = {
      name: name,
      // Agregar aquí el resto del JSON que se desea enviar
    };

    try {
      const response = await axios.post('https://nombrefuncion.azurewebsites.net/api/httptrigger', json);
      setResponseText(JSON.stringify(response.data));
    } catch (error) {
      console.error(error);
      setResponseText(JSON.stringify(error));
    }
  };

  return (
    <div>
      <label htmlFor="name">Nombre:</label>
      <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <button onClick={sendJson}>Enviar JSON</button>
      <br />
      <textarea rows="10" cols="50" value={responseText} onChange={(e) => setResponseText(e.target.value)} />
    </div>
  );
}

export default App;
