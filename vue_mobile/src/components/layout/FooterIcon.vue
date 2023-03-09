<template>
    <footer>
        <ul class="container flex">
            <li 
                v-for="(list, i) in iconList.icon" :key="i" 
                class="flex cp"
                :class="current === i ? 'active':''"
                @click="btnClick(current = i)">
                <v-icon>{{ list }}</v-icon>
                <span>{{ iconList.text[i] }}</span>
            </li>
        </ul>
    </footer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

let current = ref(0)

let iconList = ref({
    icon: ['mdi-home-outline','mdi-shopping-outline','mdi-wallet-outline','mdi-newspaper-variant-outline','mdi-dots-horizontal'],
    text: ['홈','마켓','자산','매거진','더보기']
});

function btnClick(option: number) {
    current.value = option
    console.log(option)
}
</script>

<style lang="scss" scoped>
    footer{
        width: 100%;
        position: fixed;
        bottom: 0;
        background: #fff;
        .container{
            width: 100%;
            justify-content: space-between;
            padding: 20px;
            li{
                width: 40px;
                flex-direction: column;
                align-items: center;
                font-size: 0.83rem;
                color: #aaa;
            }
            .active{
                color: #000;
            }
        }
    }
    
    @media screen and (min-width: 1023px) {
        footer{
            display: none;
        }
    }
</style>