<template>
  <div>
    <h1>Tardaremos tantos minutos en ayudarle</h1>
    <hr>
    <article>
      <h1>Estimado/a</h1>
      <!-- {<div>
        <button @click="this.seleccionar($event)">Mauricio</button>
        <button @click="this.seleccionar($event)">Humberto</button>
        <button @click="this.seleccionar($event)">Maricel</button>
        <button @click="this.seleccionar($event)">Loreto</button>
        <button @click="this.seleccionar($event)">Estefanía</button>
        <button @click="this.seleccionar($event)">Carolina</button>
        <button @click="this.seleccionar($event)">Otro / a</button>
      </div>} -->
      <div>
        <button v-for="(value, key, index) in coordinadores" v-bind:key="index" :class="value"
        @click="this.seleccionar($event)">{{ key }}</button>
      </div>
      <input id="coordinadorSeleccionado" type="text" v-model="coordinadorSeleccionado">
    </article>
    <hr>
    <article>
      <h1>Hemos recibido su solicitud</h1>
      <label for="numPedidoInput">N° Pedido: </label>
      <input v-model="inputNumPedido"
        id="numPedidoInput" type="number" placeholder=" Número pedido.">
      <label for="tardanzaInput"> Tardará: </label>
      <input v-model="inputMinutos"
      id="tardanzaInput" type="number" placeholder=" Tantos minutos.">
      <label> Minutos.</label>
    </article>
    <hr>
    <article>
      <h1>Atentamente</h1>
      <div>
        <button @click="this.seleccionar($event, 'Agente')" class="btnAgente">Francisco</button>
        <button @click="this.seleccionar($event, 'Agente')" class="btnAgente">Sebastian</button>
      </div>
      <input type="text" v-model="agenteSeleccionado">
    </article>
    <hr>
    <article style="text-align:center;">
      <h1>Primera respuesta</h1>
      <div id='textToBeCopied'
      style="display: flex; justify-content: center;">
        <pre
          @click="selectText('textToBeCopied')"
          style="width: 80%;
          border: 1px solid #ccc; text-align: start; padding: 1rem; white-space: pre-wrap;"
          contentEditable="true"
          >{{primer_mensaje}}<br><br><br><img src="@/assets/robot_soporte_tipu.png"></pre>
      </div>
      <br>
      <button @click="copyToClipboard()"><span class="icon-docs"></span> Copiar</button>
    </article>
  </div>
</template>

<script>
export default {
  name: 'TardademosTanto',
  data() {
    return {
      coordinadorSeleccionado: '',
      agenteSeleccionado: 'Francisco',
      inputNumPedido: '700',
      inputMinutos: '30',
      genero: 'o',
      coordinadores: {
        Loreto: 'a',
        Mauricio: 'o',
        Estefanía: 'a',
        Humberto: 'o',
        Maricel: 'a',
        Gonzalo: 'o',
        Carolina: 'a',
        Otro: 'o',
        Otra: 'a',
      },
      mensaje: 'a',
    };
  },
  methods: {
    seleccionar(e, rol) {
      if (rol === 'Agente') {
        this.agenteSeleccionado = e.target.innerHTML;
      } else {
        this.coordinadorSeleccionado = e.target.innerHTML;
        if (e.target.innerHTML === 'Otro' || e.target.innerHTML === 'Otra') {
          this.coordinadorSeleccionado = '';
          this.genero = e.target.innerHTML.charAt(e.target.innerHTML.length - 1);
        }
      }
    },
    copyToClipboard() {
      // const copyText = document.getElementById('textToBecopied').textContent;
      // const textArea = document.createElement('textarea');
      // textArea.textContent = copyText;
      // document.body.append(textArea);
      // textArea.select();
      // document.execCommand('copy');
      // a
      // const copyText = document.getElementById('textToBeCopied').innerHTML;
      // navigator.clipboard.writeText(copyText);
      document.execCommand('copy');
      alert('Copiado');
    },
    selectText(containerid) {
      if (document.selection) { // IE
        const range = document.body.createTextRange();
        range.moveToElementText(document.getElementById(containerid));
        range.select();
      } else if (window.getSelection) {
        const range = document.createRange();
        range.selectNode(document.getElementById(containerid));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
      }
      document.execCommand('copy');
      alert('Copiado');
    },
  },
  computed: {
    primer_mensaje() {
      const generoCoordinador = this.coordinadores[this.coordinadorSeleccionado];
      const genero = generoCoordinador || this.genero;
      if (this.inputNumPedido === '') {
        return `Estimad${genero} ${this.coordinadorSeleccionado}\n\n\nHemos recibido su solicitud, trabajaremos en la carga y tendrá un tiempo estimado de ${this.inputMinutos} minutos.\n\n\nAtentamente\n${this.agenteSeleccionado}, soporte TIPU`;
      }
      return `Estimad${genero} ${this.coordinadorSeleccionado}\n\n\nHemos recibido su solicitud vinculada al pedido N°${this.inputNumPedido}, trabajaremos en la carga y tendrá un tiempo estimado de ${this.inputMinutos} minutos.\n\n\nAtentamente\n${this.agenteSeleccionado}, soporte TIPU`;
    },
  },
};
</script>

<style scoped>
.o {
  background: #0099eb;
}
.a {
  background: hotpink;
}
input {
  height: 2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: center;
}
hr {
  width: 80%;
}
.nombreCoordinadorBtn, .btnAgente, button{
  background: #0099eb;
  border-color: lightsteelblue;
  border: none;
  opacity: 1;
  color: white;
  padding: 8px;
  width: 100px;
  font-size: 16px;
  border-radius: 15px;
}
button:hover {
  opacity: 0.8;
}
button:focus {
  filter: brightness(90%)
}
</style>
