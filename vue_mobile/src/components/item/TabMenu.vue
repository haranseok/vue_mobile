<template>
    <div id="tabs">
        <ul class="tab_menu">
            <li v-for="(nav, i) in  menu" :key="i"
            :class="{active: currentTab === i}"
            class="cp"
            @click="tabClick(currentTab = i)">
            {{ nav }}
            </li>
        </ul>
        <div class="tab_content">
            <div v-show="currentTab === 0">
                <slot name="tab_1"></slot>
            </div>
            <div v-show="currentTab === 1">
                <slot name="tab_2"></slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { toRefs } from "vue"

const currentTab = ref(0);

const props = defineProps({
    menu: Array,
    isTabShow: Number
});
const emit = defineEmits(['clickTab'])
const { menu } = toRefs(props);
function tabClick(option:number) {
    emit('clickTab', option)
};

</script>

<style lang="scss" scoped>

.tab_menu{
    display: flex;
    li{
        padding: 5px 10px;
        border-radius: 3px;
        font-size: 14px;
        font-weight: bold;
        border: 1px solid #eee;
        &:nth-child(2){
            margin-left: 10px;
        }
    }
}
.active{
    color: #fff;
    border: none;
    background: #ec4a5d;
}
</style>