<template>
  <navbar></navbar>
  <div class="container">
     <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  components: { Navbar },
  setup() {
    const provider = new firebase.auth.GoogleAuthProvider
  },
}
</script>

<style>

</style>
