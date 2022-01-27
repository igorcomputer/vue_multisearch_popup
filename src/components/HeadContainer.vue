<template>
  <div class="head">
    <div class="container">
      <form method="get" action="/search/">
        <div class="form-field form-find">
          <input class="head-find" v-model="searchText" @keyup="getSearch"
                 name="q" type="text" placeholder="Поиск..." autocomplete="off">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import {mapActions} from "vuex";

export default {
  name: "HeadContainer",
  data() {
    return {
      searchText: ""
    }
  },
  methods: {
    ...mapActions(['GET_PRODUCTS_FROM_API']),
    ...mapActions(['RESET_APP_STATE']),
    getSearch: _.throttle(function() {
      let text = this.searchText.trim();
      if(text.length > 3){
        this.GET_PRODUCTS_FROM_API({query: text});
      } else {
        this.GET_PRODUCTS_FROM_API({query: "EMPTY9999"});
      }
    }, 500)
  }
}
</script>
