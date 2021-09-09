<template>
  <div>
    <h1>Datos globales</h1>
    <article>
      <h1>Planillas</h1>
      <div class="flex w-full h-screen items-center justify-center text-center">
        <div class="p-12 bg-gray-100 border border-gray-300"
          @dragover="dragover" @drop="drop">
          <input type="file" name="fields[assetsFieldHandle][]" id="assetsFieldHandle"
            class="w-px h-px opacity-0 overflow-hidden absolute" @change="onChange"
            ref="file" accept=".txt,.json,.csv">
          <label for="assetsFieldHandle" class="block cursor-pointer">
            <div style="padding: 1em;">
              Arrastra un archivo con datos <strong>en formato JSON</strong><br><br>
              <code>
              { "Nombre Planilla ejemplo": "URL de la planilla ejemplo",<br>
                "Nombre de otra planilla ejemplo": "URL de la otra planilla ejemplo" }<br>
              </code><br><br>
              También puedes <span style="text-decoration: underline;
                color: #0099eb; cursor: pointer;">
                haz click aquí</span> para seleccionar un archivo.
            </div>
          </label>
          <span v-if="this.filelist.length">
            <span v-for="file in filelist" :key="file">
              {{ file.name }}
              <button class="ml-2" type="button" style="margin-left: 1em;"
              @click="remove()" title="Remove file">Quitar archivo</button>
            </span>
          </span>
        </div>
        <div>
          <textarea v-show="texto" v-model="texto" readonly
          style="width: 60%; height: 200px; text-align:center; color: #299a5c; margin-bottom: 1em;"
          :style="borderColor"
          placeholder='{ "Nombre": "URL",
  "Nombre 2": "URL",
  "Nombre 3": "URL", }'
          ></textarea>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'DatosGlobales',
  data() {
    return {
      filelist: [],
      texto: '',
      borderColor: '',
    };
  },
  methods: {
    loadTextFromFile() {
      const file = this.filelist[0];
      const reader = new FileReader();
      const self = this;
      reader.onload = function cargado(e) {
        self.texto = e.target.result;
        self.globalizarDatos(e.target.result);
      };
      reader.readAsText(file);
    },
    globalizarDatos(datos) {
      try {
        localStorage.setItem('planillas', datos);
        const datosJsonificados = JSON.parse(datos);
        this.$root.$planillasJson = datosJsonificados;
        this.embellecer(datosJsonificados);
        this.borderColor = 'border: solid #00A88A';
      } catch (error) {
        this.texto = '¡Error al leer el archivo!\n¡Revisar formato JSON!';
        this.borderColor = 'border: solid RED 5px; color: red;';
      }
    },
    onChange() {
      this.filelist = [...this.$refs.file.files];
      this.loadTextFromFile();
    },
    remove() {
      this.filelist = [];
    },
    dragover(event) {
      event.preventDefault();
    },
    drop(event) {
      event.preventDefault();
      this.$refs.file.files = event.dataTransfer.files;
      this.onChange();
    },
    embellecer(texto) {
      let planillas = '';
      Object.keys(texto).forEach((planilla) => {
        planillas += (`✓ ${planilla} - ¡CARGADA!\n`);
      });
      this.texto = planillas;
    },
  },
};
</script>

<style>
</style>
