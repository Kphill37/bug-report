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
    text-shadow: 1px 1px #000000;

    background-color: rgb(37, 36, 36);
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #ffffff;
    background-color: rgb(37, 36, 36);
  }

  #nav {
    text-align: left;
    padding: 30px;
  }

  #nav a {
    font-size: 3vh;
    font-weight: bold;
    color: #ffffff;
  }

  #nav a.router-link-exact-active {
    text-decoration: underline;
  }
</style>