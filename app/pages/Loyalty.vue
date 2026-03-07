<template>
    <main class="main !mt-[50px]">
        <div class="wrapper">
            <div class="flex justify-between">
                <div class="flex flex-col justify-between">
                        <div class="flex gap-[30px]">
                            <div class="flex flex-col gap-[15px]">
                                <h2 class="uppercase page-title">Программа лояльности</h2>
                                <div class="loyalty-text">
                                    Для наших постоянных гостей в&nbsp;ресторации действует продуманная бонусная программа лояльности. С&nbsp;каждым визитом вы&nbsp;накапливаете бонусы, которые можно использовать <br>при последующих заказах, получая приятные привилегии и&nbsp;дополнительные выгоды.
                                </div>
                            </div>
                            <div class="wrapper-image">
                                <img src="../assets/img/loyalty/loyalty2.png" alt="">
                            </div>
                        </div>
                        <div class="flex gap-[30px]">
                            <div class="wrapper-image">
                                <img src="../assets/img/loyalty/loyalty1.png" alt="">
                            </div>
                            <div class="loyalty-text flex flex-col justify-between">
                                <p>
                                    Мы&nbsp;ценим наших гостей и&nbsp;хотим, чтобы каждое посещение было не&nbsp;только вкусным, но&nbsp;и&nbsp;выгодным. Именно поэтому мы&nbsp;создали продуманную систему бонусов и&nbsp;привилегий для постоянных гостей ресторации.
                                </p>
                                <h3 class="list-title">Как это работает?</h3>
                                <ul class="loyalty-list">
                                    <li class="loyalty-list__item">При регистрации в&nbsp;программе вы&nbsp;получаете виртуальную карту участника.</li>
                                    <li class="loyalty-list__item">С&nbsp;каждого оплаченного счёта вам начисляется&nbsp;5% бонусами.</li>
                                    <li class="loyalty-list__item">1&nbsp;бонус = 1&nbsp;рубль.</li>
                                    <li class="loyalty-list__item">Бонусами можно оплатить до&nbsp;30% от&nbsp;суммы счёта.</li>
                                    <li class="loyalty-list__item">Бонусы начисляются автоматически и&nbsp;доступны уже при следующем визите.</li>
                                </ul>
                                <p>
                                    Присоединяйтесь к&nbsp;&laquo;Клубу Ресторации&raquo; уже сегодня&nbsp;&mdash; и&nbsp;наслаждайтесь вкусом с&nbsp;дополнительными привилегиями.
                                </p>
                            </div>
                        </div>
                    </div>
                <div class="wrapper-image">
                    <img src="../assets/img/loyalty/loyalty3.png" alt="">
                </div>
            </div>
        </div>
    </main>
    <ElFooter/>
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
.loyalty-text{
    width: 755px;
    line-height: 1.6;
}
.list-title{
    font-size: 1.5625rem;
}
.loyalty-list {
    line-height: 1.4;
    list-style: none;
    padding: 0;

    &__item {
        position: relative;
        padding-left: 40px;
        margin-bottom: 10px;

        &::before {
            content: '•';
            position: absolute;
            left: 20px;
            color: $red;
        }
    }
}
</style>