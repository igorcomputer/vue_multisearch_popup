<template>
  <div class="breadcrumbs">
    <a href="#" @click="goBack"><img src="@/assets/img/arr-left-gr.svg" alt="breadcrumbs"> Все категории</a>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name: "Breadcrumbs",
  computed: {
    ...mapGetters(['QUERY']),
  },
  methods: {
    ...mapActions(['GET_PRODUCTS_FROM_API']),
    goBack(){
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
.breadcrumbs {
  margin-bottom: 20px;
}
.breadcrumbs a {
  font-size: 13px;
  line-height: 20px;
  color: #898989;
  display: flex;
  align-items: center;
}
.breadcrumbs img {
  margin-right: 10px;
}
</style>