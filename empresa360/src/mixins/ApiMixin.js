export default{
    data: () =>({
        dados: {}
    }),
    methods: {
        pegaDadosAPI(url, queryParams = {}){
            Object.keys(queryParams).forEach(chave =>{
                if(queryParams[chave] === '') delete queryParams[chave]
            })

            const urlQueryParams = new URLSearchParams(queryParams).toString()
            const urlCompleta = urlQueryParams ? `${url}&${urlCompleta}` : url

            fetch(urlCompleta)
                .then(response => response.json())
                .then(response => this.dados = response)
        }
    }
}