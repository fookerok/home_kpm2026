<template>
  <div class="wrapper">
    <NavPag v-model="activeMenu" :items="restaurantTabs" @update:modelValue="onTabChange" />
  </div>

  <div class="wrapper relative flex items-center justify-center gap-[24px]"> 
    <button @click="swiperRef?.slidePrev()" class="transition-transform hover:scale-110 active:scale-95">
      <SvgIcon name="arrow" w="80px" h="80px" style="color: var(--red)"/>
    </button>

    <div class="menu-container w-full my-[50px]">
      <swiper
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :slides-per-view="1"
        :space-between="50"
        :centered-slides="true"
        class="mySwiper"
      >
        <swiper-slide v-for="tab in restaurantTabs" :key="tab.id">
        <div class="flex justify-center gap-[24px]">
            <img class="menu-card" :src="getMenuImg(1)" alt="">
            <img class="menu-card" :src="getMenuImg(2)" alt="">
        </div>
        </swiper-slide>
      </swiper>
    </div>

    <button @click="swiperRef?.slideNext()" class="rotate-180 transition-transform hover:scale-110 active:scale-95">
      <SvgIcon name="arrow" w="80px" h="80px" style="color: var(--red)"/>
    </button>
  </div>

  <div class="text-center">
    <Btn class="pdf-btn">Скачать меню <span class="descr-btn">PDF</span></Btn>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

const activeMenu = ref('menu');
const swiperRef = ref(null);

const restaurantTabs = [
  { id: 'menu',  icon: 'menu',  name: 'Основное меню' },
  { id: 'lunch', icon: 'lunch', name: 'Ланч меню' },
  { id: 'wine',  icon: 'wine',  name: 'Винная карта' },
  { id: 'bar',   icon: 'bar',   name: 'Барная карта' }
];

const onSwiper = (swiper) => {
  swiperRef.value = swiper;
};

const onTabChange = (newId) => {
  const index = restaurantTabs.findIndex(t => t.id === newId);
  if (swiperRef.value) {
    swiperRef.value.slideTo(index);
  }
};

const onSlideChange = (swiper) => {
  const currentTab = restaurantTabs[swiper.activeIndex];
  activeMenu.value = currentTab.id;
};

const getMenuImg = (num) => {
  return `/img/menu/menu${num}.png`;
};
</script>

<style lang="scss" scoped>
.menu-card {
  max-width: 45%;
  height: auto;
  object-fit: contain;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}

.pdf-btn {
  border: 2px solid $border;
  transition: all 0.3s ease;
  &:hover {
    background: $border;
    color: $dark;
  }
}
</style>