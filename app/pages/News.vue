<template>
    <main class="main">
        <div class="wrapper !mt-[50px]">
            <NavPag v-model="activeMenu" :items="newsTabs" />
        </div>
        <div class="wrapper !mt-[50px]">
            <CardNewsList/>
        </div>
        <ElFooter/>
    </main>
</template>

<script setup>
import { ref } from 'vue';
import CardNewsList from '~/components/CardNewsList.vue';
import ElFooter from '~/components/layouts/ElFooter.vue';
import NavPag from '~/components/NavPag.vue';

const activeMenu = ref('main')
const newsTabs = [
    { id: 'news',  icon: 'news',  name: 'Новости' },
    { id: 'today', icon: 'today', name: 'Текущие события' },
    { id: 'archive',  icon: 'archive',  name: 'Архив событий' }
]
</script>

<style lang="scss" scoped>

</style>