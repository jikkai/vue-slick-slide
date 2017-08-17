<template>
  <transition name="v-fade" mode="out-in">
    <div class="v-slide-item" v-show="isShow">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'slick-slide-item',
    data () {
      return {
        isShow: false
      }
    }
  }
</script>

<style>
  @component-namespace v {
    @c slide-item {
      position: absolute;
      size: 100%;
    }
  }

  .v-fade-enter-active, .v-fade-leave-active {
    transition: opacity 1s
  }
  .v-fade-enter, .v-fade-leave-to {
    opacity: 0
  }
</style>
