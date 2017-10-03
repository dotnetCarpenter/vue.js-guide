<div id="app-3">
  <button class="interactive" v-on:click="seen = !seen">Toggle</button>
  <transition name="fade">
    <span v-if="seen">Now you see me</span>
  </transition>
</div>
