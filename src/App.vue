<template>
  <div id = "app" class="wrapper">
    <TimeLineHeader v-bind:propsdata="searchQuery" v-on:search="search" v-on:inputQuery="inputQuery"></TimeLineHeader>
    <TimeLineList v-bind:propsdata="timeLineItems"></TimeLineList>
    <TimeLineFooter v-bind:propsdata="clickedIndex" @clicked="clicked"></TimeLineFooter>
  </div>
</template>

<script>

import TimeLineFooter from '../components/TimeLineFooter.vue'
import TimeLineHeader from '../components/TimeLineHeader.vue'
import TimeLineList from '../components/TimeLineList.vue'
import axios from 'axios';
const { get, today } = require('../common/common');

const TITLES = {
  all: '모두보기',
  job: '채용공고',
  tech: '기술블로그'
};

export default {
  data() {
    return {
      searchQuery: '',
      clickedIndex: 'all',
      currTitle: TITLES['all'],
      currPage: 0,
      isLast: false,
      loading: false,
      timeLineItems: []
    }
  },
  mounted() {
    window.addEventListener('scroll', e => {
        const el = document.scrollingElement || document.documentElement;
        
        let bottomOfWindow = el.scrollTop + window.innerHeight >= document.documentElement.offsetHeight - 10;
        if (bottomOfWindow) {
            this.loadTimeLineItems(this.clickedIndex);
        }
    });

    // Initially load some items.
    this.loadTimeLineItems(this.clickedIndex);
  },
  methods: {
    search() {
      this.currPage = 0;
      this.isLast = false;
      window.scrollTo(0,0);
      this.loadTimeLineItems(this.clickedIndex);
    },
    inputQuery(searchQuery) {
      this.searchQuery = searchQuery;
    },
    clicked(index) {
      this.clickedIndex = index;
      this.searchQuery = '';
      this.currTitle = TITLES[`${this.clickedIndex}`];

      this.currPage = 0;
      this.isLast = false;
      window.scrollTo(0,0);
      this.loadTimeLineItems(index);
    },
    loadTimeLineItems(index) {
      if (this.isLast) return;
      if (this.loading) return;
      if (!index) index = this.clickedIndex;
      const params = {
        page: this.currPage
      };
      
      if (index === 'all' || index === 'job') {
        params.searchDate = today();
      } else {
        delete params.searchDate;
      }

      if (this.searchQuery) params.searchQuery = this.searchQuery;
      this.loading = true;
    
      let url;
      if (index === 'all') {
        url = `${get('api.host')}`;
      } else {
        url = `${get('api.host')}/site/${index}`;
      }

      axios({
          method: 'GET',
          url,
          params
      }).then((response) => {
          if (this.currPage === 0) {
            this.timeLineItems.length = 0;
          }
          this.timeLineItems.push(...response.data.content);
          this.currPage = response.data.page;
          this.isLast = response.data.isLast;
          this.loading = false;
      }).catch((ex)=> {
          console.log("ERR!!!!! : ", ex);
          this.loading = false;
      });
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
   .go-link { 
      color: red !important; 
      text-decoration: none !important;
    }

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

