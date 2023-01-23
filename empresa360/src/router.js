import {createRouter, createWebHistory} from 'vue-router'
// import Contratos from '@/components/vendas/Contratos.vue'
// import Dashboard from '@/components/dashboard/Dashboard.vue'
// import DashboardRodape from '@/components/dashboard/DashboardRodape.vue'
// import Home from '@/views/Home.vue'
// import Indicadores from '@/components/servicos/Indicadores.vue'
// import Lead from '@/components/vendas/Lead.vue'
// import Leads from '@/components/vendas/Leads.vue'
// import Login from '@/views/Login.vue'
// import Opcoes from '@/components/servicos/Opcoes.vue'
// import PaginaNaoEncontrada from '@/views/PaginaNaoEncontrada.vue'
// import Servico from '@/components/servicos/Servico.vue'
// import Servicos from '@/components/servicos/Servicos.vue'
// import Site from '@/views/Site.vue'
// import Vendas from '@/components/vendas/Vendas.vue'
// import VendasPadrao from '@/components/vendas/VendasPadrao.vue'

//lazy laoding
const Contratos = () => import(/* webpackChunkName: "vendas" */ '@/components/vendas/Contratos.vue')
const Dashboard = () => import(/* webpackChunkName: "dashboard" */ '@/components/dashboard/Dashboard.vue')
const DashboardRodape = () => import(/* webpackChunkName: "dashboard" */ '@/components/dashboard/DashboardRodape.vue')
const Home = () => import('@/views/Home.vue')
const Indicadores = () => import(/* webpackChunkName: "servicos" */ '@/components/servicos/Indicadores.vue')
const Lead = () => import(/* webpackChunkName: "vendas" */ '@/components/vendas/Lead.vue')
const Leads = () => import(/* webpackChunkName: "vendas" */ '@/components/vendas/Leads.vue')
const Login = () => import('@/views/Login.vue')
const Opcoes = () => import(/* webpackChunkName: "servicos" */ '@/components/servicos/Opcoes.vue')
const PaginaNaoEncontrada = () => import('@/views/PaginaNaoEncontrada.vue')
const Servico = () => import(/* webpackChunkName: "servicos" */ '@/components/servicos/Servico.vue')
const Servicos = () => import(/* webpackChunkName: "servicos" */ '@/components/servicos/Servicos.vue')
const Site = () => import('@/views/Site.vue')
const Vendas = () => import(/* webpackChunkName: "vendas" */ '@/components/vendas/Vendas.vue')
const VendasPadrao = () => import(/* webpackChunkName: "vendas" */ '@/components/vendas/VendasPadrao.vue')

const routes = [
    {
        path: '/', //localhost:8080/
        component: Site,
        meta: {requerAutorizacao: false}
    },
    {
        path: '/home', //localhost:8080/home
        meta: {requerAutorizacao: true},
        alias: '/app',
        component: Home,
        children: [
            {
                path: 'vendas', //localhost:8080/home/vendas
                component: Vendas,
                children: [
                    {
                        path: 'leads', //localhost:8080/home/vendas/leads
                        component: Leads,
                        name:'leads',
                        beforeEnter(){
                            //podemos usar os mesmos parâmetros do beforeEach(to, from, next)
                            //podemos verificar se o usuário tem permissão para carregar a rota
                            console.log('Guarda de rota beforeEnter')
                        }
                    }, 
                    {
                        path: 'leads/:id/:outroParametro', //localhost:8080/home/vendas/leads/id
                        props: true,
                        /*
                        props: route =>{
                            //implemantar uma lógica para definir as props que serão submetidas para o componente roteado
                            let teste = route.query.idioma ? route.query.idioma : route.params.outroParametro
                            return {
                                id: parseInt(route.params.id) + 1,
                                outroParametro: teste
                            }
                        },
                            props: {
                                id: 4,
                                outroParametro: 'pt-br'
                            }
                        */
                        component: Lead,
                        name: 'lead',
                        alias: ['/l/:id/:outroParametro', '/pessoa/:id/:outroParametro', '/:id/:outroParametro']
                    }, 
                    {path: 'contratos', component: Contratos, name: 'contratos'}, //localhost:8080/home/vendas/contratos
                    {path: '', name: 'vendas', component: VendasPadrao} //localhost:8080/home/vendas/
                ]
            },
            {
                path: 'servicos', //localhost:8080/home/servicos
                component: Servicos,
                name: 'servicos',
                children: [
                    {
                        path: ':id', //localhost:8080/home/servicos/id
                        props: {
                            default: true,
                            indicadores: true,
                            opcoes: true
                        },
                        alias: '/s/:id',
                        name: 'servico',
                        components: {
                            default: Servico,
                            opcoes: Opcoes,
                            indicadores: Indicadores
                        }
                    }
                ]
            },
            {
                path: 'dashboard', //localhost:8080/home/dashboard
                components: {
                    default: Dashboard,
                    rodape: DashboardRodape
                }
            }
        ]
    },
    {
        path: '/login', //localhost:8080/login
        component: Login,
        meta: {requerAutorizacao: false}
    },
    {path: '/redirecionamento-1', redirect: '/home/servicos'},
    {path: '/redirecionamento-2', redirect: {name: 'leads'}},
    {path: '/redirecionamento-3', redirect: '/home/vendas'},
    {path: '/redirecionamento-4', redirect: {name: 'vendas'}},
    {path: '/redirecionamento-5', redirect: to =>{
            //podemos programar algo antes do redirecionamento ser efetivado
            console.log(to)
            return {name: 'vendas'}
        }
    },
    // {path: '/:catchAll(.*)*', redirect: '/'}
    {path: '/:catchAll(.*)*', component: PaginaNaoEncontrada}
]

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition){
        if(savedPosition){
            return savedPosition
        }

        if(to.hash){ //to.hash deve corresponder ao ID de um elemento HTML
            return{el: to.hash}
        }
        return {left: 0, top: 0}
    },
    routes
})

//parâmetros que podem ser usados (to, from, next)
router.beforeEach(() =>{
    console.log('Guarda de rota globa beforeEach')
})

router.afterEach(() =>{
    console.log('Guarda de rota globa afterEach')
})

router.beforeResolve(() =>{
    console.log('Guarda global beforeResolve')
})

export default router