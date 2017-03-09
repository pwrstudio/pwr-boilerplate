import Vue from 'vue'
import VueResource from 'vue-resource'

const API_ROOT = ''

Vue.use(VueResource)

Vue.http.options.crossOrigin = true

export default {
  getPosts () {
    return new Promise((resolve, reject) => {
      Vue.http.get(API_ROOT + '').then(response => {
        resolve(response.body)
      }, (response) => {
        reject()
      })
    })
  }
}
