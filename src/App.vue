<template>
  <body id="App-background-style" :style="fire">
    <el-menu
        router
        mode="horizontal"
        background-color="rgba(0,0,0,0.64)"
        text-color="#222"
        active-text-color="#ff5f5f"
        :ellipsis="false"
    >
      <el-image
        :src="Logo"
        class="app-Navlogo-style"
      ></el-image>
      <el-menu-item>
        <h1 class="app-nav-menu-title-text">Warma-Head</h1>
      </el-menu-item>
      <el-menu-item>
        <el-button type="danger" circle @click="changeFire()"><el-icon style="left: 3px;"><MagicStick /></el-icon></el-button>
      </el-menu-item>
      <div class="app-nav-menu-right-div-style" />
      <el-image
        :src="githubLogo"
        class="app-githubLogo-style"
        @click="clickGithub()"
      ></el-image>
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
import { MagicStick } from '@element-plus/icons-vue'; // 确保你使用的是正确的图标名

let fireNow = 0;

export default
{
  components: { MagicStick,},
  data ()
  {
    return {
      Logo: require('@/assets/logo/function-head.webp'),
      githubLogo: require('@/assets/logo/github-mark-white.webp'),
      fire: {backgroundImage: 'url(' + nightImage + ')'},
      place: "top:" + (window.innerHeight - 32) + "px;left:" + (window.innerWidth/2 - 173) + "px;",
    }
  },
  methods: 
  {
    clickGithub()
    {
      window.open('https://github.com/soraincloud/warma-head', '_blank');
    },
    changeFire()
    {
      if(fireNow == 0)
      {
        this.fire = {backgroundImage: 'url(' + lightImage + ')'}
        fireNow = 1
      }
      else
      {
        this.fire = {backgroundImage: 'url(' + nightImage + ')'}
        fireNow = 0
      }
    },
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

.app-nav-menu-title-text
{
  color: white;
}

.app-nav-menu-right-div-style
{
  flex-grow: 1;
}

.app-float-div-style
{
  color: rgba(0, 0, 0, 0.5);
  font-weight: bold;
  position: absolute;
  z-index: 100;
}

.app-Navlogo-style
{
  height: 50px;
  margin: 5px 10px 5px 10px;
}

.app-githubLogo-style
{
  height: 30px;
  margin: 13px 20px 10px 20px;
}
</style>