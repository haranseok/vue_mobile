<template>
    <header :class="scrollY > 0 ? 'h_bg':''">
        <div class="container">
                <div class="logo">
                    gallery st
                </div>
            <v-btn 
                variant="text" 
                icon="mdi-bell-outline" />
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
    position: fixed;
    top: 0;
    z-index: 9;
    .container{
        display: flex;
        justify-content: end;
        position: relative;
        height: 60px;
        align-items: center;
        text-transform: uppercase;
        .v-btn{
            color: #444;
        }
        .logo{
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            font-size: 1.2rem;
        }
    }
}
.h_bg{
    color: #444;
    background: #fff;
    .container{
        .v-btn{
            color: #444;
        }
    }
}
</style>