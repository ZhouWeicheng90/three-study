<template>
  <div id="nav">
    <router-link to="/">three能力概览</router-link>
    <router-link to="/about">深入网格模型</router-link>
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
