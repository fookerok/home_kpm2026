<template>
    <main class="main">
        <div class="wrapper">
            <div class="relative flex items-center justify-center gap-[24px]"> 
                <Button class="">
                    <SvgIcon name="arrow" w="80px" h="80px"/>
                </Button>
                <div class="menu-container inline-flex justify-center gap-[24px] w-full my-[50px]">
                    <img class="menu-card" src="../assets/img/menu/menu1.png" alt="">
                    <img class="menu-card" src="../assets/img/menu/menu2.png" alt="">
                </div>
                <Button class="rotate-180">
                    <SvgIcon name="arrow" w="80px" h="80px"/>
                </Button>
            </div>
            <div class="text-center">
                <Btn class="pdf-btn">Скачать меню <span class="descr-btn">PDF</span></Btn>
            </div>
        </div>
    </main>
    <ElFooter class="relative">
        <SvgIcon class="absolute bottom-0 right-0" name="menu" w="483px" h="514px"/>
    </ElFooter>

</template>

<script>
import ElFooter from '~/components/layouts/ElFooter.vue';

    export default {
        components:{
            ElFooter
        }
    }
</script>

<style lang="scss" scoped>
.pdf-btn {
    box-sizing: border-box;
    color: $light-gray;
    text-transform: unset;
    background: transparent;
    border: 2px solid $border;
}
.descr-btn{
    font-weight: 600;
    color: $red;
}
</style>