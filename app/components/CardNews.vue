<template>
    <a href="#" class="card-wrapper flex flex-col gap-[20px]">
        <div class="image-wrapper">
            <img :src="newsCard.img" :alt="newsCard.title">
        </div>
        <div class="card-item flex flex-col gap-[10px]">
            <div class="card-item__date">{{newsCard.date  }}</div>
            <div class="card-item__title">{{ newsCard.title }}</div>
            <div class="card-item__text" v-html="newsCard.text"></div>
        </div>
    </a>
</template>

<script setup>
    const props  = defineProps ({
        newsCard :{
            type: Object,
            required: true
        }
    })
</script>

<style lang="scss" scoped>
.card-wrapper{
    max-width: 381px;
    .card-item{
        &__date{
            color: $light-gray;
            line-height: 1;
        }
        &__title{
            font-size: 1.125rem;
            text-transform: uppercase;
            line-height: 1;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        &__text{
            color: $gray;
            line-height: 1.4;
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
}

</style>