<template>
    <div id="items">
        <section>
            <transition-group name="list" tag="ul">
                <li v-for="(title, itemId) in propsdata" :key="itemId" class="shadow timeline-list">
                    {{ title }}
                </li>
            </transition-group>
    </section>
    </div>
</template>

<script>
export default {
    props: ['propsdata']        
}
</script>

<style>
    .timeline-list {
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
        display: flex;
        min-height: 50px;
        height: 50px;
        line-height: 50px;
        margin: 0.5rem 0;
        padding: 0 0.9rem;
        background: white;
        border-radius: 5px;
    }
</style>



