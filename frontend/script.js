// Llama a la API de backend para obtener los datos del usuario
async function fetchUserData() {
    const response = await fetch('http://localhost:3001/api/user'); // Ajusta la URL según el backend
    const data = await response.json();
    document.getElementById('user-info').innerText = `Usuario: ${data.username}`;
}

fetchUserData();
