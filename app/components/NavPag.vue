<template>
    <ul class="navpag-list flex">
        <li 
            v-for="item in items" 
            :key="item.id" 
            class="navpag-list__item" 
            :class="{ 'is-active': modelValue === item.id }"
            @click="$emit('update:modelValue', item.id)"
        >
            <button 
                type="button" 
                class="navpag-btn flex items-center justify-center gap-[10px]"
            >
                <SvgIcon :name="`nav-${item.icon}`" w="54px" h="54px"/>
                <span>{{ item.name }}</span>
            </button>
        </li>
    </ul>
</template>

<script setup>
defineProps(['items', 'modelValue'])
defineEmits(['update:modelValue'])
</script>

<style lang="scss" scoped>
.navpag-list {
    border-bottom: 1px solid $border;

    &__item {
        flex: 1;
        cursor: pointer;
        transition: 0.3s;
        border-bottom: 5px solid transparent;
        padding-bottom: 30px;
        span {
            color: $light-gray;
            transition: 0.3s;
        }

        &.is-active {
            border-bottom: 5px solid $border;
            
            span {
                color: black;
                font-weight: 500;
            }
        }

        &:hover:not(.is-active) {
            opacity: 0.8;
            border-bottom-color: rgba($border, 0.3);
        }
    }
}

.navpag-btn {
    width: 100%;
    outline: none;
    background: transparent;
    border: none;
    padding: 0;
}
</style>