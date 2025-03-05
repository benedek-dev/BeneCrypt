import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [uuid, setUuid] = useState('');
  const [playerData, setPlayerData] = useState(null);
  const [error, setError] = useState(null);

  const handleUuidChange = (event) => {
    setUuid(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(`http://localhost:3001/player/${uuid}`);
      setPlayerData(response.data);  // Almacena los datos del jugador
      setError(null);  // Resetea cualquier error previo
    } catch (err) {
      setError('Error al obtener los datos del jugador.');
      setPlayerData(null);
    }
  };

  return (
    <div className="App">
      <h1>BeneCrypt - Información de Jugador de Hypixel</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Introduce el UUID del jugador"
          value={uuid} 
          onChange={handleUuidChange}
        />
        <button type="submit">Obtener Datos</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {playerData && (
        <div>
          <h2>Datos del Jugador:</h2>
          <pre>{JSON.stringify(playerData, null, 2)}</pre>  {/* Muestra los datos */}
        </div>
      )}
    </div>
  );
}

export default App;
