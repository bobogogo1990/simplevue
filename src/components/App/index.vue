<template>
  <div class="container">
    <div class="header">{{header}}</div>
    <div class="main">
      {{main}}
      <div class="msg">
        {{msg}}
      </div>
      <Message />
      <Friend />
    </div>
    <div class="footer">{{footer}}</div>
    <input v-model="username" />
  </div>
</template>

<script>
import { getUserInfo } from "utils/common";
import Friend from "components/Friend";

export default {
  name: "App",
  data() {
    return {
      header: "HEADER",
      main: "MAIN",
      msg: "Loading...",
      footer: "FOOTER",
      username: "enter name"
    };
  },
  async created() {
    const r = await getUserInfo();
    this.msg = r.data.userId;
  },
  components: {
    Friend,
    Message: () =>
      import(/* webpackChunkName: "Message" */ "components/Message")
  }
};
</script>
<style lang="less" scoped src="./index.less"></style>


