<template>
    <div id = "header">
        <div id="headerBox">
            <h1>모든 정보를 한번에 위들 타임라인</h1>
            <div id="subTitle">{{ propsdata }}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['propsdata']
}
</script>

<style>
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


