<template>
    <nav>
        <ul>
            <li class="kaikas">kaikas 지갑 연결</li>
            <li class="metamask">metamask 지갑 연결</li>
        </ul>
    </nav>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
nav{
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