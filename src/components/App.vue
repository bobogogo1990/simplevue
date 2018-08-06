<template>
  <div class="container">
    <div class="header">{{header}}</div>
    <div class="main">
      {{main}}
      <div class="msg">
        {{msg}}
      </div>
    </div>
    <div class="footer">{{footer}}</div>
  </div>
</template>

<script>
import { getUserInfo } from "utils/common";
export default {
  name: "App",
  data() {
    return {
      header: "HEADER",
      main: "MAIN",
      msg: "Loading...",
      footer: "FOOTER"
    };
  },
  async created() {
    const r = await getUserInfo();
    this.msg = r.data.userId;
  }
};
</script>

<style>
.header {
  background-color: #eee;
  font-size: 40px;
}
</style>
