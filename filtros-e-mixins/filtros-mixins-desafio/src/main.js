import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.filter('tamanhoTexto', function(data){
	return data + ' ('+data.length+')';
})
new Vue({
	render: h => h(App),
}).$mount('#app')
