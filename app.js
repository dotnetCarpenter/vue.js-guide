'use strict'

;(function(win, doc) {
  let renderers = [
    {
      path: 'blocks/html/helloworld.vue',
      render: () => {
        win.app = new Vue({
          el: '#app',
          data: {
            message: 'Hello Vue!'
          }
        })
      }
    }, {
      path: 'blocks/html/binding.vue',
      render: () => {
        win.app = new Vue({
          el: '#app-2',
          data: {
            message: 'You loaded this page on ' + new Date().toLocaleString()
          }
        })
      }
    }, {
      path: 'blocks/html/toggle.vue',
      render: () => {
        win.app = new Vue({
          el: '#app-3',
          data: {
            seen: true
          }
        })
      }
    }, {
      path: 'blocks/html/list.vue',
      render: () => {
        win.app = new Vue({
          el: '#app-4',
          data: {
            vues: renderers
          }
        })
      }
    }, {
      path: 'blocks/html/reverse.vue',
      render: () => {
        win.app = new Vue({
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
        win.app = new Vue({
          el: '#app-6',
          data: {
            message: 'Hello Vue!'
          }
        })
      }
    }, {
      path: 'blocks/html/component.vue',
      render: () => {
        Vue.component('todo-item', {
          props: ['todo'],
          template: '<li>{{ todo.text }}</li>'
        })
        win.app = new Vue({
          el: '#app-7',
          data: {
            groceryList: [
              { id: 0, text: 'Vegetables' },
              { id: 1, text: 'Cheese' },
              { id: 2, text: 'Whatever else humans are supposed to eat' }
            ],
            nextId: 3
          }
        })
      }
    }
  ]

  win.app // global to allow access from the devtools console
  
  doc.addEventListener('DOMContentLoaded', main)

  function main() {
    let listView = renderers[3]
    let router = new Vue({
      el: 'nav',
      data: {
        currentRoute: window.location.pathname
      },
      render () {
        fetch(listView.path)
        .then(html => {
          this.template = html
        })
        .then(listView.render)
      },
      changePage(a) {
        window.history.pushState(
          null,
          this.href, // title
          this.href
        )
      }
    })
  }
    
  // doc.addEventListener('DOMContentLoaded', main)
  // main(renderers[renderers.length-1])

  // function main(config) {
  //   fetch(config.path)
  //     .then(insert('.demo'))
  //     .then(config.render)

  //   // can not hover when entire text is changed each second (binding.vue) TODO: fix vue.js to only update the diff (title attribute)
  //   // setInterval(render, 1000)
  // }

  function fetch(path, method = 'text') {
    return win.fetch(path).then(resp => resp[method]())
  }

  function insert(selector) {
    return html => {
      doc
        .querySelector(selector)
        .innerHTML = html
    }
  }

}(this, document))