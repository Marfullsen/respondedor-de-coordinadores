<template>
  <div class="home">
    <Welcome titulo="Respondedor de coordinadores">
      <span class="icon-earphones-alt"></span>
    </Welcome>
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from '@/components/Welcome.vue';

export default {
  name: 'HomePage',
  components: {
    Welcome,
  },
};
</script>
