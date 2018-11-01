<template>
  <div>
    <sys-news-nav></sys-news-nav>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import sysNewsNav from "./nav"
export default {
  components: {
    "sys-news-nav": sysNewsNav
  },
    metaInfo: {
      title: "消息中心"
    }
}
</script>

<style scoped lang="scss">
</style>
