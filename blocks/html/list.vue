<div id="app-4">
  <a class="interactive" href="#" v-on:click='vues.push({ path: "New item" })'>app.vues.push({ path: "New item" })</a>
  <ol>
    <li v-for="vue in vues">
      {{ vue.path }}
    </li>
  </ol>
</div>
