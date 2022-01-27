<template>
  <div class="cat-item">
    <div class="cat-item-head">
      <a :href="group_data.category.url" class="cat-item-title">{{group_data.category.name}}&nbsp;
        <img src="@/assets/img/arr-right.svg" alt="arrow_icon">
      </a>
    </div>
    <div class="cat-item-body">
      <div class="cat-item-prods">
        <ItemProduct v-for="product in getListItems"
                     :key="product.id"
                     :product_data="product"/>
      </div>
    </div>
  </div>
</template>

<script>
import ItemProduct from "@/components/ItemProduct";

export default {
  name: "ItemList",
  props: {
    group_data: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  computed: {
    getListItems(){
      let itemsGroup = this.group_data.items;
      let dataItems = new Set();
      itemsGroup.forEach(function(itemList) {
        for(let i = 0; i < itemList.length; i++) {
          dataItems.add(itemList[i]);
        }
      });
      return [...dataItems];
    }
  },
  components: {
    ItemProduct
  },
}
</script>

<style scoped>

</style>