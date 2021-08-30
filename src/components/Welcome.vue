<template>
  <div class="hello">
    <h1 style="margin-bottom: 0;">{{ titulo }}</h1>
    <p style="margin-top: 5px; margin-bottom: 5px;"><span class="icon-people"></span></p>
    <hr>
    <p>
      Bienvenido al respondedor de mensajes de coordinadores TIPU.<br>
    </p>
    <img alt="Bad_Robot_Tipu" style="width: 150px" src="../assets/robot-tipu-alone.png">
    <h2>Enlaces disponibles</h2>
    <ul>
      <li>Inicio</li>
      <li><router-link to="/tardaremos_tanto">Tardademos Tanto</router-link></li>
      <li><router-link to="/respuesta_final">Respuesta final</router-link></li>
      <li><router-link to="/about">¿Quienes somos?</router-link></li>
    </ul>
  </div>
  <slot></slot>
  <footer>
    <p style="font-size: small;">Hecho con VueJS, VueCLI, VueRouter, entre otros.<br>Agosto 2021</p>
    <a href="https://github.com/Marfullsen"
      title="Github Marfullsen"
      style="text-decoration: none;"
      target="_blank"
      rel="noopener"><span class="icon-social-github"></span></a>
    <a href="https://v3.vuejs.org/"
    title="VueJS"><img alt="Vue logo" width="50" src="../assets/logo.png"></a>
  </footer>
</template>

<script>
export default {
  name: 'ComponenteBienvenida',
  props: {
    titulo: String,
  },
};
</script>

<style scoped>
hr {
  width: 80%;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #0099eb;
}
footer {
  padding-bottom: 1rem;
}
</style>
