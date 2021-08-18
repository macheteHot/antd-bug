import { createApp } from 'vue'
import App from './App.vue'
import addAntd from './plugins/antd';
const app = createApp(App)
addAntd(app)
app
  .mount('#app')
