'use strict'

let app
let renderers = [
  {
    path: 'blocks/html/helloworld.vue',
    render: () => {
      app = new Vue({
        el: '#app',
        data: {
          message: 'Hello Vue!'
        }
      })
    }
  }, {
    path: 'blocks/html/binding.vue',
    render: () => {
      app = new Vue({
        el: '#app-2',
        data: {
          message: 'You loaded this page on ' + new Date().toLocaleString()
        }
      })
    }
  }, {
    path: 'blocks/html/toggle.vue',
    render: () => {
      app = new Vue({
        el: '#app-3',
        data: {
          seen: true
        }
      })
    }
  }, {
    path: 'blocks/html/list.vue',
    render: () => {
      app = new Vue({
        el: '#app-4',
        data: {
          vues: renderers
        }
      })
    }
  }, {
    path: 'blocks/html/reverse.vue',
    render: () => {
      app = new Vue({
        el: '#app-5',
        data: {
          message: 'Hello Vue.js!'
        },
        methods: {
          reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
          }
        }
      })
    }
  }, {
    path: 'blocks/html/two-way-binding.vue',
    render: () => {
      app = new Vue({
        el: '#app-6',
        data: {
          message: 'Hello Vue!'
        }
      })
    }
  }
]

// document.addEventListener('DOMContentLoaded', main)
main(renderers[renderers.length-1])

function main(config) {
  fetchHtml(config.path)
    .then(insert('.demo'))
    .then(config.render)

  // can not hover when entire text is changed each second (binding.vue) TODO: fix vue.js
  // setInterval(render, 1000)
}

function fetchHtml(path) {
  return window.fetch(path).then(resp => resp.text())
}

function insert(selector) {
  return html => {
    document
      .querySelector(selector)
      .innerHTML = html
  }
}
