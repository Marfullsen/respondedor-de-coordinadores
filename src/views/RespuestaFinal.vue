<template>
  <div>
    <h1>Respuesta final</h1>
    <article>
      <h1>Estimado / a</h1>
      <input type="text" list="nombresCoordinadores" autocomplete="off" value=""
      required>
        <datalist id="nombresCoordinadores">
          <option value="Mauricio">Mauricio</option>
          <option value="Humberto">Humberto</option>
          <option value="Maricel">Maricel</option>
          <option value="Loreto">Loreto</option>
          <option value="Estefanía">Estefanía</option>
          <option value="Carolina">Carolina</option>
          <option value="Otro / a">Otro / a</option>
        </datalist>
    </article>
    <article>
      <h1>Quedo atento.</h1>
      <label><input type="checkbox" value="Quedo atento."> Quedo atento.</label>
      <br>
    </article>
    <hr>
  </div>
  <tooltip tooltipText="hola" tooltipColor="verde">asd</tooltip>
  <tooltip tooltipText="">aaaaaa</tooltip>
</template>

<script>
import Tooltip from '@/components/Tooltip.vue';

// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'RespuestaFinal',
  components: {
    Tooltip,
  },
};
</script>
