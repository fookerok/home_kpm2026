<template>
    <header class="header py-[20px]">
        <div class="wrapper flex">
            <nav class="nav flex gap-[60px] w-full items-center justify-around">
                <ul class="nav__list flex gap-[45px] uppercase">
                    <li v-for="item in menuItems1" :key="item.id" class="nav__item">
                        <a :href="item.link" class="nav__link flex items-center gap-4">
                            <SvgIcon v-if="item.svgBool" :name="item.svgIcon" w="24px" h="24px" color="var(--red)"/>
                            {{ item.name }}
                        </a>
                    </li>
                </ul>
                <a class="logo" href="index">
                    <SvgIcon name="logo" w="189px" h="155.26px"/>
                </a>
                <ul class="nav__list flex gap-[45px] uppercase">
                    <li v-for="item in menuItems2" :key="item.id" class="nav__item">
                        <a :href="item.link" class="nav__link">
                            {{ item.name }}
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
import SvgIcon from '../UI/SvgIcon.vue';

    export default {
        data() {
            return {
                menuItems1: [
                    { id: 1, name: 'Меню', link: 'menu' },
                    { id: 2, name: 'Новости', link: 'news' },
                    { id: 3, name: 'События', link: '#' },
                    { id: 4, name: 'Спец. предложения', link:'#'},
                    { id: 5, name: 'Банкеты', svgBool: true, svgIcon:'notify', link: '#' },
                    
                ],
                menuItems2: [
                    {id: 1, name: 'Программа лояльности', link: 'loyalty'},
                    {id: 2, name: 'Шеф-повар', link: ''},
                    {id: 3, name: 'Доставка', link: ''},
                    {id: 4, name: 'Контакты', link: '/contacts'},
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
.nav{
    height: 155px;
    &__list{
        font-size: 0.9375rem;
        width: 646px;
        text-align: end;
    }
    &__item{
        &:hover{
            color: $red;
            transition: color 0.3s;
        }
    }
}
</style>