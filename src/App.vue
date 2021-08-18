<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/tardaremos_tanto">Tardademos Tanto</router-link> |
    <router-link to="/respuesta_final">Respuesta final</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<style>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* background-color: #0099eb; */
  background-image: url("https://www.transparenttextures.com/patterns/45-degree-fabric-dark.png");
  height: 100vh;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
