<template>
    <div class="card">
        <div class="card-header bg-dark text-white">
            <div class="row">
                <div class="col d-flex justify-content-between">
                    <div>{{titulo}}</div>
                    <div>
                        <div class="form-check form-switch">
                            <input type="checkbox" class="form-check-input" v-model="favoritada">
                            <label class="form-check-label">Favoritar</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-body">
            <p>{{descricao}}</p>
        </div>
        <div class="card-footer">
            <small class="text-muted">Salário: R$ {{salario}} | Modalidade: {{pegaModalidade}} | Tipo: {{pegaTipo}} | Publicação: {{pegaPublicacao}}</small>  
        </div>
    </div>
</template>

<script>
    export default{ //eslint-disable-next-line
        name: 'Vaga',
        data: () =>({
            favoritada: false
        }),
        watch: {
            favoritada(valorNovo){
                if(valorNovo){
                    this.emitter.emit('favoritarVaga', this.titulo)
                } else{
                    this.emitter.emit('desfavoritarVaga', this.titulo)
                }
            }
        },
        props: {
            titulo: {
                type: String,
                required: true,
                validator(p){
                    if(p.length < 6) return false
                    return true 
                }
            },
            descricao: {
                type: String,
                default: "O contratante não adicionou uma descrição para essa vaga."
            },
            salario: {
                type: [Number, String],
                required: true,
            },
            modalidade: {
                type: String,
                required: true,
            },
            tipo: {
                type: String,
                required: true,
            },
            publicacao: {
                type: String,
                default(){
                    return "*".repeat(10)
                }
            }
        },
        computed: {
            pegaModalidade(){
                switch(this.modalidade){
                    case "1": return "Home Office"
                    case "2": return "Presencial"
                }
                return ""
            },
            pegaTipo(){
                switch(this.tipo){
                    case "1": return "CLT"
                    case "2": return "PJ"
                }
                return ""
            },
            pegaPublicacao(){
                let dataPublicacao = new Date(this.publicacao)
                return dataPublicacao.toLocaleDateString('pt-BR')
            }
        }
    }
</script>