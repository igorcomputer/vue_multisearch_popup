<template>
  <div class="mss multisearch_popup" id="multisearch_popup">
    <a href="#" class="ms_popup_close" id="ms_popup_close"></a>
    <div class="no-cat-chosen">
      <HeadContainer />
      <MainContainer v-if="TOTAL > 0"/>
      <InfoNotFoundText v-if="TOTAL == 0 && QUERY.length > 0"/>
    </div>
  </div>
</template>

<script>

// <InfoStartText v-if="TOTAL == 0 && QUERY == ''"/>
// import InfoStartText from '@/components/InfoStartText'

import HeadContainer from '@/components/HeadContainer'
import MainContainer from '@/components/MainContainer'
import InfoNotFoundText from '@/components/InfoNotFoundText'

import {mapGetters} from 'vuex'
export default {
  name: 'App',
  methods: {
    closeApp(){
      this.isShowApp = false
    }
  },
  computed: {
    ...mapGetters(['TOTAL']),
    ...mapGetters(['QUERY']),
  },
  components: {
    HeadContainer,
    MainContainer,
    InfoNotFoundText
  }
}
</script>

<style scoped>
.multisearch_popup {
  display:none;
  position: absolute;
  z-index:1000;
  width:100%;top:0;left:0;
  box-shadow: 0 0 10px -5px rgb(0 0 0 / 30%);
  min-height: 241px;
  background: #fff;
}
.multisearch_popup.active {display:block;}

.ms_popup_close {
  position: absolute;
  z-index: 100;
  right: 41px;
  top: 27px;
  width: 32px;
  height: 32px;
  opacity: 0.3;
  background: #fff;
}

@media (max-width: 480px) {
  .ms_popup_close {
    right: 25px;
    top: 3px;
  }
}

.ms_popup_close:hover {
  opacity: 1;
}
.ms_popup_close:before, .ms_popup_close:after {
  position: absolute;
  left: 15px;
  content: ' ';
  height: 33px;
  width: 2px;
  background-color: #333;
}
.ms_popup_close:before {
  transform: rotate(45deg);
}
.ms_popup_close:after {
  transform: rotate(-45deg);
}
</style>

