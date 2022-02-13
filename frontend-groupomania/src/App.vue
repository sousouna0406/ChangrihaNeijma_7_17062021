<template>
  <div id="app">
    <header v-if="isLogged">
      <div class="logo">
        <img alt="Vue logo" src="../src/assets/logo.png" />
      </div>
      <div id="nav">
        <router-link to="/"><i class="fas fa-home"></i></router-link>
        |
        <router-link to="/user"
          ><i class="fas fa-address-card"></i
        ></router-link>
        |
        <router-link to="/signin">
          <i class="fas fa-sign-out-alt"></i>
        </router-link>
      </div>
    </header>

    <router-view />

    <footer class="footer-dark">
      <div class="container">
        <p class="copyright">CONNECT-E © 2022</p>
      </div>
    </footer>
  </div>
</template>

<script>
// fonction pour la verification que l'utilisateur ou l'admin est logger
// pour avoir accès au menu de navigation
export default {
  name: "App",
  // fonction pour la recupération du token
  data: () => ({
    isLogged: localStorage.getItem("token"),
  }),
  // fonction pour la mise a jour du token
  updated() {
    this.isLogged = localStorage.getItem("token");
  },
};
</script>

<style>
html,
body {
  height: 100%;
}
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
  background-color: #f3f1f0d7;
  top: 0px;
  z-index: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  height: 100px;
}

.logo {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 20px;
}
.logo img {
  width: 38%;
  height: 10%;
}

#nav {
  width: 100%;
  justify-content: flex-end;
  display: flex;
  align-items: center;
  margin-right: 20px;
}

#nav a {
  margin: 10px;
  font-size: 25px;
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.footer-dark {
  width: 100%;
  display: flex;
  color: #f0f9ff;
  background-color: #282d32;
  align-items: center;
  justify-content: center;
}

.container {
  width: 100%;
}

.copyright {
  padding: 20px;
}
@media (max-width: 767px) {
  .footer-dark .item:not(.social) {
    text-align: center;
    padding-bottom: 20px;
  }
  .logo img {
    width: 70%;
  }
}

@media (max-width: 767px) {
  .footer-dark .item.text {
    margin-bottom: 0;
  }
}

@media (max-width: 991px) {
  .footer-dark .item.social {
    text-align: center;
    margin-top: 20px;
  }
}

.footer-dark .copyright {
  text-align: center;
  padding-top: 24px;
  opacity: 0.3;
  font-size: 13px;
  margin-bottom: 0;
}
</style>
