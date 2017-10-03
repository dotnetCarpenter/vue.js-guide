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
  }
]

// document.addEventListener('DOMContentLoaded', main)
main(renderers[3])

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
