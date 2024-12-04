const axios = require("axios")


// ---------------------------------GET-------------------------------------

export async function getData(URL) {
    try {
        const response = await axios.get(URL);
        return response.data;

    } catch (e) {
        console.log(e)
    }
}

export async function getRestaurantes() {
    try {
        const response = await axios.get("http://127.0.0.1:8000/api/restaurantes/");
        return response.data;

    } catch (e) {
        console.log(e)
    }
}

export async function getRestauranteByID(id) {
    try {
        const response = await axios.get(`http://127.0.0.1:8000/api/restaurantes/${id}`);
        return response.data;

    } catch (e) {
        console.log(e)
    }
}

export async function getVoluntarios() {
    try {
        const response = await axios.get("http://127.0.0.1:8000/api/voluntarios/");
        return response.data;

    } catch (e) {
        console.log(e)
    }
}

export async function getVoluntarioByID(id) {
    try {
        const response = await axios.get(`http://127.0.0.1:8000/api/voluntarios/${id}`);
        return response.data;

    } catch (e) {
        console.log(e)
    }
}

export async function getCamapanhas() {
    try {
        const response = await axios.get("http://127.0.0.1:8000/api/campanhas/");
        return response.data;

    } catch (e) {
        console.log(e)
    }
}

export async function getTransacoes() {
    try {
        const response = await axios.get("http://127.0.0.1:8000/api/transacoes/");
        return response.data;

    } catch (e) {
        console.log(e)
    }
}

// --------------------------------- POST ---------------------------------------

export async function cadastrarRestaurante(data) {
    try {
        const response = await axios.post("http://127.0.0.1:8000/api/restaurantes/", data);
        return response;

    } catch (e) {
        console.log(e)
    }
}

export async function cadastrarVoluntarios(data) {
    try {
        const response = await axios.post("http://127.0.0.1:8000/api/voluntarios/", data);
        return response;

    } catch (e) {
        console.log(e)
    }
}

export async function cadastrarCampanhas(data) {
    try {
        const response = await axios.post("http://127.0.0.1:8000/api/campanhas/", data);
        return response;

    } catch (e) {
        console.log(e)
    }
}

export async function cadastrarTransacoes(data) {
    try {
        const response = await axios.post("http://127.0.0.1:8000/api/transacoes/", data);
        return response;

    } catch (e) {
        console.log(e)
    }
}