<template>
  <div class="page-wrapper">
    <ElHeader/>
    <NuxtPage />     
  </div>
</template>

<script>
import ElFooter from './components/layouts/ElFooter.vue';
import ElHeader from './components/layouts/ElHeader.vue';

export default {
  components:{
    ElHeader,
    ElFooter,
  }  
}
</script>
