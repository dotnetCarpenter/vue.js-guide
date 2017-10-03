'use strict'

let app

// document.addEventListener('DOMContentLoaded', main)
main()

function main() {
  fetchHtml('blocks/html/binding.vue')
    .then(insert('body'))
    .then(render)

  // can not hover when entire text is changed each second TODO: fix vue.js
  // setInterval(render, 1000)
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
    el: '#app-2',
    data: {
      message: 'You loaded this page on ' + new Date().toLocaleString()
    }
  })
}
