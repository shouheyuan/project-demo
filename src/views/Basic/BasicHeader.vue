<template>
  <div class="main header-main">
    <div class="header-info">
      <div class="brand">
        <img
          src="https://demos.creative-tim.com/muse-vue-ant-design-dashboard/documentation/_nuxt/img/logo-ct-black.ad49dd6.png"
          alt="logo"
        />
        <span>我是logo</span>
      </div>
    </div>
    <div class="header-nav">
      <a-menu v-model="currentMenu" mode="horizontal" @click="onMenuClick">
        <a-menu-item v-for="item in menuList" :key="item.name">
          {{ item.label }}
        </a-menu-item>
      </a-menu>
    </div>
    <div class="header-user">
      <a-icon size="18" type="user" class="m-r-5"></a-icon>
      <a-dropdown>
        <span class="cursor-default">我是用户名</span>
        <a-menu slot="overlay" @click="userLogout">
          <a-menu-item>退出</a-menu-item>
        </a-menu>
      </a-dropdown>
      <a-divider type="vertical" />
      <span class="header-user-item">我的应用</span>
      <a-divider type="vertical" />
      <span class="header-user-item">移动报表</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentMenu: ["homeIndex"],
      menuList: [
        { label: "首页", name: "homeIndex" },
        { label: "广告创意库", name: "materialIndex" },
        { label: "互动广告库", name: "Material2" },
        { label: "产品投放排行", name: "Material3" },
      ],
    };
  },
  methods: {
    onMenuClick({ key }) {
      this.$router.push({
        name: key,
      });
    },
    userLogout() {
      this.$utils.setToken("");
      this.$router.push({
        name: "Login",
      });
    },
    changeCurrentMenu(route) {
      this.currentMenu = [route.meta.menu];
    },
  },
  mounted() {
    this.changeCurrentMenu(this.$route);
  },
  watch: {
    $route(newVal) {
      this.changeCurrentMenu(newVal);
    },
  },
};
</script>

<style lang="less" scoped>
.header-main {
  z-index: 9;
  display: flex;
  align-items: center;
  padding: 0 20px;
  background-color: #fff;
  box-shadow: 0 2px 8px #f0f1f2;

  .brand img {
    width: 40px;
    margin-right: 5px;
  }
  .header-nav {
    display: flex;
    align-items: center;
    .ant-menu {
      padding-bottom: 0;
      margin-left: 60px;
      line-height: 64px;
      border-bottom: 0;
    }
  }
  .header-user {
    margin-left: auto;
    &-item {
      cursor: pointer;
    }
  }
}
</style>
