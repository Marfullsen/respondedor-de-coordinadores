<template>
  <div>
    <h1>The page you are looking for can't be reached.</h1>
    <h2>Not Found!</h2>
    <ul>
      <li>Not Found!</li>
      <li>Not Found!</li>
      <li>Not Found!</li>
      <li>Not Found!</li>
      <li>Not Found!</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  color: #004928;
}
</style>
