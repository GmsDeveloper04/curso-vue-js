import Vue from 'vue'
import axios from 'axios'

//GLOBAL
//axios.defaults.baseURL = 'https://curso-vue-204c3-default-rtdb.firebaseio.com/' 
// axios.defaults.headers.common['Authorization'] = 'header global'
// axios.defaults.headers.get['Accepts'] = 'application/json' // todo get tera este header


Vue.use({
    install(Vue){
        Vue.prototype.$http = axios.create({ //CRIANDO A INSTANCIA DO AXIOS SEM SER GLOBAL
            baseURL: 'https://curso-vue-204c3-default-rtdb.firebaseio.com/',
            headers: {
                'Algum header chave':'valor header',
                post: { // só para o metodo post
                'Authorization' : 'abc'
                }
            }
        })

        Vue.prototype.$http.interceptors.request.use(config => {
            console.log(config.method)
            return config 
        }, error => Promise.reject(error))

        Vue.prototype.$http.interceptors.response.use(res => {
            const array = []
            
            for(let chave in res.data){
                // array.push({id:chave, email:res.data[chave].email, nome:res.data[chave].nome }) <- MODO RAIZ
                array.push({id:chave,... res.data[chave] })  //COM SPREAD (O RESULTADO É O MESMO)
               
            }

            res.data = array
            return res
        }, error => Promise.reject(error))
    }
})