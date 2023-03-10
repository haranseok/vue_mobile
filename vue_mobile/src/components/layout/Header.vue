<template>
    <header :class="scrollY > 0 ? 'h_bg':''" >
        <div class="container">
                <div class="logo">
                    <img src="@/assets/images/logo.png" alt="">
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
            color: #ee495a;
        }
        .logo{
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            img{
                height: 24px;
            }
        }
    }
}
.h_bg{
    background: #fff;
}
</style>