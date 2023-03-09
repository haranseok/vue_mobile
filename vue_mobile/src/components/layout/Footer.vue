<template>
    <footer>
        <ul class="f_top">
            <div class="container jcsb">
                <li v-for="(list, i) in family" :key="i">{{ list }}</li>
            </div>
        </ul>
        <div class="container">
            <div class="f_bottom">
                <span v-for="(company, i) in companys" :key="i">{{ company }}</span>
            </div>
            <div class="f_email">
                <span>기업 제휴 문의: wisereport@gmail.com</span>
                <span>ceo@secrettown.co.kr | maxmook@naver.com</span>
            </div>
        </div>
    </footer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

let family = ref(['family site', 'metakingz', 'secret town', 'nftopia']);
let companys = ref(['대표: 조현규', '주소: 서울시 강남구 테헤란로 119 대호빌딩 8층', '사업자번호: 220-88-90031', '전화: 070-4736-0004']);
</script>

<style lang="scss" scoped>
footer{
    width: 100%;
    .f_top{
        width: 100%;
        padding: 10px 0;
        border-top: 1px solid #d1d0d0;
        border-bottom: 1px solid #d1d0d0;
        .container{
            li{
                text-transform: uppercase;
                &:nth-child(1){
                    font-weight: bold;
                }
            }
        }
    }

    & > .container{
        padding: 2% 0;
    }
    
    .f_bottom{
        font-size: 0.85rem;
        span:not(:last-child){
            &::after{
                content: '|';
                padding: 0 5px;
            }
        }
    }
    
    .f_email{
        font-size: 0.85rem;
        span{
            &:first-child{
                &::after{
                    content:'|';
                    padding: 0 5px;
                }
            }
        }
    }
}
@media screen and (max-width: 500px) {
    footer{
        .container{
            padding: 0 3%;
        }
        .f_bottom,.f_email{
            max-width: 420px;
            margin: 0;
            padding: 3%;
            color: #555;
            line-height: 1.8;
        }
    }
}
</style>