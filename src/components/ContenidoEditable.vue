<template>
  <div contenteditable="true" @input="modificado($event)">
    {{contenido}}
  </div>
</template>

<script>
export default {
  name: 'ContenidoEditable',
  props: {
    contenido: Object,
  },
  methods: {
    modificado(e) {
      this.$root.$planillasJson = e.target.innerHTML;
      console.log(this.$root.$planillasJson);
    },
  },
};
</script>

<style>

</style>
