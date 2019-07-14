<template>
    <div id="items" >
        <section>
            <transition-group name="list" id="infinite-list" class="timeLineList list-group" tag="ul">
                <li v-for="(timeLineItem, itemId) in propsdata" :key="itemId" class="shadow timeline-list list-group-item">
                    <div id = "itemInner"> 
                        <div class = "itemInnerBox">
                            <div id="logoBox">
                                <div id = "logo" v-bind:style="{ backgroundImage: 'url(' + timeLineItem.logoUrl + ')' }"></div>
                            </div>
                            <div class="names">                      
                                <div id="title" class="own">
                                    {{ timeLineItem.title.trim() }}
                                </div>
                                <div class="own"> 
                                    <span>
                                        Update Date : {{ dateFormatting(timeLineItem.updateAt) }}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class = "itemInnerBox" id="content">
                            <div class="desc" v-html="timeLineItem.content">
                                {{ timeLineItem.content }}
                            </div>                            
                        </div>
                        <div class="go-page">
                            <a class="go-link" v-bind:href="timeLineItem.landingUrl">자세히 보기</a>
                        </div>
                    </div>
                </li>
            </transition-group>
    </section>
    </div>
</template>

<script>
const dateformat = require('dateformat');

export default {
    props: ['propsdata'],
    methods: {
        dateFormatting(input) {
            return dateformat(new Date(input), 'yyyy.mm.dd');
        }
    }
}
</script>

<style>

    .go-page {
        cursor: pointer;
        display: -webkit-box;
        display: flex;
        height: 36px;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        color: #ff7676;
        border-top: 1px solid #f1f1f4;
        font-size: 12px;
        font-weight: 500;
        line-height: 1.5;
    }

    #content {
        margin-top: -10px;
    }

    #title {
        font-weight: bold;
    }

    .own {
        font-size: 13px;
        line-height: 23px;
    }

    .desc {
        padding: 24px 0px 0 1px;
        font-size: 14px;
        color: #3a3a3c;
        line-height: 1.5;
    }

    .names {
        display: inline-block;
        vertical-align: middle;
        padding-left: 10px;
        padding-top: 1px;
        color: #000000;
    }

    #logoBox {
        display: inline-block;
    }

    #logo {
        width: 62px;
        height: 62px;
        background-size: 80%;
        background-repeat: no-repeat;
        background-position: center center;
        border: 1px #ebebeb solid;
    }

    .itemInnerBox {
        display: flex;
        margin-top: 9px;
    }

    #itemInner {
        width: 100%;
        overflow: hidden;
    }

    #items {
        overflow: scroll;
        min-height: 100vh;
        padding: 80px 0 51px;
        background: #fff;
        box-sizing: border-box;
    }

    .list-enter-active, .list-leave-active {
        transition: all 1s;
    }

    .list-enter, .list-leave-to {
        opacity: 0;
        transform: translate(30px);
    }

    ul {
        list-style-type: none;
        padding-left: 0px;
        margin-top: 0;
        text-align: left;
    }

    li {
        text-align: left;
        display: flex;
        margin: 0.5rem 0;
        padding: 0 0.9rem;
        background: white;
        border-radius: 5px;
    }
</style>



