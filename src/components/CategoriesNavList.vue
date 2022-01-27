<template>
  <div class="find-sections-results">
    <CategoriesNavItem v-for="category in CATEGORIES"
                       @select-category-item="selectCategoryItem"
                       :key="category.id"
                       :category_data="category"/>
  </div>
</template>

<script>
import CategoriesNavItem from '@/components/CategoriesNavItem'
import {mapActions, mapGetters} from 'vuex'
export default {
  name: "CategoriesNavList",
  data() {
    return {
      'active_id': this.CATEGORY_ID
    }
  },
  computed: {
    ...mapGetters(['CATEGORIES']),
    ...mapGetters(['QUERY']),
    ...mapGetters(['CATEGORY_ID'])
  },
  methods: {
    ...mapActions(['GET_PRODUCTS_FROM_API']),
    selectCategoryItem(categoryID) {
      this.active_id = categoryID;
      this.GET_PRODUCTS_FROM_API({
        query: this.QUERY,
        t: categoryID,
        p: null
      });
    }
  },
  components: {
    CategoriesNavItem
  }
}

//  :is_active="category.id===active_id && CATEGORY_ID > 0"

</script>
