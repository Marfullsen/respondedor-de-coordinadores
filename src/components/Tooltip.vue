<template>
  <div :class="[tooltipText ? 'tooltip' : 'esconder', tooltipColor]">
    <span class="tooltiptext">{{tooltipText}}</span>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'tooltip',
  props: {
    tooltipText: String,
    tooltipColor: String,
  },
};

</script>

<style>
/* Tooltip container */
.tooltip {
  position: relative;
  display: inline-block;
}

/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidden;
  width: 150px;
  background-color: #0099eb;
  color: #fff;
  text-align: center;
  padding: 15px 0;
  border-radius: 6px;

  /* Position the tooltip text */
  position: absolute;
  z-index: 1;
  bottom: 110%;
  left: 75%;
  margin-left: -60px;

  /* Fade in tooltip */
  opacity: 0;
  transition: opacity 0.3s;
}

/* Tooltip arrow */
.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #0099eb transparent transparent transparent;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}

.verde > .tooltiptext {
  background-color: #00A88A!important;
}
.verde > .tooltiptext::after {
  border-color: #00A88A transparent transparent transparent!important;
}
</style>
