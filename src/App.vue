<template>
  <div id="nav">
    <router-link to="/Three00-Global">three能力概览</router-link>
    <router-link to="/Three01-Geometry">Geometry</router-link>
    <router-link to="/Three02-Shadow">阴影</router-link> 
    <router-link to="/Three03-model3d">3D建模</router-link> 
       
  </div>
  <div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
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
  width: 800px;
  height: 750px;
}
</style>
