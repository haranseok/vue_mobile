<template>
    <div>
        <h2>gallery st</h2>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()

setTimeout(function(){
    router.push('/home')    
}, 2300);

</script>

<style lang="scss" scoped>
    div{
        width: 100%;
        height: 100%;
        position: relative;
        h2{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            font-size: 6vw;
            text-transform: uppercase;
            animation: ani 1s;
        }
    }
    
    @keyframes ani {
        from{
            letter-spacing: 20px;
            filter: blur(5px);
            opacity: 0;
        }to{
            letter-spacing: 0;
            filter: blur(0);
            opacity: 1px;
        }    
    }
        
    @media screen and (max-width: 480px) {
        
        @keyframes ani {
            from{
                letter-spacing: 8px;
                filter: blur(5px);
                opacity: 0;
            }to{
                letter-spacing: 0;
                filter: blur(0);
                opacity: 1px;
            }    
        }

    }
</style>