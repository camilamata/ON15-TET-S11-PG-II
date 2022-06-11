//Aqui fica a lógica do código (tudo que ele deve executar)

//Colocando tudo da Models na const clientsDB (de Data Base)
const clientsDB = require("../models/clientsModel.json");

//Acessa o cadastro do atleta por nome | GET
const getByName = (request, response) => {
    const { name = null } = request.query
    try {
        let filterClients = clientsDB.slice();
        if(name) {
            filterClients = filterClients.filter(athlet => athlet.name
                .toLocaleLowerCase()
                .trim()
                .includes(name.toLocaleLowerCase()
                .trim())
                )
        };
        if (filterClients.length === 0) {
            throw new Error("Não encontramos nenhum(a) atleta com esse nome.")
        };
        response.status(200).json({
            "Buscando por": request.query,
            "Encontramos os(as) seguintes atletas": filterClients
        });
    } catch (error) {
        console.error(error);
        response.status(404).json({
            message: error.message,
            details: "Sua busca foi inválida"
        });
    }
};

const getById = (request, response) => {
    const { id } = request.params

    try {
        const findId = clientsDB.find(athlet => athlet.id == id);

        if (!findId) throw new Error(`Não encontramos nenhum(a) atleta com id: ${id}`);

        response.status(200).json({ "Atleta encontrado": findId });

    } catch (error) {
        console.error(error)
        response.status(404).json({
            message: "xxxxxxx.",
            details: error.message,
        });
    }
};

const weekdayAttendance = (request, response) => {
    const { weekday = null } = request.query
    try {
        let filterClients = clientsDB.slice();        
        if(weekday) {
            filterClients = filterClients.filter(athlet => athlet.weekDays
                .toLocaleLowerCase()
                .trim()
                .includes(weekday.toLocaleLowerCase()
                .trim())
                )
            
        };
        if (filterClients.length === 0) {
            throw new Error("Nenhum atleta frequenta a academia nesse dia.")
        };
        response.status(200).json({
            "Buscando por": request.query,
            "Essa é a quantidade de atletas por dia da semana": filterClients.length,
             filterClients
        });
    } catch (error) {
        console.error(error);
        response.status(404).json({
            message: error.message,
            details: "Sua busca foi inválida"
        });
    }
};

const updateRegister =  (request, response) => {
    try {
        const client = clientsDB
        const idRequest = request.query.id
        const bodyRequest = request.body

        const findClient = client.find(client => client.id == idRequest);

        if (idRequest == undefined || idRequest == null)
         throw new Error(`Atleta não cadastrado, tente novamente.`);

        const updatedInfo = Object.keys(bodyRequest);

        updatedInfo.forEach(key => {
            findClient[key] = bodyRequest[key];
        });

        response.status(200).json([{
            "Mensagem": "Atleta atualizado(a) com sucesso",
            "Nova ficha de cadastro": findClient
            
        }]);

    } catch (error) {
        console.error(error)
        response.status(404).json({
            message: "Não foi possível atualizar o cadastro do atleta.",
            details: error.message,
        });
    };
};

const deleteById = (request, response) => {
    const { id } = request.params
    try {

        const findClient = clientsDB.find(athlet => athlet.id == id);
        const index = clientsDB.indexOf(findClient);
        let deletedClient = clientsDB.splice(index, 1);

        if (findClient == undefined) throw new Error(`Não existe nenhum(a) atleta com esse ID`);

        response.status(200).send({
            "Mensagem": "Cadastro deletado com sucesso",
            "Atleta deletado(a)": deletedClient,
            "Banco de Dados atualizado": clientsDB

        });

    } catch (error) {
        console.error(error)
        response.status(404).json({
            message: "Atleta não foi removido",
            details: error.message,
        });
    };
};


module.exports = {
    getByName,
    getById,
    weekdayAttendance,
    updateRegister,
    deleteById
}