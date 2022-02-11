<template>
  <div class="about">
    <div class="logo">
      <img alt="Vue logo" src="../assets/logo.png" />
    </div>
    <section class="formulaire">
      <h1>
        Bienvenue !<br />
        Le réseau sociale interne dédié à nos employés
      </h1>
      <form id="form" @submit="signup" class="topBefore">
        <h2>S'inscrire</h2>
        <input id="email" v-model="email" type="email" placeholder="EMAIL" />
        <input
          id="password"
          v-model="password"
          type="password"
          placeholder="PASSWORD"
        />
        <input id="submit" type="submit" value="GO!" />
        <div><router-link to="/signin">Se connecter</router-link></div>
      </form>
    </section>
  </div>
</template>
<script>
export default {
  name: "Signup",
  // Utilisation des regex pour l'email & password
  data: () => ({
    email: null,
    password: null,
    emailRule: (v) => /.+@.+\..+/.test(v),
    passwordRule: (v) => /^[a-zA-Z]{4,}$/.test(v),
  }),
  methods: {
    // fonction pour l'inscription d'un user et si l'email et le password est OK
    // redirection vers la page login
    signup() {
      if (!this.emailRule(this.email)) {
        alert("L'email doit être valide");
        return;
      }
      if (!this.passwordRule(this.password)) {
        alert("Le mot de passe doit contenir un minimun de 4 caractères");
        return;
      }
      this.$http
        .post("http://localhost:3000/api/auth/signup", {
          email: this.email,
          password: this.password,
        })
        .then(() => {
          this.$router.push("/signin");
        })
        .catch(console.error);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
h2 {
  color: #42b983;
}
.formulaire {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
#form {
  position: relative;
  width: 100%;
  margin: 50px auto 100px auto;
}

input {
  font-size: 15px;
  width: 50%;
  padding: 15px;
  background: white;
  outline: none;
  color: #42b983;
  border: solid 1px #b3aca7;
  transition: all 0.3s ease-in-out;
}
#name {
  border-bottom: none;
}

input:hover {
  background: #46c08993;
  color: #0f0e0e;
}

#submit {
  margin-top: 30px;
  padding: 15px;

  font-size: 0.875em;
  color: #b3aca7;

  outline: none;
  cursor: pointer;

  border: solid 1px #b3aca7;
  border-radius: 50px;
}

#submit:hover {
  color: #e2dedb;
}
</style>
