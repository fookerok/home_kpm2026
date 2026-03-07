import uiComponents from '@/components/UI';

export default defineNuxtPlugin((nuxtApp) => {
    uiComponents.forEach(({ name, component }) => {
        nuxtApp.vueApp.component(name, component);
    });
});