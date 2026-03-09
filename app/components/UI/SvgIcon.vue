<template>
  <svg 
    :style="{ width: w, height: h }"
    :class="['svg-icon', `svg-icon--${name}`]" 
    aria-hidden="true"
    :color="color"
  >
    <use :xlink:href="`#${name}`" :href="`#${name}`" />
  </svg>
</template>

<script setup>
    defineProps({
        name: {
            type: String,
            required: true,
        },
        w: {
            type: String,
            required: true
        },
        h: {
            type: String,
            required: true
        },
        color:{
            type: String,
        }
    })
</script>

<style lang="scss" scoped>
.svg-icon {
    overflow: visible;
}
.icon {
  fill: currentColor; 
  stroke: currentColor;

  :deep(path) {
    fill: currentColor;
  }
}
</style>