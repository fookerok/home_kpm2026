<template>
<a class="btn-link" :href="href">
    <slot></slot>
</a>
</template>

<script setup>
       defineProps({
        href: {
            type: String,
            required: false
        }
       })
    
</script>

<style lang="scss" >
.btn-link{
    color: white;
    background-color: $dark;
    padding: 14.5px 30px;
    text-transform: uppercase;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: 600;
}
</style>