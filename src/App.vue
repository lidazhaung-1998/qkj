<template>
  <div id="app">
    <sHeader v-show="$route.meta.showHd" :style="sHeaderStyle"/>
    <router-view/>
    <sFooter v-show="$route.meta.showFt"/>
  </div>
</template>

<script>
  import sHeader from '@/components/layout/header/index'
  import sFooter from '@/components/layout/footer/index'

  export default {
    components: {
      sHeader,
      sFooter
    },
    computed: {
      sHeaderStyle () {
        const name = this.$route.name
        if (name === 'Index') {
          return {
            bacckgroundColor: 'transparent',
            position: 'absolute'
          }
        }
        return {}
      }
    },
    mounted () {
    }
  }
</script>
<style lang="scss">

</style>
