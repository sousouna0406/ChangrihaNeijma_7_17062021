<template>
  <div id="app">
    <header>
      <div id="nav">
        <router-link to="/">S'inscire</router-link> |
        <router-link to="/about">Connection</router-link>
      </div>
    </header>

    <router-view />

    <footer class="footer-dark">
      <div class="container">
        <div class="row">
          <div class="footertex">
            <h3>Services</h3>
            <ul>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Development</a></li>
              <li><a href="#">Hosting</a></li>
            </ul>
          </div>
          <div class="footertex">
            <h3>Coordonnées</h3>
            <ul>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Development</a></li>
              <li><a href="#">Hosting</a></li>
            </ul>
          </div>
        </div>
        <div class="col item social">
          <a href="#"><i class="icon ion-social-facebook"></i></a
          ><a href="#"><i class="icon ion-social-twitter"></i></a
          ><a href="#"><i class="icon ion-social-snapchat"></i></a
          ><a href="#"><i class="icon ion-social-instagram"></i></a>
        </div>
        <p class="copyright">CONNECT-E © 2022</p>
      </div>
    </footer>
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
  font-size: 19px;
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
