<template>
  <a-popover :title="title">
    <div slot="content" class="main-popover-list">
      <slot name="list">
        <p
          v-for="(item, index) in list"
          :key="index"
          class="main-popover-list-item"
        >
          <img
            class="main-popover-img"
            src="https://adinsights-new.oss-cn-huhehaote.aliyuncs.com/static/adfa/35.png?Expires=1931240237&OSSAccessKeyId=LTAI4G7uVtsTvSYaa1ekxQoF&Signature=xdeh74iL506SSu7zhcgyQdVLbS4%3D"
          />
          <span class="main-popover-name hidden-text-1"
            >哈哈哈哈哈哈哈哈哈哈</span
          >
        </p>
      </slot>
    </div>
    <slot name="show"></slot>
  </a-popover>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "更多",
    },
    list: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="less">
.main-popover-list {
  max-height: 200px;
  overflow-x: auto;
  padding: 10px;
  &-item {
    display: flex;
    margin-bottom: 15px;
  }
  .main-popover-img {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }
  .main-popover-name {
    width: 150px;
  }
}
</style>
