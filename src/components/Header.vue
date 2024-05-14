<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
    components: {
        RouterLink,
        RouterView
    },
}
</script>

<template lang="">
    <div class="headArea">
        <h1>盤子創意行銷股份有限公司</h1>
        <h1>網路商城管理系統</h1>
        <!-- <RouterLink class="routeItem" to="/HomeView" >HomeView</RouterLink> -->
    </div>
</template>

<style lang="scss" scoped>
    .headArea{
        width: 100%;
        height:5dvh;
        h1{
            text-align: center;
        }
        
    }
</style>