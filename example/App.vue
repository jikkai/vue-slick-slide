<template>
  <div class="demo">
    <slick-slide :interval="5000">
      <slick-slide-item v-for="index in total" :key="index">
        <div class="demo-container">{{ index }}</div>
      </slick-slide-item>
    </slick-slide>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        total: 0
      }
    },
    created () {
      setTimeout(_ => {
        this.total = 1
      })
    }
  }
</script>

<style>
  .demo {
    size: 758px 278px;
    background-color: #A3AEB6;
  }

  .demo-container {
    size: 100%;
    color: #FFF;
    font-size: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
