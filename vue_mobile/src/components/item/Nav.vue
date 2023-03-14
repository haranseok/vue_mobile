<template>
    <nav>
        <span><strong>klaytn wallet address: </strong> {{ kaikasAddress }}</span> <br>
        <span><strong>ethereum wallet address: </strong> {{ ethereumAddress }}</span>
        <ul>
            <li class="kaikas" @click="getKlaytnWallet">kaikas 지갑 연결</li>
            <li class="metamask" @click="getEthereumWallet">metamask 지갑 연결</li>
        </ul>
    </nav>
</template>

<script setup>
import Kaikas from '@/service/wallet/Kaikas';
import Ethereum from '@/service/wallet/Metamask';
import { ref, watch } from 'vue'
import Web3 from "web3"

let kaikasAddress = ref('')
let ethereumAddress = ref('')

async function getKlaytnWallet(){
    if(Kaikas.isKaikas() === true){
        const wallet = await window.klaytn.enable()
        window.klaytn.on('accountsChanged', function() {
            kaikasAddress.value = window.klaytn.selectedAddress
        });
        // window.klaytn.on('networkChanged', function() {
        //     alert(window.klaytn.networkVersion)
        // })
        kaikasAddress.value = wallet[0]
    }else{
        alert('카이카스 확장프로그램을 설치해주세요.')
        window.open('https://chrome.google.com/webstore/detail/kaikas/jblndlipeogpafnldhgmapagcccfchpi?hl=ko')
    }
}

async function getEthereumWallet(){
    if(Ethereum.isEthereum() === true){
        const wallet = await window.ethereum.enable()
        window.ethereum.on('accountsChanged', function() {
            ethereumAddress.value = window.ethereum.selectedAddress
        })
        ethereumAddress.value = wallet[0]
    }else{
        alert('메타마스크 확장프로그램을 설치해주세요.')
        window.open('https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=ko')
    }
}

</script>

<style lang="scss" scoped>
nav{
    padding: 5%;
    ul{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        li{
            width: 200px;
            padding: 5%;
            margin: 10px 0;
            white-space: nowrap;
            text-transform: uppercase;
            border-radius: 5px;
            color: #fff;
            font-size: 0.85rem;
            cursor: pointer;
            background: rgb(147, 129, 103);
        }
        .kaikas{
            background: rgb(165, 197, 58);
        }
        .metamask{
            background: #808080;
        }
    }
}
</style>