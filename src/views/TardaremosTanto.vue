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
      <label  @click="this.leerPortapapeles()" for="numPedidoInput">N° Pedido: </label>
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
    <article style="display: flex; align-items: center; flex-direction: column;">
      <h1>Primera respuesta</h1>
      <tooltip :tooltipText="textoDbclickCopiar" :tooltipColor="tooltipColor"
        :class="animacionBorde">
        <div id='textToBeCopied'
          @contextmenu.prevent="this.mensajeEditable = true"
          @blur="this.mensajeEditable = false;"
          @dblclick="DbclickOnMensaje('textToBeCopied')"
          @mouseleave="mouseleaveMensaje"
          style="min-height: 332px; text-align: initial; width: 80%;
          padding: 5px;"
          class="fr-element fr-view" dir="ltr"
          :contenteditable="mensajeEditable" aria-disabled="false"
          role="textbox" aria-multiline="true"
          spellcheck="true">
          <span dir="ltr">
            <p><span style="color: rgb(51, 51, 51);
              font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;,
              Roboto, &quot;Helvetica Neue&quot;, Arial, sans-serif, -apple-system,
              BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;,
              Arial, sans-serif; font-size: 16.6667px; text-align: initial;"
              dir="ltr">{{mensaje.estimado}}&ZeroWidthSpace;<br><br><br>
              {{mensaje.recibimos}}{{mensaje.vinculada}}{{mensaje.trabajaremos}}<br><br><br>
              {{mensaje.atte}}<br>{{mensaje.agente}}
              <br><br><br></span>
            </p>
          </span>
          <div dir="ltr">
            <p>
              <img src="https://drive.google.com/uc?id=1tPhcDo46m4ZX6X3cYwQd-molDnAYaxts&export=download"
              style="width: auto;" class="fr-fil fr-dib"
              data-attachment="[object Object]" data-id="64011263237">
            </p>
          </div>
        </div>
      </tooltip>
      <span style="display:none;">{{hasen}}</span>
      <br>
      <tooltip :tooltipText="textoBtnCopiar"
      @click="textoBtnCopiar = 'Copiado'"
      @mouseleave="mouseleaveMensaje"
      tooltipColor="verde">
        <button @click="copyToClipboard('textToBeCopied')">
          <span class="icon-docs"></span> Copiar
        </button>
      </tooltip>
    </article>
  </div>
</template>

<script>
import Tooltip from '../components/Tooltip.vue';

export default {
  name: 'TardademosTanto',
  components: {
    Tooltip,
  },
  data() {
    return {
      animacionBorde: '',
      mensajeEditable: false,
      tooltipColor: '',
      textoDbclickCopiar: 'Doble click para copiar.',
      textoBtnCopiar: '',
      coordinadorSeleccionado: 'coordinador',
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
      mensaje: {
        genero: '',
        estimado: '',
        recibimos: 'Hemos recibido su solicitud',
        vinculada: '',
        trabajaremos: ', trabajaremos en la carga.',
        atte: 'Atentamente',
        agente: '',
      },
    };
  },
  methods: {
    DbclickOnMensaje(containerid) {
      this.textoDbclickCopiar = '¡Copiado!';
      this.tooltipColor = 'verde';
      this.selectText(containerid);
    },
    mouseleaveMensaje() {
      this.textoDbclickCopiar = 'Doble click para copiar.';
      this.tooltipColor = '';
      this.textoBtnCopiar = '';
    },
    leerPortapapeles() {
      if (navigator.clipboard !== undefined) {
        navigator.clipboard.readText()
          .then((clipboardText) => {
            const indexAnyTriada = clipboardText.search(/\b[0-9]{3}\b/);
            if (indexAnyTriada !== -1) {
              this.inputNumPedido = clipboardText.substring(indexAnyTriada, indexAnyTriada + 3);
            } else {
              this.inputNumPedido = '';
            }
          })
          .catch(() => {
            this.inputNumPedido = '';
          });
      } else {
        alert('Acceso al portapapeles no soportado.');
      }
    },
    seleccionar(e, rol) {
      /* Se selecciona el coordinador y/o el agente */
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
    copyToClipboard(divToBeCopied) {
      this.selectText(divToBeCopied);
    },
    selectText(containerid) {
      const self = this;
      self.animacionBorde = '';
      this.mensajeEditable = false;
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
      self.animacionBorde = 'fadeIn';
      setTimeout(() => {
        self.animacionBorde = '';
      }, 500);
    },
    first_message() {
      this.mensaje.genero = this.coordinadores[this.coordinadorSeleccionado] || this.genero;
      this.mensaje.estimado = `Estimad${this.mensaje.genero} ${this.coordinadorSeleccionado}`;
      this.mensaje.recibimos = 'Hemos recibido su solicitud';
      this.mensaje.vinculada = this.inputNumPedido ? ` vinculada al pedido N°${this.inputNumPedido}` : '';
      this.mensaje.trabajaremos = `, trabajaremos en la carga y tendrá un tiempo estimado de ${this.inputMinutos} minutos.`;
      this.mensaje.atte = 'Atentamente';
      this.mensaje.agente = `${this.agenteSeleccionado}, soporte TIPU`;
    },
  },
  computed: {
    obtenerGenero() {
      return this.coordinadores[this.coordinadorSeleccionado] || this.genero;
    },
    hasen() {
      return this.first_message();
    },
  },
};
</script>

<style scoped>
@-webkit-keyframes fadeIn {
  from { border-radius: 15px; border: 5px solid #00A88A; opacity:1;}
  to { border: 5px solid #00A88A; opacity:0; }
  }
@-moz-keyframes fadeIn {
  from { border-radius: 15px; border: 5px solid #00A88A; opacity:1;}
  to { border: 5px solid #00A88A; opacity:0; }
  }
@keyframes fadeIn {
  from { border-radius: 15px; border: 5px solid #00A88A; opacity:1;}
  to { border: 5px solid #00A88A; opacity:0; }
  }

 .fadeIn {
  -webkit-animation: fadeIn 1s ease-in-out 0s;
  -moz-animation: fadeIn 1s ease-in-out 0s;
  -o-animation: fadeIn 1s ease-in-out 0s;
   animation: fadeIn 1s ease-in-out 0s;
}

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
