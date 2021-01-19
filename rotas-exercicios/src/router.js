import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio.vue'
import Usuario from './components/usuario/Usuario.vue' 
import Menu from './components/template/Menu.vue'
import UsuarioLista from './components/usuario/UsuarioLista.vue' 
import UsuarioDetalhe from './components/usuario/UsuarioDetalhe.vue' 
// import UsuarioEditar from './components/usuario/UsuarioEditar.vue' // aparecera no bundle final (carrega tudo de uma vez) 


Vue.use(Router) 

const UsuarioEditar = () => import(/* webpackChunckName: "usuario" */'./components/usuario/UsuarioEditar.vue') // funcao retorna o componente (carregamento tardio lazy loading)

const router = new Router({
    mode: 'history',
    scrollBehavior(to, from, savedPosition){
        if(savedPosition){
            return savedPosition;
        }else if(to.hash){
            return {selector: to.hash}
        }else {
            return {x : 0, y : 0}
        }
    },
    routes: [{
        name: 'inicio',
        path: '/',
       // component: Inicio
       components : {
            default: Inicio,
            menu : Menu

       }
    },
    {
        path:'/usuario',
        component: Usuario,
        props: true,
        children: [
            { path: '', component:UsuarioLista },
            { path: ':id', component:UsuarioDetalhe, props:true,
                beforeEnter: (to,from,next) => {
                    console.log('antes da rota -> usuario detalhe')
                    next()
                } 
            },
            { path: ':id/editar', component:UsuarioEditar, props:true, name:'editarUsuario' },
        ]
    },{
        path : '/redirecionar',
        redirect : '/usuario'

    },
    {
        path : '*',
        redirect : '/'

    }]

})

router.beforeEach((to, from, next) => {
    console.log('antes das rotas -> global')
    next()
})

export default router