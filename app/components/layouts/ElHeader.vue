<template>
    <header class="header">
        <div class="wrapper flex">
            <nav class="nav flex gap-[90px] w-full items-center">
                <ul class="nav__list flex gap-[50px] uppercase">
                    <li v-for="item in menuItems1" :key="item.id" class="nav__item">
                        <a :href="item.link" class="nav__link flex items-center gap-4">
                            <SvgIcon v-if="item.svgBool" :name="item.svgIcon" w="24px" h="24px" />
                            {{ item.name }}
                        </a>
                    </li>
                </ul>
                <a class="logo" href="/">
                    <SvgIcon name="logo" w="108px" h="115px"/>
                </a>
                <ul class="nav__list flex gap-[50px] uppercase">
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
                    { id: 1, name: 'Меню', link: '/' },
                    { id: 2, name: 'Новости и события', link: '#' },
                    { id: 3, name: 'Акции и скидки', link: '#' },
                    { id: 4, name: 'Забронировать', svgBool: true, svgIcon:'notify', link: '#' },
                ],
                menuItems2: [
                    {id: 1, name: 'Программа лояльности', link: ''},
                    {id: 2, name: 'Шеф-повар', link: ''},
                    {id: 3, name: 'Доставка', link: ''},
                    {id: 4, name: 'Контакты', link: '/contacts.html'},
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
        width: 654px;
        text-align: end;
    }
}
</style>