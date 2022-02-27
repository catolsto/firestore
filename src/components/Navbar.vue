<template>
    <nav class="navbar navbar-dark bg-dark">
    <div class="container">
        <router-link to="/" class="navbar-brand">Firestore</router-link>
      <div>
        <button @click="signIn" class="btn btn-dark">Acceder</button>
        <button @click="signOut" class="btn btn-danger">Salir</button>
      </div>
    </div>
  </nav>
</template>

<script>
import { useUser } from '../composables/useUser'
export default {
    setup() {
        const { signIn, signOut } = useUser()
        
        return { signIn, signOut }
    }
}
</script>

<style>

</style>