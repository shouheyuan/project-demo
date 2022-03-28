<template>
  <a-layout>
    <basic-header></basic-header>
    <a-layout-content>
      <div class="main-content">
        <router-view></router-view>
      </div>
    </a-layout-content>
  </a-layout>
</template>

<script>
import BasicHeader from "@/views/Basic/BasicHeader";
export default {
  components: {
    BasicHeader,
  },
};
</script>

<style lang="less">
.main-content {
  // margin-top: 10px;
}
</style>
