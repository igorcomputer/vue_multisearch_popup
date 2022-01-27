<template>
  <a href="#" class="show-more-prods" @click="selectCategoryItem">Показать еще {{showMoreCount}}</a>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name: "ItemGroupsNav",
  data(){
    return {

    }
  },
  props: {
    data_category: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  computed: {
    ...mapGetters(['QUERY']),
    showMoreCount(){
      return this.data_category.count - 4;
    }
  },
  methods: {
    ...mapActions(['GET_PRODUCTS_FROM_API']),
    selectCategoryItem() {
      this.GET_PRODUCTS_FROM_API({
        query: this.QUERY,
        t: this.data_category.id,
        p: null
      });
    }
  }
}
</script>

<style scoped>

</style>