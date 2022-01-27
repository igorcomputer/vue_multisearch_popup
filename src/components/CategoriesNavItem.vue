<template>
  <div class="acc-sect-cont">
    <div class="acc-sect">
      <div class="acc__item">
        <a :data-id=category_data.id class="acc-cat-title" @click="selectCategoryItem">
          <span class="acc__text">{{category_data.name}}</span>
          <span class="acc-prod-num" :class="{'active-prod-num':isActiveItem}" >{{category_data.count}}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "CategoriesNavItem",
  props: {
    category_data: {
      type: Object,
      default(){
        return {}
      }
    },
  },
  methods: {
    selectCategoryItem() {
      this.$emit('select-category-item', this.category_data.id);
    }
  },
  computed: {
    ...mapGetters(['CATEGORY_ID']),
    isActiveItem(){
      let res = false;
      if(this.category_data.id == this.CATEGORY_ID){
        res = true;
      }
      return res;
    }
  }
}
</script>

<style scoped>
.acc-cat-title:hover .acc-prod-num {
  background: #B10000;
  color: #fff;
  border: 1px solid #B10000;
}
.acc-sect-cont {
  border-top: 1px solid #E5E5E5;
}
.active-prod-num {
  background: #B10000;
  color: #fff;
  border: 1px solid #B10000;
}
</style>
