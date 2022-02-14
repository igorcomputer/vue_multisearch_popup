<template>
  <a :href="product_data.url" class="cat-item-prod">
    <div class="cat-prod-item-img">
      <img :src="product_data.picture" alt="product_image" @error="setNoImageIcon">
    </div>
    <div class="cat-prod-item-data">
      <div class="cat-prod-item-desc">{{product_data.params_data["Название"]}}</div>
      <div class="cat-prod-item-article">Артикул: {{product_data.params_data["Артикул"]}}</div>
      <div class="cat-prod-item-price">{{product_data.price}}&nbsp;р.</div>
      <div class="cat-prod-item-avail">

        <div class="xavail-indicator">
          <div class="xavail-indicator-wrap " :class="getIndicatorClass">
            <div class="xavail-indicator-inner">Кол-во: {{getAvailableCount}}</div>
          </div>
        </div>

      </div>
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
  computed: {
    getAvailableCount(){
      return this.product_data.params_data["Кол-во товара"] ?? 0;
    },
    getIndicatorClass() {
      let countAvailable = this.product_data.params_data["Кол-во товара"] ?? 0;
      let resultClass = 'ni_000';
      if (countAvailable >= 1 && countAvailable <= 10) {
        resultClass = 'ni_1_10';
      }
      if (countAvailable >= 11 && countAvailable <= 100) {
        resultClass = 'ni_11_100';
      }
      if (countAvailable > 100) {
        resultClass = 'ni_101';
      }
      return resultClass;
    }
  },
  methods: {
    setNoImageIcon (event) {
      event.target.src = require('@/assets/img/no-image.png')
    }
  }
}
</script>
