<template>
  <div id="sidebar" class="side-block">
    <SidebarTopLinks/>
    <CategoriesList/>
    <div class="btn-block">
      <a href="#" class="btn btn-reset">Сбросить</a>
    </div>
  </div>
</template>

<script>
import CategoriesList from '@/components/CategoriesList'
import SidebarTopLinks from '@/components/SidebarTopLinks'
export default {
  name: 'Sidebar',
  components: {
    SidebarTopLinks,
    CategoriesList
  }
}
</script>