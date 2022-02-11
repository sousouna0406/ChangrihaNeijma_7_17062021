<template>
  <div id="app">
    <header v-if="isLogged">
      <div id="nav">
        <router-link to="/"><i class="fas fa-home"></i></router-link>
        |
        <router-link to="/user"
          ><i class="fas fa-address-card"></i
        ></router-link>
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
export default {
  name: "App",
  data: () => ({
    isLogged: localStorage.getItem("token"),
  }),
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
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo {
  display: flex;
  justify-content: center;
  width: 100%;
}
.logo img {
  width: 265px;
}

#nav {
  width: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
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
.row {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
.footertex {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 15px;
}
.container {
  width: 100%;
}
.footer-dark h3 {
  margin-top: 0;
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 16px;
}

.footer-dark ul {
  padding: 0;
  list-style: none;
  line-height: 1.6;
  font-size: 14px;
  margin-bottom: 0;
}

.footer-dark ul a {
  color: inherit;
  text-decoration: none;
  opacity: 0.6;
}

.footer-dark ul a:hover {
  opacity: 0.8;
}
.copyright {
  padding: 20px;
}
@media (max-width: 767px) {
  .footer-dark .item:not(.social) {
    text-align: center;
    padding-bottom: 20px;
  }
}

.footer-dark .item.text {
  margin-bottom: 36px;
}

@media (max-width: 767px) {
  .footer-dark .item.text {
    margin-bottom: 0;
  }
}

.footer-dark .item.text p {
  opacity: 0.6;
  margin-bottom: 0;
}

.footer-dark .item.social {
  text-align: center;
}

@media (max-width: 991px) {
  .footer-dark .item.social {
    text-align: center;
    margin-top: 20px;
  }
}

.footer-dark .item.social > a {
  font-size: 20px;
  width: 36px;
  height: 36px;
  line-height: 36px;
  display: inline-block;
  text-align: center;
  border-radius: 50%;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.4);
  margin: 0 8px;
  color: #fff;
  opacity: 0.75;
}

.footer-dark .item.social > a:hover {
  opacity: 0.9;
}

.footer-dark .copyright {
  text-align: center;
  padding-top: 24px;
  opacity: 0.3;
  font-size: 13px;
  margin-bottom: 0;
}
</style>
