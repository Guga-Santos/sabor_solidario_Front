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

export async function getCampanhas() {
    try {
        const response = await axios.get("http://127.0.0.1:8000/api/campanhas/");
        return response.data;

    } catch (e) {
        console.log(e)
    }
}

export async function getCampanhaByID(id) {
    try {
        const response = await axios.get(`http://127.0.0.1:8000/api/campanhas/${id}`);
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
        console.log(response)
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
        console.log(response)
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

// ------------------------UPDATE--------------------------

export async function updateCampanha(id, data) {
    try {
        const update = await axios.put(`http://127.0.0.1:8000/campanhas/update/${id}/`, data);
        return update;
    } catch (e) {
        if (e.response) {
            console.error('Erro ao atualizar campanha:', e.response.status, e.response.data);
        } else {
            console.error('Erro de rede ou servidor indisponível:', e.message);
        }
    }
}




// -----------------------__DELETE__------------------------

export async function deletarCampanha(id) {
    try {
        await axios.delete(`http://127.0.0.1:8000/api/campanhas/${id}/`);
        console.log('Campanha deletada com sucesso');
    } catch (e) {
        console.error('Erro ao deletar campanha:', e?.response?.data || e?.message);
    }

}

export async function deletarAgendamento(id) {
    try {
        await axios.delete(`http://127.0.0.1:8000/api/transacoes/${id}/`);
        console.log('Campanha deletada com sucesso');
    } catch (e) {
        console.error('Erro ao deletar transação:', e?.response?.data || e?.message);
    }

}