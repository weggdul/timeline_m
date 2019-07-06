<template>
    <div id="footer">
        <div id="footerBox">
            <div id="home" @click="clicked('all')" v-bind:class="[propsdata === 'all' ? 'clicked' : '', 'category']">
                <i class="footerIcon fas fa-home" aria-hidden="true"></i>
                <span class="category-txt">HOME</span>
            </div>
            <div id="job" @click="clicked('job')" v-bind:class="[{'clicked' : propsdata === 'job'}, 'category']">
                <i class="footerIcon fas fa-hand-holding-usd" aria-hidden="true"></i>
                <span class="category-txt">JOB</span>
            </div>
            <div id="tech" @click="clicked('tech')" v-bind:class="[propsdata === 'tech' ? 'clicked' : '', 'category']">
                <i class="footerIcon fas fa-code" aria-hidden="true"></i>
                <span class="category-txt">TECH</span>
            </div>
            <div id="apt" @click="clicked('apt')" v-bind:class="[propsdata === 'apt' ? 'clicked' : '', 'category']">
                <i class="footerIcon fas fa-building" aria-hidden="true"></i>
                <span class="category-txt">APT</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['propsdata'],
    methods: {
        clicked(index) {
            this.$emit('clicked', index);
        }
    }
}
</script>

<style>
    .clicked {
        color: #003 !important;
    }

    .footerIcon {
        position: absolute;
        left: 50%;
        top: 7px;
        overflow: hidden;
        width: 24px;
        height: 24px;
        margin: 0 0 0 -12px;
        font-size: 22px;
        line-height: 24px;
        text-align: center;
    }

    .category {
        position: relative;
        display: block;
        cursor: pointer !important;
        height: 50px;
        padding: 32px 0 0;
        color: #aaa;
        box-sizing: border-box;
        float: left;
        width: 25%;
    }

    #footer {
        background: #fff;
        z-index: 2000;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        -webkit-transition: all .4s ease;
        transition: all .4s ease;
    }

    #footerBox {
        z-index: 20;
        position: relative;
        max-width: 700px;
        margin: 0 auto;
        background-size: 7px auto;
    }
</style>


