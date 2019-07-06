<template>
    <div id="items">
        <section>
            <transition-group name="list" class="timeLineList" tag="ul">
                <li v-for="(timeLineItem, itemId) in propsdata" :key="itemId" class="shadow timeline-list">
                    <div id = "itemInner"> 
                        <div class = "itemInnerBox">
                            <div id = "logo" v-bind:style="{ backgroundImage: 'url(' + timeLineItem.logoUrl + ')' }">
                            </div>
                            <div class="names">                      
                                <div id="title" class="own">
                                    {{ timeLineItem.title.trim() }}
                                </div>
                                <div class="own"> 
                                    <span>
                                        Update Date : {{ dateFormatting(timeLineItem.updateAt) }}
                                    </span>
                                    <div class="text-more fas fa-caret-down"> 더 보기</div>
                                </div>
                            </div>
                        </div>
                        <div class = "itemInnerBox" id="content">
                            <div class="desc" v-html="timeLineItem.content">
                                {{ timeLineItem.content }}
                            </div>                            
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
    #content {
        margin-top: -10px;
    }

    #title {
        font-weight: bold;
    }

    .text-more {
        font-size: 11px;
        line-height: 23px;
        margin-left: 85px;
        cursor: pointer;
        border: 1px solid rgba(185,185,185,.5);
        border-radius: 16px;
        line-height: 30px;
        width: 55px;
        text-align: center;
        color: inherit;
        box-sizing: border-box;
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
        display: table-cell;
        vertical-align: middle;
        padding-left: 10px;
        color: #000000;
    }

    #logo {
        display: table-cell;
        width: 50px;
        height: 50px;
        background-size: 80%;
        background-repeat: no-repeat;
        background-position: center center;
        border: 1px #ebebeb solid;
    }

    #itemInnerBox {
        overflow: hidden;
        display: inherit;
        width: 100%;
        height: 50%;
    }

    #itemInner {
        overflow: hidden;
    }

    #items {
        overflow: scroll;
        min-height: 100vh;
        padding: 70px 0 51px;
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
        min-height: 130px;
        height: 130px;
        line-height: 130px;
        margin: 0.5rem 0;
        padding: 0 0.9rem;
        background: white;
        border-radius: 5px;
    }
</style>



