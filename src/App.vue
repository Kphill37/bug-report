<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
  body {
    background-color: rgb(68, 67, 67);
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #ffffff;
    background-color: rgb(68, 67, 67);
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #ffffff;
  }

  #nav a.router-link-exact-active {
    color: #914ae2;
  }
</style>