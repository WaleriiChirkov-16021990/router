<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div class="links__container" @click="clickLink">
      <a href="#dashboard" class="menu__link">Dashbord</a>
      <a href="#about" class="menu__link">About</a>
      <a href="#not_found" class="menu__link">Not Found</a>
    </div>
    <about-content v-if="currentPath === '#about'"></about-content>
    <dash-board v-if="currentPath === '#dashboard'"></dash-board>
    <not-found-page v-if="currentPath === '#not_found'"></not-found-page>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import AboutContent from "@/pages/AboutContent.vue";
import NotFoundPage from "@/pages/NotFoundPage.vue";
import DashBoard from "@/pages/DashBoard.vue";

export default {
  name: 'App',
  components: {
    DashBoard,
    NotFoundPage,
    AboutContent,
    HelloWorld
  },
  /**
   * Retrieves the current path from the window location hash.
   *
   * @returns {string} The current path.
   */
  data() {
    return {
      currentPath: '',
    }
  },
  methods: {
    setCurrentPath() {
      this.currentPath = window.location.hash;
      window.addEventListener('hashchange',() => this.setCurrentPath())
    },
    clickLink() {
      this.setCurrentPath();
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.links__container {
  display: flex;
  gap: 20px;
  justify-content: center;
}
</style>
