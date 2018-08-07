<template>
  <div class="container">
    <div class="header">{{header}}</div>
    <div class="main">
      {{main}}
      <div class="msg">
        <p class="btn" v-on:click="increate">增加count</p>
        {{msg}}  count: {{ count }}
      </div>
      <div class="navs">
        <span v-on:click="pushWindow($event, 'friend')">去friend</span>
        <span v-on:click="pushWindow($event, 'message')">去message</span>
      </div>
      <router-view />
    </div>
    <div class="footer">{{footer}}</div>
    <input v-model="username" />
  </div>

</template>

<script>
import { getUserInfo } from "utils/common";
import Friend from "components/Friend";
import { mapState } from "vuex";

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
  computed: {
    ...mapState({
      count(state) {
        return state.count;
      }
    })
  },
  methods: {
    pushWindow(e, path) {
      console.log("message", path);
      this.$router.push(path);
    },
    increate() {
      console.log("component increate");
      this.$store.commit("increment", {
        step: 2
      });
    }
  }
};
</script>
<style lang="less" scoped src="./index.less"></style>


