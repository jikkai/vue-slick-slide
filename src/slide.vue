<template>
  <div class="v-slide" :class="{ 'is-single': total <= 1 }">
    <div class="v-slide__container">
      <slot :now="now"></slot>
    </div>

    <div class="v-slide__button">
      <a class="v-slide__button--left" @click="handlePrev">
        <span>&lt;</span>
      </a>
      <a class="v-slide__button--right" @click="handleNext">
        <span>&gt;</span>
      </a>
    </div>

    <div class="v-slide__pager" v-if="total > 1">
      <a
        v-for="(num, index) in total"
        :key="num"
        :class="{ 'is-active': now === index }"
        @click="changeNow(index)"
      ></a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'slick-slide',
    data () {
      return {
        now: 0,
        total: 0,
        timer: 0
      }
    },
    props: {
      interval: {
        type: Number,
        default: 3000
      }
    },
    mounted () {
      this.total = this.$children.length
      this.handleToggle()

      this.timer = setInterval(this.handleNext, this.interval)
    },
    updated () {
      this.total = this.$children.length
      this.handleToggle()

      clearInterval(this.timer)
      this.timer = setInterval(this.handleNext, this.interval)
    },
    methods: {
      handlePrev () {
        if (this.now > 0) {
          this.now--
        } else {
          this.now = this.total - 1
        }

        this.handleToggle()
      },

      handleNext () {
        if (this.now < this.total - 1) {
          this.now++
        } else {
          this.now = 0
        }

        this.handleToggle()
      },

      changeNow (index) {
        this.now = index
        this.handleToggle()
      },

      handleToggle () {
        Array.from(this.$children).forEach(($slot, index) => {
          $slot.$set($slot, 'isShow', index === this.now)
        })
      }
    }
  }
</script>

<style>
  @component-namespace v {
    @c slide {
      position: relative;
      size: 100%;
      overflow: hidden;
      user-select: none;
      &:hover .v-slide__button a {
        display: block;
      }
      @when single {
        &:hover .v-slide__button a {
          display: none;
        }
      }

      @d container {
        position: relative;
        size: 100%;
      }

      @d button {
        position: absolute;
        width: 100%;
        top: calc(50% - 23px);

        & a {
          position: absolute;
          size: 26px 46px;
          color: #FFF;
          font-size: 18px 46px;
          text-align: center;
          overflow: hidden;
          cursor: pointer;
          display: none;

          & span {
            display: block;
            text-shadow: 0px 1px rgba(0, 0, 0, .3);
            transform: scaleY(2);
          }
        }

        @m left {
          left: 12px;
        }

        @m right {
          right: 12px;
        }
      }

      @d pager {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: rgba(0, 0, 0, .7);
        display: flex;

        & a {
          height: 4px;
          display: block;
          flex: 1;
          transition: background-color .4s;
          cursor: pointer;
          &:hover {
            background-color: #2FADF2;
          }

          @when active {
            background-color: #2FADF2;
          }
        }
      }
    }
  }
</style>
