<template>
  <div class="message">
    <p>{{message}}</p>
    <input v-model="message" />
  </div>
</template>

<script>
export default {
  name: "message",
  data() {
    return {
      message: ""
    };
  },
  created() {
    setTimeout(() => {
      this.message = "main message !";
    }, 1000);
  }
};
</script>

<style lang="less" scoped src="./index.less"></style>
