<template>
  <div id = "app">
    <TimeLineHeader></TimeLineHeader>
    <TimeLineList></TimeLineList>
    <TimeLineFooter></TimeLineFooter>
  </div>
</template>

<script>

import TimeLineFooter from '../components/TimeLineFooter.vue'
import TimeLineHeader from '../components/TimeLineHeader.vue'
import TimeLineList from '../components/TimeLineList.vue'

export default {

  components: {
    'TimeLineFooter': TimeLineFooter,
    'TimeLineHeader': TimeLineHeader,
    'TimeLineList': TimeLineList
  }
}
</script>

<style>
  body {
        text-align: center;
        background-color: #f6f6f8;
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

