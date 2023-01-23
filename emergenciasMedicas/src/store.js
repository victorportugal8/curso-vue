import Vuex from 'vuex'

export default new Vuex.Store({
    state: {
        titulo: 'Emergências Médicas',
        equipe: {
            enfermeiro: '',
            socorrista: '',
            medico: '',
            carro: '',
            telefone: '',
            kitDeReanimacao: ''
        },
        equipes: [],
        enfermeiros: [],
        socorristas: [],
        medicos: [],
        equipamentos: {
            carros: [],
            telefones: [],
            kitsDeReanimacao: []
        }
    },
    getters: {
        totalEnfermeiros(state){
            return state.enfermeiros.length
        },
        totalMedicos(state){
            return state.medicos.length
        },
        socorristasPorTurno(state){ //closure
            return turno => !turno ? state.socorristas : state.socorristas.filter(s => s.turno === turno)
        },
        totalSocorristas: state => state.socorristas.length,
        totalSocorristasPorTurno: (state, getters) => turno => getters.socorristasPorTurno(turno).length
    },
    mutations: {
        setItemEquipe: (state, payload) =>{ //podemos usar a destruction extraindo somente o item de dentro do payload -> {item}
            // let item = payload.item
            let t = payload.tipo
            let d = payload.dados

            if(t == 'enfermeiros') state.equipe.enfermeiro = d.nome
            if(t == 'socorristas') state.equipe.socorrista = d.nome
            if(t == 'medicos') state.equipe.medico = d.nome
            if(t == 'carros') state.equipe.carro = d.placa
            if(t == 'telefones') state.equipe.telefone = d.telefone
            if(t == 'kits-de-reanimacao') state.equipe.kitDeReanimacao = d.kit
        },
        setEnfermeiros: (state, payload) =>{
            state.enfermeiros = payload
        },
        setSocorristas: (state, payload) =>{
            state.socorristas = payload
        },
        setMedicos: (state, payload) =>{
            state.medicos = payload
        },
        setCarros: (state, carros) =>{
            state.equipamentos.carros = carros
        },
        setTelefones: (state, payload) =>{
            state.equipamentos.telefones = payload
        },
        setKits: (state, payload) =>{
            state.equipamentos.kitsDeReanimacao = payload
        },
        definirEquipe: (state, payload) =>{
            state.equipes.push(payload)
            state.equipe = {}
        }
    },
    actions: {
        fetchEquipamentos(context, {carros, telefones, kitsDeReanimacao}){
            fetch('http://localhost:3000/equipamentos')
                .then(response => response.json())
                .then(data => {
                    if(carros) context.commit('setCarros', data.carros)
                    //poderíamos ter um processamento assíncrono para realizar alguma tratativa
                    //poderiámos ter diversas regras de negócios
                    if(telefones) context.commit('setTelefones', data.telefones)
                    //poderíamos ter um processamento assíncrono para realizar alguma tratativa
                    //poderiámos ter diversas regras de negócios
                    if(kitsDeReanimacao) context.commit('setKits', data.kitsDeReanimacao)
                    //poderíamos ter um processamento assíncrono para realizar alguma tratativa
                    //poderiámos ter diversas regras de negócios        
                })
        },
        fetchProfissionais(context){
            fetch('http://localhost:3000/enfermeiros')
                .then(response => response.json())
                .then(data => context.commit('setEnfermeiros', data))
            
            fetch('http://localhost:3000/socorristas')
                .then(response => response.json())
                .then(data => context.commit('setSocorristas', data))
            
            fetch('http://localhost:3000/medicos')
                .then(response => response.json())
                .then(data => context.commit('setMedicos', data))
        }
    }
})