<template>
  <div id="nav">
    <router-link to="/inicio">Inicio</router-link> |
    <router-link to="/tardaremos_tanto">Tardademos Tanto</router-link> |
    <router-link to="/respuesta_final">Respuesta final</router-link> |
    <router-link to="/about">¿Quienes somos?</router-link>
  </div>
  <router-view class="whiteBg"/>
</template>

<style>
body {
  margin: 0;
  background-color: #34a8ff;
  background-image: url("assets/patterns/45-degree-fabric-dark.png");
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #fff;
}

.whiteBg {
  background: white;
  border: solid lightskyblue 9px;
  margin: 2rem;
  margin-top: 0;
}
@font-face {
  font-family: 'simple-line-icons';
  src: url('fonts/Simple-Line-Icons.eot?v=2.4.0');
  src: url('fonts/Simple-Line-Icons.eot?v=2.4.0#iefix') format('embedded-opentype'),
  url('fonts/Simple-Line-Icons.woff2?v=2.4.0') format('woff2'),
  url('fonts/Simple-Line-Icons.ttf?v=2.4.0') format('truetype'),
  url('fonts/Simple-Line-Icons.woff?v=2.4.0') format('woff'),
  url('fonts/Simple-Line-Icons.svg?v=2.4.0#simple-line-icons') format('svg');
  font-weight: normal;
  font-style: normal;
}
.icon-docs, .icon-earphones-alt,
.icon-social-github,
.icon-arrow-right-circle,
.icon-arrow-left-circle,
.icon-pin, .icon-speech,
.icon-wrench, .icon-home,
.icon-organization,
.icon-people, .icon-fire {
  font-family: 'simple-line-icons';
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  font-size: xxx-large;
  text-transform: none;
  line-height: 1;
  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.icon-social-github:before {
  content: "\e60c";
}
.icon-earphones-alt:before {
  content: "\e03c";
}
.icon-docs:before {
  content: "\e040";
}
.icon-arrow-right-circle:before {
  color: #0099eb;
  content: "\e079";
  font-size: 70px;
  margin-bottom: 10px;
}
.icon-home:before {
  color: #0099eb;
  content: "\e069";
}
.icon-fire:before {
  background: #CF1512;
  background: #0099EB;
  background: -webkit-linear-gradient(to top left, #0099EB 0%, #6B2AEB 100%);
  background: -moz-linear-gradient(to top left, #0099EB 0%, #6B2AEB 100%);
  background: linear-gradient(to top left, #0099EB 0%, #6B2AEB 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  content: "\e01c";
}
.icon-people:before {
  color: #0099eb;
  content: "\e001";
}
.icon-pin:before {
  color: #0099eb;
  content: "\e031";
}
.icon-speech:before {
  color: #0099eb;
  content: "\e02c";
}
.icon-wrench:before {
  color: #0099eb;
  content: "\e052";
}
.icon-arrow-left-circle:before {
  color: #0099eb;
  content: "\e07a";
  font-size: 70px;
  margin-bottom: 10px;
}
.icon-social-github:hover {
  color: #F35F19;
  content: "\e60c";
}
</style>
