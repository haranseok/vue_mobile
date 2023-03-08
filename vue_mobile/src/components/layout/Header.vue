<template>
    <header :class="scrollY > 0 ? 'h_bg':''">
        <div class="container jcsb">
            <v-btn text>홈</v-btn>
        </div>
    </header>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

let scrollY = ref(0)

function headerBgChange() {
    window.addEventListener("scroll", () => {
        scrollY.value = window.scrollY
    })
}

headerBgChange();

</script>

<style lang="scss" scoped>
header{
    width: 100%;
    height: 60px;
    position: sticky;
    top: 0;
    .container{
        height: 60px;
        align-items: center;
        text-transform: uppercase;
    }
}
.h_bg{
    color: #fff;
    background: rgb(123, 138, 143);
}
</style>