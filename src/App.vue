<template>
  <div id="nav">
    <router-link to="/Three00-Global">three能力概览</router-link>
    <router-link to="/Three01-Geometry">Geometry</router-link>
    <router-link to="/Three02-Shadow">阴影</router-link>
    <router-link to="/Three03-model3d">3D建模</router-link>
    <router-link to="/Three04-Texture">纹理(基础)</router-link>
    <router-link to="/Three05-Texture-notImage">更多纹理</router-link>
  </div>
  <div>
    <router-view />
  </div>
</template>

<style>
#app {
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 20px;
  position: sticky;
  top: 0;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin-right: 1em;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
canvas {
  border: 1px solid #eee;
  width: 900px;
  height: 810px;
}
</style>
