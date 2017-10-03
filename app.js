'use strict'

main()

function main() {
  fetchHtml('blocks/html/helloworld.vue')
    .then(insert)
    .then(render)
}

function fetchHtml(path) {
  return fetch(path).then(resp => resp.text())
}

function insert(selector) {
  return html => {
    document
      .querySelector('body')
      .innerHTML = html
  }
}

function render() {
  let app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
  })
}
