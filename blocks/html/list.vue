<div id="app-4">
  <button class="interactive" href="#" v-on:click='vues.push({ path: "New item" })'>app.vues.push({ path: "New item" })</button>
  <ol>
    <li v-for="vue in vues">
      {{ vue.path }}
    </li>
  </ol>
</div>
