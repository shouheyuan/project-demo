<template>
  <div class="tag-box-wrap m-b-15">
    <div class="tag-label">{{ data.label }}</div>
    <div class="tag-list">
      <span
        class="tag-item"
        :class="isActive(item)"
        v-for="item in data.list"
        :key="item.id"
        @click="handleTagItemClick(item)"
      >
        {{ item.name }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      value: [],
    };
  },
  methods: {
    handleTagItemClick(item) {
      //   let index = this.data.list.findIndex((e) => e === item);
      let index = this.value.findIndex((e) => e === item);
      if (index === -1) {
        this.value.push(item);
      } else {
        this.value.splice(index, 1);
      }
      this.emitData();
    },
    emitData() {
      let data = {
        id: this.data.id,
        label: this.data.label,
        value: this.value,
      };
      this.$emit("on-change", data);
    },
    // 页面使用
    isActive(item) {
      return this.value.findIndex((e) => e === item) === -1 ? "" : "active";
    },
  },
};
</script>

<style lang="less" scoped>
.tag-box-wrap {
  display: flex;
  .tag-label {
    flex: 0 0 80px;
  }
  .tag-list {
    display: flex;
    flex-wrap: wrap;
  }
  .tag-item {
    display: inline-block;
    min-width: 85px;
    padding: 5px 12px;
    margin-right: 8px;
    margin-bottom: 4px;
    text-align: center;
    border-radius: 92px;
    cursor: pointer;
    &.active {
      color: #2d8cf0;
      background-color: #f0f6ff;
    }
  }
}
</style>
