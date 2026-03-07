<template>
    <footer class="footer">
        <div class="wrapper flex gap-[20px] flex-col">
        <div class="footer__text uppercase">
            Московская область, <br>г. Коломна, ул. Октябрьской революции, 210
        </div>
        <a class="footer__link underline" href="#">Политика конфиденциальности</a> 
        </div>
        <slot></slot>
    </footer>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.footer{
    font-size: 14px;
    flex: 0 0 auto;
    margin-top: 50px;
    .wrapper{
        border-top: 1px solid $border;
        padding: 42px 0 50px 0;

    }
    &__text{
        color: $light-gray;
    }
    &__link{
        color: $dark;
    }
}

</style>