<div id="app-7">
  <button
    class="interactive"
    v-on:click="groceryList.push({ id: nextId++, text: 'New Item' })">
    groceryList.push({ id: nextId++, text: 'New Item' })
  </button>
  <ol>
    <!--
      Now we provide each todo-item with the todo object
      it's representing, so that its content can be dynamic.
      We also need to provide each component with a "key",
      which will be explained later.
    -->
    <todo-item
      v-for="item in groceryList"
      v-bind:todo="item"
      v-bind:key="item.id">
    </todo-item>
  </ol>
</div>
