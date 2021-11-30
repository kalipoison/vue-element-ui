<template>
    <el-row class="home" :gutter="20">
        <el-col :span="8" style="margin-top: 20px">
            <el-card shadow="hover">
                <div class="user">
                    <img :src="userImg" alt=""/>
                    <div class="userinfo">
                        <p class="name">Admin</p>
                        <p class="access">超级管理员</p>
                    </div>
                </div>
                <div class="login-info">
                    <p>上次登录时间 : <span>2021/11/29</span></p>
                    <p>上次登录地点 : <span>浙江</span> </p>
                </div>
            </el-card>
            <el-card style="margin-top: 20px" shadow="hover" >
                <el-table :data="tableData">
                    <el-table-column
                        show-overflow-tooltip
                        v-for="(value,key) in tableLabel"
                        :key="key"
                        :prop="key"
                        :label="value"
                    >
                    </el-table-column>
                </el-table>
            </el-card>
        </el-col>
        <el-col :span="16" style="margin-top: 20px">
            <div class="num">
                <el-card shadow="hover" 
                    v-for="item in countData"
                    :key="item.name"
                    :body-style="{ display: 'flex', padding: 0}"
                >
                    <i class="icon" 
                        :class="`el-icon-${ item.icon }`" 
                        :style="{ background: item.color }"
                    ></i>
                    <div class="detail">
                        <p class="num">${{ item.value }}</p>
                        <p class="txt">${{ item.name }}</p>
                    </div>
                </el-card>
            </div>
            <el-card shadow="hover" style="height: 200px"></el-card>
            <div class="graph">
                <el-card shadow="hover" style="height: 280px"></el-card>
                <el-card shadow="hover" style="height: 280px"></el-card>
            </div>
        </el-col>
    </el-row>
</template>

<script>

import { getHome } from '../../api/data'

export default {
    data() {
        return {
            userImg : require('../../assets/images/user.png'),
            tableData : [
                {
                    name : 'oppo',
                    todayBuy : 100,
                    monthBuy : 300,
                    totalBuy : 400,
                },
                {
                    name : 'vivo',
                    todayBuy : 100,
                    monthBuy : 300,
                    totalBuy : 400,
                },
                {
                    name : 'iphone',
                    todayBuy : 100,
                    monthBuy : 300,
                    totalBuy : 400,
                },
                {
                    name : 'iphone',
                    todayBuy : 100,
                    monthBuy : 300,
                    totalBuy : 400,
                },
            ],
            tableLabel : {
                name : '手机',
                todayBuy : '今日销量',
                monthBuy : '月销量',
                totalBuy : '总销量',
            },
            countData: [{
                name: "今日支付订单",
                value: 1234,
                icon: "success",
                color: "#2ec7c9",
            },
            {
                name: "今日收藏订单",
                value: 210,
                icon: "star-on",
                color: "#ffb980",
            },
            {
                name: "今日未支付订单",
                value: 1234,
                icon: "s-goods",
                color: "#5ab1ef",
            },
            {
                name: "本月支付订单",
                value: 1234,
                icon: "success",
                color: "#2ec7c9",
            },
            {
                name: "本月收藏订单",
                value: 210,
                icon: "star-on",
                color: "#ffb980",
            },
            {
                name: "本月未支付订单",
                value: 1234,
                icon: "s-goods",
                color: "#5ab1ef",
            }],
        }
    },
    methods : {
        getTableData () {
            getHome().then((res) => {
                console.info("res", res.data);
            });
        },
    },
    mounted() {
        this.getTableData();
    },
}
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/home";
</style>

