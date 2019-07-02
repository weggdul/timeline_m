<template>
  <div id = "app" class="wrapper">
    <TimeLineHeader v-bind:propsdata="currTitle"></TimeLineHeader>
    <TimeLineList></TimeLineList>
    <TimeLineFooter v-bind:propsdata="clickedIndex" @clicked="clicked"></TimeLineFooter>
  </div>
</template>

<script>

import TimeLineFooter from '../components/TimeLineFooter.vue'
import TimeLineHeader from '../components/TimeLineHeader.vue'
import TimeLineList from '../components/TimeLineList.vue'
const TITLES = {
  1: '모두보기',
  2: '채용공고',
  3: '기술블로그',
  4: '아파트 분양공고'
};

export default {
  data() {
    return {
      clickedIndex: 1,
      currTitle: TITLES[1]
    }
  },
  methods: {
    clicked(index) {
      this.clickedIndex = index;
      this.currTitle = TITLES[`${this.clickedIndex}`];
    }
  },
  components: {
    'TimeLineFooter': TimeLineFooter,
    'TimeLineHeader': TimeLineHeader,
    'TimeLineList': TimeLineList
  }
}
</script>

<style>
    .wrapper {
      width: 100%;
      max-width: 700px;
      margin: 0 auto;      
      overflow: hidden;
      background:#f1f1f3;
    }
    body {
        text-align: center;
        background-color: #f6f6f8;
    }
    body,p,h1,h2,h3,ul,li {
      padding: 0;
      margin: 0;    
    }
    input {
        border-style: groove;
        width: 200px;
    }
    button {
        border-style: groove;
    }
    .shadow {
        box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03)
    }
</style>

