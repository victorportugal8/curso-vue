<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <h4>Apresente sua vaga de graça para milhares de profissionais.</h4>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col">
        <label class="form-laber">Título da Vaga</label>
        <input type="text" class="form-control" v-model="titulo">
        <div class="form-text">Por exemplo: Programador JavaScript e VueJS.</div>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col">
        <label class="form-laber">Descrição</label>
        <textarea type="text" class="form-control" v-model="descricao"/>
        <div class="form-text">Informe os detalhes da vaga.</div>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col">
        <label class="form-laber">Salário</label>
        <input type="number" class="form-control" v-model="salario">
        <div class="form-text">Informe o salário.</div>
      </div>

      <div class="col">
        <label class="form-laber">Modalidade</label>
        <select class="form-select" v-model="modalidade">
          <option value="" disabled>Selecione a modalidade</option>
          <option value="1">Home Office</option>
          <option value="2">Presencial</option>
        </select>
        <div class="form-text">Informe onde as atividades serão realizadas.</div>
      </div>

      <div class="col">
        <label class="form-laber">Tipo</label>
        <select class="form-select" v-model="tipo">
          <option value="" disabled>Selecione o tipo</option>
          <option value="1">CLT</option>
          <option value="2">PJ</option>
        </select>
        <div class="form-text">Informe o tipo de contratação.</div>
      </div>

      <div class="row mt-3">
        <div class="col">
          <button type="submit" class="btn btn-primary" @click="salvarVaga">Cadastrar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'PublicarVaga',
    data: () =>({
      titulo: '',
      descricao: '',
      salario: '',
      modalidade: '',
      tipo: ''
    }),
    methods: {
      salvarVaga(){
        let dataAtual = new Date(Date.now())
        let vagas = JSON.parse(localStorage.getItem("vagas"))
        
        if(!vagas) vagas = []

        vagas.push({
          titulo: this.titulo,
          descricao: this.descricao,
          salario: this.salario,
          modalidade: this.modalidade,
          tipo: this.tipo,
          publicacao: dataAtual.toISOString()
        })
        
        if(this.validaForm()){
          localStorage.setItem("vagas", JSON.stringify(vagas))
          this.emitter.emit('alerta', {
            tipo: "sucesso",
            titulo: `A vaga ${this.titulo} foi cadastrada com sucesso!`,
            descricao: "Parabéns, a vaga foi cadastrada e já está disponível para consulta na plataforma."
          })
          this.limpaFormCadastroVaga()
        } else{
          this.emitter.emit('alerta', {
            tipo: "erro",
            titulo: "Não foi possível realizar o cadastro da vaga!",
            descricao: "Parece que você esquece de preencher alguma informação, faça o ajuste e tente novamente."
          })
        }
      },
      limpaFormCadastroVaga(){
        this.titulo = '',
        this.descricao = '',
        this.salario = '',
        this.modalidade = '',
        this.tipo = ''
      },
      validaForm(){
        let valido = true
        if(this.titulo === '') valido = false
        if(this.descricao === '') valido = false
        if(this.salario === '') valido = false
        if(this.modalidade === '') valido = false
        if(this.tipo === '') valido = false
  
        return valido
      }
    }
  }
</script>

<style></style>