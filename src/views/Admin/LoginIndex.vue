<template>
  <main class="main-sign-in">
    <div class="">
      <a-row type="flex" align="middle">
        <a-col
          :span="24"
          :md="12"
          :lg="{ span: 12, offset: 0 }"
          :xl="{ span: 6, offset: 4 }"
        >
          <div class="col-form">
            <h1>登录</h1>
            <a-form :wrapper-col="{ span: 24 }">
              <a-form-item label="账号" :colon="false">
                <a-input placeholder="请输入账号" />
              </a-form-item>
              <a-form-item label="密码" :colon="false">
                <a-input-password placeholder="请输入密码" />
              </a-form-item>
              <a-form-item>
                <a-button block type="primary" @click="userLogin"
                  >登录</a-button
                >
              </a-form-item>
            </a-form>
          </div>
        </a-col>
        <a-col :span="24" :md="12" :lg="12" :xl="{ span: 10, offset: 2 }">
          <img
            class="login-img"
            src="https://demos.creative-tim.com/muse-vue-ant-design-dashboard/images/img-signin.jpg"
            alt=""
          />
        </a-col>
      </a-row>
    </div>
  </main>
</template>

<script>
export default {
  methods: {
    userLogin() {
      this.$router.push({
        name: "homeIndex",
      });
    },
  },
};
</script>

<style lang="less" scoped>
.main-sign-in {
  padding: 40px 20px;
}
.login-img {
  width: 100%;
  max-width: 500px;
  padding: 12px;
}
.col-form {
  padding: 12px;
}
</style>
