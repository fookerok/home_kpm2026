<template>
  <svg 
    :style="{ width: w, height: h }"
    :class="['svg-icon', `svg-icon--${name}`]" 
    aria-hidden="true"
  >
    <use :xlink:href="`/sprite/sprite.svg#${name}`" />
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
        }
    })
</script>

<style scoped>
.icon {
    overflow: visible;
    color: transparent !important;
}
</style>