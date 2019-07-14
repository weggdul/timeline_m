<template>
    <div id = "header">
        <div id="headerBox">
            <h1>모든 정보를 한번에 위들 타임라인</h1>
            <div id="query">
              <div class="search">
                <input v-model="searchQuery" v-on:keyup.enter="changeInput" class="search-input" placeholder="내용을 입력하세요."/>
                <div @click="changeInput" class="searchIcon"><i class="fas fa-search"></i></div>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['propsdata'],
    data() {
      return {
        searchQuery: ''
      }
    },
    methods: {
      changeInput: function() {
        this.$emit('changeInput', this.searchQuery);
      }
    }
}
</script>

<style>
  .searchIcon {
    display: inline-block;
  }

  .search-input {
    width: 69%;
    height: 32px;
    font-size: 14px;
    line-height: 100%;
    background: #f6f6f6;
    z-index: 3;
    border: 1px solid #DFE1E5;
    padding-left: 15px;
    border-radius: 20px;
  }

  .search {
    position: relative;
    top: 8px;
    display: inline;
    height: 32px;
    border-radius: 1px;
  }

  #query {
    height: 50px;
    margin-top: -10px;
    border-radius: 20px;
  }

  #header {
    z-index: 100;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    -webkit-transition: all .2s ease;
    transition: all .2s ease;
  }

  #headerBox {
    position: relative;
    background: #fff;
    overflow-x: auto;
    max-width: 700px;
    min-height: 70px;
    margin: 0 auto;
    border-bottom: 1px solid #ebebeb;
  }

  #header h1 {
    position: relative;
    margin:0 auto;
    font-size:15px;
    font-weight: bold;
    width: 250px;
    text-align:center;
    line-height:50px;        
    white-space: nowrap;
    text-overflow: ellipsis;            
  }

  #subTitle {
    position: relative;
    margin:0 auto;
    font-size:13px;
    width: 250px;
    text-align:center;
    line-height:10px;        
    white-space: nowrap;
    text-overflow: ellipsis;            
  }
</style>


