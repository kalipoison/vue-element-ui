<template>
  <el-container>
    <el-aside width="auto"><CommonAside></CommonAside></el-aside>
    <el-container >
      <el-header>Header</el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from '../components/CommonAside.vue';
export default {
  name: 'Main',
  components: { CommonAside }
}
</script>

<style
    CommonAside lang="scss" scoped>
.el-header {
  background: #333;
}
.el-main {
  padding-top: 0;
}
</style>
