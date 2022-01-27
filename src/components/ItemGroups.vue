<template>
  <div class="cat-item">
    <div class="cat-item-head">
      <a :href="group_data.category.url" class="cat-item-title">{{group_data.category.name}}&nbsp;
        <img src="@/assets/img/arr-right.svg" alt="arrow_icon">
      </a>
    </div>
    <div class="cat-item-body">
      <div class="cat-item-prods">

        <ItemProduct v-for="product in group_data.items"
                     :key="product.id"
                     :product_data="product"/>

        <ItemGroupsNav v-if="isShowNavMore" :data_category="group_data.category" />

      </div>
    </div>
  </div>
</template>

<script>
import ItemProduct from "@/components/ItemProduct";
import ItemGroupsNav from "@/components/ItemGroupsNav";

export default {
  name: "ItemGroups",
  props: {
    group_data: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  computed: {
    isShowNavMore(){
      let res = false;
      if(this.group_data.category.count > 4) {
        res = true;
      }
      return res;
    }
  },
  components: {
    ItemProduct,
    ItemGroupsNav
  },
}
</script>

<style scoped>

</style>