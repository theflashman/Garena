import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './mock'
import ClickOutSide from './directive/clickoutside'
import VConsole from 'vconsole'
// import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

const app = createApp(App)

app.use(router)
if (process.env.NODE_ENV != 'production') {
  const vconsole = new VConsole()
  app.use(vconsole)
}
app.directive('click-outside', ClickOutSide)
app.mount('#app')
