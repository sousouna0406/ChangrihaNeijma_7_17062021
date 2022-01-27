<template>
  <div id="app">
    <header>
      <div id="nav">
        <router-link to="/">S'inscire</router-link> |
        <router-link to="/about">Connection</router-link>
      </div>
    </header>

    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url("../src/assets/fond.jpeg");
  background-size: cover;
}
header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
section {
  width: 100%;
  background-image: url("../src/assets/fond.jpeg");
  background-size: cover;
}
.logo {
  display: flex;
  justify-content: center;
  width: 100%;
}
.logo img {
  width: 40%;
}

#nav {
  width: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
}

#nav a {
  margin: 10px;
  font-size: 23px;
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
