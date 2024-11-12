<template>
  <body id="App-background-style" :style="fire">
    <el-menu
        router
        mode="horizontal"
        background-color="rgba(0,0,0,0.64)"
        text-color="#222"
        active-text-color="#ff5f5f"
        :ellipsis="false"
        :default-active="defaultActive"
    >
    </el-menu>
    <router-view/>
    <div class="app-float-div-style" :style="place">
        <span>copyright © soraincloud all rights reserved</span>
    </div>
  </body>
</template>

<script>
import nightImage from '@/assets/background/night.webp'
import lightImage from '@/assets/background/night-withlight.webp'

export default
{
  data ()
  {
    return {
      fire: {backgroundImage: 'url(' + nightImage + ')'},
      place: "top:" + (window.innerHeight - 32) + "px;left:" + (window.innerWidth/2 - 173) + "px;",
    }
  },
  mounted()
  {
    window.addEventListener('resize',() =>
      this.place = "top:" + (window.innerHeight - 32) + "px;left:" + (window.innerWidth/2 - 173) + "px"
    )
  },
}
</script>

<style>
body
{
  margin: 0;
}

#App-background-style
{
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center; /* 保持图片居中 */
  position: fixed;
}

.app-float-div-style
{
  color: rgba(0, 0, 0, 0.5);
  font-weight: bold;
  position: absolute;
  z-index: 100;
}
</style>