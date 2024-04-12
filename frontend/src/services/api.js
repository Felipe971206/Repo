import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3001',  // Asegúrate de usar el puerto correcto donde se ejecuta tu backend
    headers: {
        'Content-Type': 'application/json'
    }
});

export default api;