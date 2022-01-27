<template>
  <div class="main-flex container">

      <!-- SIDEBAR -->
      <div id="sidebar" class="side-block">
        <CategoriesNavTotal />
        <CategoriesNavList />
      </div>

      <!-- MAIN CONTENT -->
      <div id="main-content" class="prod-block">

        <!-- RESULT ITEMS -->
        <div v-if="CATEGORY_ID > 0">
          <div v-if="CATEGORIES.length > 1">
            <Breadcrumbs/>
          </div>
          <div class="cat-items cat-full">
            <ItemList v-for="item_group in ITEM_GROUPS" :key="item_group.id" :group_data="item_group"/>
          </div>
          <ItemListPagination/>
        </div>

        <!-- GROUP ITEMS -->
        <div v-if="CATEGORY_ID == null">
          <div v-if="ITEM_GROUPS.length > 1">
            <div class="cat-items">
              <ItemGroups v-for="item_group in ITEM_GROUPS" :key="item_group.id" :group_data="item_group"/>
            </div>
          </div>
          <div v-if="ITEM_GROUPS.length == 1">
            <div class="cat-items cat-full">
              <ItemList v-for="item_group in ITEM_GROUPS" :key="item_group.id" :group_data="item_group"/>
            </div>
            <ItemListPagination/>
          </div>
        </div>

      </div>

    </div>
</template>

<script>
import CategoriesNavTotal from '@/components/CategoriesNavTotal'
import CategoriesNavList from '@/components/CategoriesNavList'
import Breadcrumbs from '@/components/Breadcrumbs'
import ItemGroups from '@/components/ItemGroups'
import ItemList from '@/components/ItemList'
import ItemListPagination from "@/components/ItemListPagination"
import {mapGetters} from 'vuex'

export default {
  name: "MainContainer",
  computed: {
    ...mapGetters(['TOTAL']),
    ...mapGetters(['CATEGORIES']),
    ...mapGetters(['ITEM_GROUPS']),
    ...mapGetters(['CATEGORY_ID'])
  },
  components: {
    Breadcrumbs,
    CategoriesNavList,
    CategoriesNavTotal,
    ItemGroups,
    ItemList,
    ItemListPagination
  }
}
</script>

