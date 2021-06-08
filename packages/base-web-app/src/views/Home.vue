<template>
    <helloWorldComponent/>
</template>

<script>
const helloWorldComponent = () => import('@/components/HelloWorld/Component.vue');

export default {
  name: 'Home',
  components: {
    helloWorldComponent
  }
}
</script>
