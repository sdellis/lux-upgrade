import Vue from "vue"
import Vuex from "vuex"
import { counterModule, galleryModule, resourceModule } from "./modules"

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== "production"

export default new Vuex.Store({
  strict: debug,
  modules: {
    counter: counterModule,
    ordermanager: resourceModule,
    gallery: galleryModule,
  },
})
