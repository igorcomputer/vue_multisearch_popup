<template>
  <div v-if="TOTAL" class="acc-sect">
    <div class="acc__item">
      <a href="#" class="acc-cat-title" @click="onClickTotal">
        <span class="acc__text">Все категории</span>
        <span class="acc-prod-num" :class="{'active-prod-num':isActive===true}">{{TOTAL}}</span>
      </a>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name: "CategoriesNavTotal",
  data(){
    return {
      "is_active": true
    }
  },
  computed: {
    ...mapGetters(['TOTAL']),
    ...mapGetters(['QUERY']),
    ...mapGetters(['CATEGORY_ID']),
    isActive(){
      let res = false;
      if(this.CATEGORY_ID === null || this.CATEGORY_ID === undefined){
        res = true;
      }
      return res;
    }
  },
  methods: {
    ...mapActions(['GET_PRODUCTS_FROM_API']),
    onClickTotal(){
      this.GET_PRODUCTS_FROM_API({
        query: this.QUERY,
        t: null,
        p: null
      })
    }
  }
}
</script>
<style scoped>
.active-prod-num {
  background: #B10000;
  color: #fff;
  border: 1px solid #B10000;
}
</style>
