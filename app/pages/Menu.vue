<template>
    <main class="main">
        <MenuList/>
    </main>
    <ElFooter class="relative">
        <SvgIcon class="absolute bottom-0 right-0 footer-svg" name="menu" w="483px" h="415.38px"/>
    </ElFooter>

</template>

<script setup>
import ElFooter from '~/components/layouts/ElFooter.vue';
import MenuList from '~/components/MenuList.vue';

</script>

<style lang="scss" scoped>
.footer-svg{
    z-index: 1;
}
</style>