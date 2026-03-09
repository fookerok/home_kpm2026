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
    padding: 14px 30px;
    text-transform: uppercase;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: 600;
    box-sizing: border-box;
    border: 1px solid $dark;
    transition: all 0.2s;
    &:hover{
        color: $dark;
        background-color: $main-bg;
    }
}
</style>