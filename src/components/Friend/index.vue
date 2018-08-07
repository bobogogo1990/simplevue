<template>
  <div class="friend">
    <p>{{friend}}</p>
  </div>
</template>

<script>
export default {
  name: "friend",
  data() {
    return {
      friend: "friend 1"
    };
  }
};
</script>

<style lang="less" scoped src="./index.less"></style>