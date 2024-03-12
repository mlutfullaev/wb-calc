import "vue-search-select/dist/VueSearchSelect.css"
import '@/assets/styles/style.scss'
import vSelect from 'vue-select'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)

app.component("v-select", vSelect)
app.use(createPinia())

app.mount('#app')
