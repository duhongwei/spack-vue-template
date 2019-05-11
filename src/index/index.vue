<template>
<div>
  <ul>
    <li v-for="item in items" :key="item.id">
      <a :href="item.url">{{ item.text }}</a>
    </li>
  </ul>
  <p class="time">current time:{{time}}</p>
</div>
</template>

<script>
export default {
  mounted() {
    var othis=this
    this.timeHandler=window.setInterval(function(){
      othis.time=new Date().toLocaleTimeString();
    },1000)
  },
  data() {
    return {
      items: [
        {
          id: 1,
          text: "spack gitgub地址",
          url: "https://github.com/duhongwei/spack"
        },
        { id: 2, text: "Vue.js文档", url: "https://cn.vuejs.org" }
      ],
      time: new Date().toLocaleTimeString()
    };
  },
  beforeDestroy() {
    window.clearInterval(this.timeHandler);
  }
};
</script>
<style>
.time {
  background: url(./image/clock.svg) no-repeat;
  padding-left: 2em;
  background-size: auto 100%;
  width: 20em;
  margin: 1em auto;
  text-align: left;
}
</style>
