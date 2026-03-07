<template>
    <main class="main">
        <div class="images-wrapper wrapper flex justify-between">
            <div class="image-container mt-[40px]">
                <img class="index-image select-none pointer-events-none" src="~/assets/img/index/index1.png" alt="">
            </div>
            <div class="image-container flex flex-col gap-[40px] mt-[20px] justify-center">
                <Btn class="self-center">Забронировать столик</Btn>
                <img class="index-image select-none pointer-events-none" src="~/assets/img/index/index2.png" alt="">
            </div>
            <div class="image-container mt-[40px]">
                <img class="index-image select-none pointer-events-none" src="~/assets/img/index/index3.png" alt="">
            </div>
        </div>

        <div class="wrapper flex justify-between items-end !mt-[50px]">
            <div class="text-index uppercase">
                Эногастрономические вечера, на&nbsp;которых вино и&nbsp;еда сливаются в&nbsp;совершенные сочетания, раскрывая все секреты гастрономии. Живая музыка, создающая неповторимую атмосферу уюта и&nbsp;радости, будь&nbsp;то романтический ужин или вечер с&nbsp;друзьями.
            </div>
            <NuxtLink to="/menu" class="cursor-pointer link-menu flex gap-[15px]">
                <div class="text-sm uppercase">Открыть <br>меню ресторации</div>
                <SvgIcon name="link-arrow" w="36px" h="36px"/>
            </NuxtLink>
        </div>
    </main>
    <ElFooter/>

</template>

<script>
import ElFooter from '~/components/layouts/ElFooter.vue';

export default {
    components: {
        ElFooter
    }
}
</script>

<style lang="scss">
.index-image{
    max-width: 516px;
}

.text-index{
    max-width: 1055px;
    font-size: 1.188rem;
    line-height: 1.6;
    color: $dark;
}
</style>