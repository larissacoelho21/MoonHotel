// Importanto biblioteca responsável por requisições HTTP
import axios from 'axios';

// Definindo a base do url para os endpoints
const apiUrl = "http://localhost:3001/news";

// Definindo o bjeto do serviço
const authService = {

    // Definindo a função de login
    async authenticate(data) {
        const endpoint = `${apiUrl}`
        return axios.post(endpoint, data);
    },

    // Função para salar o usuário logado no local storage
    setLoggedUser(data){
        let parsedData = JSON.stringify(data)
        localStorage.setItem("news", parsedData)
    },

    // Função responsável por recuperar o usuário logado do local storage
    getLoggedUser(){
        let data = localStorage.getItem("news");
        if(!data) return null;
        try {
            let parsedData = JSON.parse(data)
            return parsedData
        } catch (error) {
            console.log(error)
            return null
        }
    }
}

export default authService;