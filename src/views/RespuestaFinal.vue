<template>
  <div>
    <h1 style="margin-bottom: 0;" @click="uncheckAll">Respuesta final</h1>
    <p style="margin-top: 5px; margin-bottom: 5px;">
      <router-link style="text-decoration: none;" to="/datos_globales">
        <span class="icon-speech"></span>
      </router-link>
    </p>
    <hr>
    <article>
      <h1 @click="toggleCheckAll">Estimado/a</h1>
      <div>
        <button v-for="(value, key, index) in coordinadores" v-bind:key="index" :class="value"
        @click="this.seleccionar($event)">{{ key }}</button>
      </div>
      <input id="coordinadorSeleccionado" @contextmenu.prevent="pegarAqui($event)"
        type="text" v-model="coordinadorSeleccionado">
    </article>
    <hr>
    <article>
      <div style="display: flex;justify-content: center;align-items: center; flex-wrap: wrap;">
        <input id="chboxCursoCodigo" v-model="chboxCursoCodigo"
          type="checkbox" style="width: 32px;">
        <label for="chboxCursoCodigo">&nbsp;&nbsp;Se clonó el curso&nbsp;&nbsp;</label>
        <input v-model="nombreCurso"
          @contextmenu.prevent="pegarAqui($event)"
          type="text" placeholder="NombreCurso">
        <label for="chboxCursoCodigo">, código&nbsp;&nbsp;</label>
        <input v-model="codigoCurso"
          @contextmenu.prevent="pegarAqui($event)"
          type="text" placeholder="códigoCurso">
        <label for="chboxCursoCodigo">.</label>
      </div>
      <div style="display: flex;justify-content: center;align-items: center; flex-wrap: wrap;">
        <input id="chboxPlanillaFila" v-model="chboxPlanillaFila"
          type="checkbox" style="width: 32px;">
        <label for="chboxPlanillaFila">&nbsp;&nbsp;
          Se cargaron los participantes de la planilla&nbsp;&nbsp;
        </label>
        <input v-model="planilla" @contextmenu.prevent="pegarAqui($event)"
          type="text" placeholder="Planilla">
        <label for="chboxPlanillaFila">&nbsp;&nbsp;filas &nbsp;&nbsp;</label>
        <input v-model="filaX" @contextmenu.prevent="obtenerRango()"
         type="text" placeholder="FilaX">
        <label for="chboxPlanillaFila">&nbsp;&nbsp;a&nbsp;&nbsp;</label>
        <input v-model="filaY" @contextmenu.prevent="pegarAqui($event)"
          type="text" placeholder="FilaY">
        <label for="chboxPlanillaFila">.</label>
      </div>
    </article>
    <article v-show="chboxPlanillaFila">
      <hr>
      <section style="display: flex; justify-content: center;">
        <div style="display: flex; flex-wrap: wrap; justify-content: center; width: 80%;">
          <button v-for="(value, key, index) in planillas" v-bind:key="index"
            style="margin: 5px; background: #00A88A; height: 70px;"
            @click="this.seleccionarPlanilla($event)">{{ key }}</button>
        </div>
      </section>
    </article>
    <hr>
    <article>
      <div style="display: flex; justify-content: space-evenly; flex-wrap: wrap;">
        <div style="display: flex; flex-direction: column; align-items: baseline;">
          <label style="display: flex;justify-content: center;align-items: center;">
            <input v-model="chboxDespachoInvitaciones" type="checkbox" style="width: 32px;">
            &nbsp;&nbsp;Se despacharon las invitaciones por correo con las credenciales de acceso.
          </label>
          <label style="display: flex;justify-content: center;align-items: center;">
            <input v-model="chboxClaseSincronica" type="checkbox" style="width: 32px;">
            &nbsp;&nbsp;Se actualizó el link de la clase sincrónica.
          </label>
        </div>
        <div style="display: flex; flex-direction: column; align-items: baseline;">
          <label style="display: flex;justify-content: center;align-items: center;">
            <input v-model="chboxBloqueSence" type="checkbox" style="width: 32px;">
            &nbsp;&nbsp;Se habilitó el bloque SENCE.
          </label>
          <label style="display: flex;justify-content: center;align-items: center;">
            <input v-model="chboxQuedoAtento" style="width: 32px;"
            type="checkbox" value="Quedo atento."
          >&nbsp;&nbsp;Quedo atento.</label>
        </div>
      </div>
      <br>
    </article>
    <hr>
    <article>
      <h1 @click="bottomScrolling">Atentamente</h1>
      <div>
        <button v-for="(index, idAgente) in agentes"
          :key="index"
          @click="this.seleccionar($event, 'Agente')"
          class="btnAgente">{{agentes[idAgente]}}
        </button>
      </div>
      <input type="text" @contextmenu.prevent="pegarAqui($event)"
      v-model="agenteSeleccionado">
    </article>
    <hr>
    <article style="display: flex; align-items: center; flex-direction: column;">
      <h1 @click="bottomScrolling">Respuesta final</h1>
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
              <span v-if="chboxCursoCodigo">{{mensaje.clonacion}}<br><br></span>
              <span v-if="chboxPlanillaFila">
                {{mensaje.planillaFilas}}
                <span v-html="enlacePlanilla"></span>
                <span>{{this.mensaje.filas}}</span>
                <br><br>
              </span>
              <span v-if="chboxDespachoInvitaciones">{{mensaje.despachoInvitaciones}}<br><br></span>
              <span v-if="chboxClaseSincronica">{{mensaje.linkClase}}<br><br></span>
              <span v-if="chboxBloqueSence">{{mensaje.bloqueSence}}<br><br></span>
              <br>
              <span v-if="chboxQuedoAtento">{{mensaje.quedoAtento}}<br></span>
              {{mensaje.atte}}<br>
              {{mensaje.agente}}
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
    <article style="display: flex; min-height: 70px;">
      <div style="width: 20%;"></div>
      <div style="width: 20%; margin-bottom: 10px;">
        <router-link style="text-decoration: none;" to="/tardaremos_tanto">
          <span class="icon-arrow-left-circle"></span>
        </router-link>
      </div>
      <div style="width: 20%;"></div>
      <div style="width: 20%;"></div>
      <div style="width: 20%;"></div>
    </article>
  </div>
</template>

<script>
import Tooltip from '../components/Tooltip.vue';

export default {
  name: 'RespuestaFinal',
  components: {
    Tooltip,
  },
  data() {
    return {
      enlacePlanilla: '',
      mostrarBotoneraPlanillas: false,
      portapapeles: '',
      nombreCurso: '',
      codigoCurso: '',
      planilla: '',
      filaX: '',
      filaY: '',
      chboxCursoCodigo: false,
      chboxPlanillaFila: false,
      chboxDespachoInvitaciones: false,
      chboxBloqueSence: false,
      chboxClaseSincronica: false,
      chboxQuedoAtento: false,
      animacionInputPedido: '',
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
      coordinadores: this.$coordinadores,
      agentes: this.$agentes,
      mensaje: {
        genero: '',
        estimado: '',
        recibimos: 'Hemos recibido su solicitud',
        vinculada: '',
        trabajaremos: ', trabajaremos en la carga.',
        atte: 'Atentamente',
        agente: '',
      },
      listadoMinutos: {
        10: '10',
        15: '15',
        20: '20',
        30: '30',
        40: '40',
        50: '50',
      },
      planillas: this.$planillasJson,
    };
  },
  methods: {
    obtenerRango() {
      this.leerPortapapeles();
      const separador = '\n';
      const cleanedClipboard = this.portapapeles.replace(/\r/gm, '');
      const rango = cleanedClipboard.match(/\n/g) || [];
      const splitted = cleanedClipboard.split(separador);
      if (rango.length) {
        this.filaX = splitted.at(0);
        this.filaY = splitted.slice(-1);
      } else {
        this.filaX = this.portapapeles;
      }
    },
    pegarAqui(e) {
      this.leerPortapapeles();
      e.target.value = this.portapapeles;
    },
    toggleCheckAll() {
      this.chboxCursoCodigo = !this.chboxCursoCodigo;
      this.chboxPlanillaFila = !this.chboxPlanillaFila;
      this.chboxDespachoInvitaciones = !this.chboxDespachoInvitaciones;
      this.chboxBloqueSence = !this.chboxBloqueSence;
      this.chboxClaseSincronica = !this.chboxClaseSincronica;
      this.chboxQuedoAtento = !this.chboxQuedoAtento;
    },
    uncheckAll() {
      this.chboxCursoCodigo = false;
      this.chboxPlanillaFila = false;
      this.chboxDespachoInvitaciones = false;
      this.chboxBloqueSence = false;
      this.chboxClaseSincronica = false;
      this.chboxQuedoAtento = false;
      this.nombreCurso = '';
      this.codigoCurso = '';
      this.planilla = '';
      this.filaX = '';
      this.filaY = '';
    },
    bottomScrolling() {
      window.scrollTo(0, document.body.scrollHeight);
    },
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
    async leerPortapapeles() {
      if (navigator.clipboard) {
        navigator.clipboard.readText()
          .then((clipboardText) => {
            this.portapapeles = clipboardText;
          })
          .catch(() => 'Error');
      } else {
        // eslint-disable-next-line
        alert('Acceso al portapapeles no soportado.');
      }
    },
    seleccionar(e, rol) {
      if (rol === 'Agente') {
        this.agenteSeleccionado = e.target.innerHTML;
        window.scrollTo(0, document.body.scrollHeight);
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
      window.scrollTo(0, document.body.scrollHeight);
      self.animacionBorde = 'fadeIn';
      setTimeout(() => {
        self.animacionBorde = '';
      }, 500);
    },
    first_message() {
      this.mensaje.genero = this.coordinadores[this.coordinadorSeleccionado] || this.genero;
      this.mensaje.estimado = `Estimad${this.mensaje.genero} ${this.coordinadorSeleccionado}`;
      this.mensaje.clonacion = this.chboxCursoCodigo ? `■ Se clonó el curso "${this.nombreCurso}", código ${this.codigoCurso}.` : '';
      this.mensaje.planillaFilas = this.chboxPlanillaFila ? '■ Se realizó la carga de los participantes de la planilla ' : '';
      this.mensaje.filas = (this.filaX && this.filaY) ? `, filas ${this.filaX} a ${this.filaY}.` : '';
      if (!this.filaX && !this.filaY) this.mensaje.planillaFilas = '■ Se realizó la carga de los participantes de la planilla ';
      if (this.filaX && !this.filaY) {
        this.mensaje.planillaFilas = '■ Se realizó la carga del participante de la planilla ';
        this.mensaje.filas = `, fila ${this.filaX}.`;
      }
      this.mensaje.despachoInvitaciones = this.chboxDespachoInvitaciones ? '■ Se despacharon las invitaciones por correo con las credenciales de acceso.' : '';
      this.mensaje.linkClase = this.chboxClaseSincronica ? '■ Se actualizó el link de la clase sincrónica.' : '';
      this.mensaje.bloqueSence = this.chboxBloqueSence ? '■ Se habilitó el bloque SENCE' : '';
      this.mensaje.quedoAtento = this.chboxQuedoAtento ? 'Quedo atento' : '';
      this.mensaje.atte = 'Atentamente,';
      this.mensaje.agente = `${this.agenteSeleccionado}, soporte TIPU`;
    },
    previousPageCoordinador(coordinador) {
      this.coordinadorSeleccionado = coordinador;
    },
    crearEnlace(valor) {
      if (valor in this.planillas) {
        const enlace = this.planillas[valor];
        this.enlacePlanilla = `<a href="${enlace}">${valor}</a>`;
      } else {
        this.enlacePlanilla = valor;
      }
    },
    seleccionarPlanilla(e) {
      this.planilla = e.target.innerHTML;
    },
    leerPlanilla() {
      this.planillas = this.$root.$planillasJson;
    },
    buscarPlanillasPrevias() {
      const datosAlmacenados = localStorage.getItem('planillas');
      if (datosAlmacenados) {
        this.planillas = JSON.parse(datosAlmacenados);
      }
    },
  },
  mounted() {
    this.leerPortapapeles();
    this.leerPlanilla();
    this.previousPageCoordinador(this.$root.$coordinadorActivo);
    this.buscarPlanillasPrevias();
  },
  computed: {
    obtenerGenero() {
      return this.coordinadores[this.coordinadorSeleccionado] || this.genero;
    },
    hasen() {
      return this.first_message();
    },
  },
  watch: {
    planilla() {
      this.crearEnlace(this.planilla);
    },
  },
};
</script>

<style scoped>
@-webkit-keyframes danger {from { border-color: red;}to { border-color: red; }}
@-moz-keyframes danger {from { border-color: red;}to { border-color: red; }}
@keyframes danger {from { outline: red auto 1px;}to { outline: -webkit-focus-ring-color auto 1px; }}
.danger:focus-visible {
  outline: webkit-focus-ring-color auto 1px;
  -webkit-animation: danger 500ms ease-in-out 0s;
  -moz-animation: danger 500ms ease-in-out 0s;
  -o-animation: danger 500ms ease-in-out 0s;
  animation: danger 500ms ease-in-out 0s;
}

@keyframes success {to { outline: rgb(12, 196, 12) auto 1px;}
  40% {outline: rgb(21, 189, 21) auto 1px;}
  20% {outline: green auto 1px;}
  from { outline: -webkit-focus-ring-color auto 1px; }}
.success {
  outline: webkit-focus-ring-color auto 1px;
  animation: success 600ms ease-in-out 0s;
}
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

.danger:focus-visible{
  outline: none;
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
