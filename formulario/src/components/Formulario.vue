<template>
    <div class="container">
        <div class="row">
            <div class="col-6 bg-light">
                <span class="fs-4">ENTRADA DE DADOS</span>
                <hr>
                <!-- <form @submit.prevent="enviar($event)"> -->
                <form @reset.prevent="limpar()">
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Nome:</label>
                        <div class="col">
                            <input type="text" class="form-control" v-model.lazy="form.nome">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">E-mail:</label>
                        <div class="col">
                            <input type="email" class="form-control" v-model="form.email">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Senha:</label>
                        <div class="col">
                            <input type="password" class="form-control" v-model.trim="form.senha">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Idade:</label>
                        <div class="col">
                            <input type="number" class="form-control" v-model.number="form.idade">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Gênero:</label>
                        <div class="col">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" value="Feminino" v-model="form.genero">
                                <label class="form-check-label">
                                    Feminino
                                </label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" value="Masculino" v-model="form.genero">
                                <label class="form-check-label">
                                    Masculino
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Licença:</label>
                        <div class="col">
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" v-model="form.licenca" true-value="SIM" false-value="NÃO">
                                <label class="form-check-label">Li e aceito os termos</label>
                            </div>
                        </div>
                    </div>

                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Interesses:</label>
                        <div class="col">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="JavaScript" v-model="form.interesses">
                                <label class="form-check-label">
                                    JavaScript
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="VueJS" v-model="form.interesses">
                                <label class="form-check-label">
                                    VueJS
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="Angular" v-model="form.interesses">
                                <label class="form-check-label">
                                    Angular
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="NodeJS" v-model="form.interesses">
                                <label class="form-check-label">
                                    NodeJS
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Telefone:</label>
                        <div class="col">
                            <input type="text" class="form-control" v-model="form.telefone" v-maska="'(##) #####-####'">
                            <small class="text-muted">Formato: 11 97777-5555</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">CEP:</label>
                        <div class="col">
                            <input type="text" class="form-control" v-model="form.cep" v-maska="'#####-###'">
                            <small class="text-muted">Formato: 00000-000</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">CPF:</label>
                        <div class="col">
                            <input type="text" class="form-control" v-model="form.cpf" v-maska="'###.###.###-##'">
                            <small class="text-muted">Formato: 111.111.111-11</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">RG:</label>
                        <div class="col">
                            <input type="text" class="form-control" v-model="form.rg" v-maska="'#*-X'">
                            <small class="text-muted">Formato: Sem padrão</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">CNPJ:</label>
                        <div class="col">
                            <input type="text" class="form-control" v-model="form.cpnj" v-maska="'##.###.###/####-##'">
                            <small class="text-muted">Formato: 11.111.111/1111-11</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Cartão de crédito:</label>
                        <div class="col">
                            <input type="text" class="form-control" v-model="form.cartaoDeCredito" v-maska="'#### #### #### ####'">
                            <small class="text-muted">Formato: 1111 1111 1111 1111</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Placa Veículo:</label>
                        <div class="col">
                            <input type="text" class="form-control" v-model="form.placaVeiculo" v-maska="'AAA-####'">
                            <small class="text-muted">Formato: AAA-1111</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Placa Veículo Mercosul:</label>
                        <div class="col">
                            <input type="text" class="form-control" v-model="form.placaVeiculoMercosul" v-maska="'AAA#A##'">
                            <small class="text-muted">Formato: AAA0A00</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Data:</label>
                        <div class="col">
                            <input type="date" class="form-control" v-model="form.data">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Data/hora local:</label>
                        <div class="col">
                            <input type="datetime-local" class="form-control" v-model="form.dataHoraLocal">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Mês:</label>
                        <div class="col">
                            <input type="month" class="form-control" v-model="form.mes">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Semana:</label>
                        <div class="col">
                            <input type="week" class="form-control" v-model="form.semana">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Hora:</label>
                        <div class="col">
                            <input type="time" class="form-control" v-model="form.hora">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Cor:</label>
                        <div class="col">
                            <input type="color" class="form-color" v-model="form.cor">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Valor limite:</label>
                        <div class="col">
                            <input type="range" class="form-range" min="0" max="100" step="1" v-model="form.range">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Escondido:</label>
                        <div class="col">
                            <input type="hidden" class="form-control" v-model="form.hidden">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Upload:</label>
                        <div class="col">
                            <input type="file" class="form-control" multiple @change="selecionarArquivos($event)">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Descrição:</label>
                        <div class="col">
                            <textarea rows="3" class="form-control" v-model="form.descricao"></textarea>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Animes:</label>
                        <div class="col">
                            <select class="form-select" v-model="form.anime">
                                <option value="" disabled>Selecione um anime</option>
                                <option v-for="anime in animes" :key="anime.id" :value="anime.id">{{anime.anime}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Avaliação:</label>
                        <div class="col">
                            <!-- <input-estrelas :numero-estrelas="5" @avaliar="form.avaliacao = $event"/> -->
                            <input-estrelas :numero-estrelas="5" v-model:avaliar="form.avaliacao"/>
                        </div>
                    </div>
                    <hr>
                    <div class="mb-3 row">
                        <div class="col d-flex justify-content-between">
                            <button class="btn btn-secondary" type="button" @click="limpar()">Limpar (btn)</button>
                            <button class="btn btn-secondary" type="reset">Limpar</button>
                            <button class="btn btn-success" type="button" @click="enviar($event)">Enviar (btn)</button>
                            <button class="btn btn-success" type="submit">Enviar (submit)</button>
                        </div>                        
                    </div>
                </form>
            </div>
            
            <div class="col-6 text-white bg-secondary" :style="'background-color:'+form.cor+'!important'">
                <span class="fs-4">ESTADO DO OBJETO</span>
                <hr>
                <div class="mb-5 row">
                    <span>{{form}}</span>
                </div>

                <span class="fs-4">SAÍDA DE DADOS</span>
                <hr>
                <div class="mb-3 row">
                    <span>Nome: {{form.nome}}</span>
                </div>
                <div class="mb-3 row">
                    <span>E-mail: {{form.email}}</span>
                </div>
                <div class="mb-3 row">
                    <span>Senha: {{form.senha}}</span>
                </div>
                <div class="mb-3 row">
                    <span>Idade: {{form.idade}}</span>
                </div>
                <div class="mb-3 row">
                    <span>Gênero: {{form.genero}}</span>
                </div>
                <div class="mb-3 row">
                    <span>Licença: {{form.licenca}}</span>
                </div>
                <div class="mb-3 row">
                    <span>Interesses:</span>
                    <ul>
                        <li v-for="(interesse, index) in form.interesses" :key="index">{{interesse}}</li>
                    </ul>
                </div>
                <div class="mb-3 row">
                    <span>Telefone: {{form.telefone}}</span>
                </div>
                <div class="mb-3 row">
                    <span>CEP: {{form.cep}}</span>
                </div>
                <div class="mb-3 row">
                    <span>CPF: {{form.cpf}}</span>
                </div>
                <div class="mb-3 row">
                    <span>RG: {{form.rg}}</span>
                </div>
                <div class="mb-3 row">
                    <span>CNPJ: {{form.cpnj}}</span>
                </div>
                <div class="mb-3 row">
                    <span>Cartão de crédito: {{form.cartaoDeCredito}}</span>
                </div>
                <div class="mb-3 row">
                    <span>Placa Veículo: {{form.placaVeiculo}}</span>
                </div>
                <div class="mb-3 row">
                    <span>Placa Veículo Mercosul: {{form.placaVeiculoMercosul}}</span>
                </div>
                <div class="mb-3 row">
                    <span>Data: {{form.data}} | {{$moment(form.data).format('DD/MM/YYYY')}}</span>
                </div>
                <div class="mb-3 row">
                    <span>Data/hora local: {{form.dataHoraLocal}}</span>
                    <ul>
                        <li>{{$moment(form.dataHoraLocal).format('dddd')}}</li>
                        <li>{{$moment(form.dataHoraLocal).format('LLLL')}}</li>
                        <li>{{$moment(form.dataHoraLocal).add(10, 'days').format('LL')}}</li>
                        <li>{{$moment(form.dataHoraLocal).add(10, 'days').format('LLLL')}}</li>
                        <li>{{$moment(form.dataHoraLocal).add(1, 'months').format('LL')}}</li>
                        <li>{{$moment(form.dataHoraLocal).add(2, 'years').format('LL')}}</li>
                        <li>{{$moment(form.dataHoraLocal).subtract(10, 'days').format('LL')}}</li>
                        <li>{{$moment(form.dataHoraLocal).subtract(1, 'monts').format('LL')}}</li>
                        <li>{{$moment(form.dataHoraLocal).subtract(2, 'years').format('LL')}}</li>
                    </ul>
                </div>
                <div class="mb-3 row">
                    <span>Mês: {{form.mes}}</span>
                </div>
                <div class="mb-3 row">
                    <span>Semana: {{form.semana}}</span>
                </div>
                <div class="mb-3 row">
                    <span>Hora: {{form.hora}}</span>
                </div>
                <div class="mb-3 row">
                    <span>Cor: {{form.cor}}</span>
                </div>
                <div class="mb-3 row">
                    <span>Valor limite: {{form.range}}</span>
                </div>
                <div class="mb-3 row">
                    <span>Escondido: {{form.hidden}}</span>
                </div>
                <div class="mb-3 row">
                    <span>Upload:</span>
                    <ul>
                        <li v-for="(arquivo, index) in form.arquivos" :key="index">{{arquivo.name}}</li>
                    </ul>
                </div>
                <div class="mb-3 row">
                    <span>Descrição:</span>
                    <!-- <pre>{{form.descricao}}</pre> -->
                    <div style="white-space: pre">{{form.descricao}}</div>
                </div>
                <div class="mb-3 row">
                    <span>Anime: {{form.anime}}</span>
                </div>  
                <div class="mb-3 row">
                    <span>Avaliação: {{form.avaliacao}}</span>
                </div>  
            </div>
        </div>
    </div>
</template>

<script>
import InputEstrelas from '@/components/InputEstrelas.vue'
export default { // eslint-disable-next-line
    components:{
        InputEstrelas
    },
    // eslint-disable-next-line
    name: 'Formulario',
    data: () =>({
        animes: [
            {id: 1, anime: 'Dragon Ball'},
            {id: 2, anime: 'Naruto'},
            {id: 3, anime: 'Jujutsu Kaisen'},
            {id: 4, anime: 'Shingeki no Kyojin'}
        ],
        form: {},
        formEstadoInicial: {
            nome: '',
            email: '',
            senha: '',
            idade: '',
            licenca: 'NÃO',
            interesses: [],
            genero: '',
            telefone: '',
            cep: '',
            cpf: '',
            cnpj: '',
            cartaoDeCredito: '',
            placaVeiculo: '',
            placaVeiculoMercosul: '',
            rg: '',
            data: '',
            dataHoraLocal: '',
            mes: '',
            semana: '',
            hora: '',
            cor: '#6C757D',
            range: 5,
            hidden: 'Esse input está escondido',
            arquivos: {},
            descricao: '',
            anime: '',
            avaliacao: 0
        }
    }),
    created(){
        this.limpar()
    },
    methods: {
        selecionarArquivos(event){
            this.form.arquivos = event.target.files
        },
        enviar(event){
            console.log(event)

            const formEnvio = Object.assign({}, this.form)
            console.log(formEnvio)
            //uma requisição HTTP para o back-end da aplicação
            //promise que vai nos permitir tomar ações de acordo com o status da requisição 
        },
        limpar(){
            this.form = Object.assign({}, this.formEstadoInicial)
        }
    }
}
</script>
