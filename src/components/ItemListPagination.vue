<template>
  <div>
    <div v-if="getPageCount > 1" class="pagination-desc">
      Страница {{ getCurrentPage }} из {{ getPageCount }}
    </div>
    <div v-if="getPageCount > 1" class="pagination">
      <a class="pagi-btn pagi-back" :class="{'inactive':isPageFirst===true}" @click="toPrevPage"></a>
      <a class="pagi-btn pagi-next" :class="{'inactive':isPageLast===true}" @click="toNextPage"></a>
    </div>
  </div>
</template>

<script>

// :class="{'active-prod-num':isActive===true}

import {mapGetters, mapActions} from 'vuex'
export default {
  name: "ItemListPagination",
  methods: {
    ...mapActions(['GET_PRODUCTS_FROM_API']),
    toPrevPage(){
      let prevPage = 1;
      if(this.PAGE && this.isPageFirst == false){
        prevPage = this.PAGE - 1;
      }
      if(!this.isPageFirst) {
        this.GET_PRODUCTS_FROM_API({
          query: this.QUERY,
          t: this.CATEGORY_ID,
          p: prevPage
        });
      }
    },
    toNextPage(){
      let nextPage = 2;
      if(this.PAGE && this.isPageLast == false){
        nextPage = this.PAGE + 1;
      }
      if(!this.isPageLast) {
        this.GET_PRODUCTS_FROM_API({
          query: this.QUERY,
          t: this.CATEGORY_ID,
          p: nextPage
        });
      }
    }
  },
  computed: {
    ...mapGetters(['QUERY']),
    ...mapGetters(['ITEM_GROUPS']),
    ...mapGetters(['CATEGORY_ID']),
    ...mapGetters(['PAGE']),
    getCurrentPage(){
      return this.PAGE ?? 1;
    },
    getPageCount(){
      let pageCountItems = 13;// Кол-во элементов на странице
      return Math.ceil(this.getCountItems / pageCountItems);
    },
    getCountItems(){
      return this.ITEM_GROUPS[0].category.count;
    },
    isPageFirst(){
      let res = false;
      if(this.PAGE == 1 || this.PAGE == null){
        res = true;
      }
      return res;
    },
    isPageLast(){
      let res = false;
      if(this.PAGE == this.getPageCount){
        res = true;
      }
      return res;
    }
  }
}

</script>

<style scoped>

</style>