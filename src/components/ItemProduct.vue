<template>
  <a :href="product_data.url" class="cat-item-prod">
    <div class="cat-prod-item-img">
      <img :src="product_data.picture" alt="product_image" @error="setNoImageIcon">
    </div>
    <div class="cat-prod-item-data">
      <div class="cat-prod-item-desc">{{product_data.params_data["Название"]}}</div>
      <div class="cat-prod-item-article">Артикул: {{product_data.params_data["Артикул"]}}</div>
      <div class="cat-prod-item-price">{{product_data.price}}&nbsp;р.</div>
    </div>
  </a>
</template>

<script>
export default {
  name: "ItemProduct",
  props: {
    product_data: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  methods: {
    setNoImageIcon (event) {
      event.target.src = require('@/assets/img/no-image.png')
    }
  }
}
</script>

<style scoped>

</style>