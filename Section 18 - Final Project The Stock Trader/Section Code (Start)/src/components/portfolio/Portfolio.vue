<template>
    <div class="panel panel-default">
        <div class="panel-body">
        <h4>Portfolio</h4>
            <div class="row">

                <transition-group  name="staggered-fade"
    tag="ul"
    v-bind:css="false"
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:leave="leave">


                    <div class="col-sm-6 stock-block col-xs-12" v-for="stock in getStockBought" :key="stock.time">
                        <app-stock :stock="stock" ></app-stock>
                    </div>

                </transition-group>
                
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Stock from './orderItem.vue'

export default {
    computed:{
        ...mapGetters([
            'getStockBought'
        ])
    },
    components:{
        appStock:Stock
    },


methods: {
    beforeEnter: function (el) {
      el.style.opacity = 0
      el.style.height = 0
    },
    enter: function (el, done) {
      var delay = el.dataset.index * 150
      setTimeout(function () {
        Velocity(
          el,
          { opacity: 1, height: '1.6em' },
          { complete: done }
        )
      }, delay)
    },
    leave: function (el, done) {
      var delay = el.dataset.index * 150
      setTimeout(function () {
        Velocity(
          el,
          { opacity: 0, height: 0 },
          { complete: done }
        )
      }, delay)
    }
  }


}
</script>

<style>

.staggered-move{
    transition: transform 1s;
}


.staggered-transition {
    transition: all .5s ease;
    opacity: 1;
}
.staggered-enter, .staggered-leave {
    opacity: 0;
}

</style>
