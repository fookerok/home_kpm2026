<template>
  <main class="main">
    <div class="wrapper">
        <div class="top-banner my-[50px] flex justify-between">
            <div class="banner-item flex gap-[20px] items-center">
                <SvgIcon name="number" w="32px" h="32px"/>
                <div class="info-block flex flex-col">
                    <div class="top-banner__title text-sm">Телефон:</div>
                    <a href="tel:+79775295822" class="number-link">+7 (977) 529-58-22</a>
                </div>
            </div>
            <div class="banner-item flex gap-[20px] items-center">
                <SvgIcon name="adress" w="32px" h="32px"/>
                <div class="info-block flex flex-col">
                    <div class="top-banner__title text-sm">Адрес:</div>
                    <a target="_blank" href="https://yandex.ru/maps/-/CPuNIF6v" class="adress-link">Московская область, <br>г. Коломна, ул. Октябрьской революции, 210</a>
                </div>
            </div>
            <div class="banner-item flex gap-[20px] items-center">
                <SvgIcon name="messages" w="32px" h="32px"/>
                <div class="info-block flex flex-col gap-[10px]">
                    <div class="top-banner__title text-sm">Социальные сети:</div>
                    <div class="flex gap-[25px] items-center">
                        <a target="_blank" href="https://vk.com">
                            <SvgIcon name="vk" w="32px" h="32px"/>
                        </a>
                        <a target="_blank" href="https://web.telegram.org">
                            <SvgIcon name="tg" w="32px" h="32px"/>
                        </a>
                        <a target="_blank" href="https://whatsapp.com">
                            <SvgIcon name="wp" w="32px" h="32px"/>
                        </a>
                    </div>
                </div>
            </div> 
        </div>
    </div>
    <div class="wrapper" style="padding: 0; position:relative; overflow:hidden; width:1596px; height:650px;">
        <div style="position:absolute; width:100%; height:100%; pointer-events:none; z-index:1;"></div>
        <iframe 
            src="https://yandex.ru/map-widget/v1/?ll=38.757337%2C55.099861&z=17&mode=search&ol=biz&oid=1052671569" 
            width="1596" 
            height="650" 
            frameborder="0" 
            allowfullscreen="true" 
            style="position:relative; width: 1596px; height: 650px;">
        </iframe>
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

<style lang="scss" scoped>

.top-banner{
    &__title{
        color: $light-gray;
    }
}

.number-link{
    font-size: 2.5rem;
    color: $red;
    &:hover{
        color: $dark;
        transition: color 0.2s;
    }
}

.adress-link{
    &:hover{
        color: $red;
        transition: color 0.2s;
    }
}

.banner-item{
    width: 516px;
}

</style>