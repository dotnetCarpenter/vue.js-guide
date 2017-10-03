'use strict'

let app

// document.addEventListener('DOMContentLoaded', main)
main()

function main() {
  fetchHtml('blocks/html/helloworld.vue')
    .then(insert('body'))
    .then(render)
}

function fetchHtml(path) {
  return window.fetch(path).then(resp => resp.text())
}

function insert(selector) {
  return html => {
    document
      .querySelector('body')
      .innerHTML = html
  }
}

function render() {
  app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
  })
}
