<template>
  <div class="about">
    <div class="logo">
      <img alt="Vue logo" src="../assets/logo.png" />
    </div>
    <section class="formulaire">
      <h1>
        Bienvenue !<br />
        Connectez-vous a votre compte
      </h1>
      <form id="form" @submit="login" class="topBefore">
        <h2>Connexion</h2>
        <input id="email" v-model="email" type="email" placeholder="EMAIL" />
        <input
          id="password"
          v-model="password"
          type="password"
          placeholder="PASSWORD"
        />
        <input id="submit" type="submit" value="GO!" />
        <div><router-link to="/signup">S'inscrire</router-link></div>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  name: "Signin",
  data: () => ({
    email: null,
    password: null,
    emailRule: (v) => /.+@.+\..+/.test(v),
    passwordRule: (v) => /^[a-zA-Z]{4,}$/.test(v),
  }),
  methods: {
    login() {
      if (!this.emailRule(this.email)) {
        alert("L'email doit être valide");
        return;
      }
      if (!this.passwordRule(this.password)) {
        alert("Le mot de passe doit contenir un minimun de 4 caractères");
        return;
      }
      this.$http
        .post("http://localhost:3000/api/auth/signin", {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("userId", res.data.id);
          localStorage.setItem("isAdmin", res.data.isAdmin);
          this.$router.push("/");
        })
        .catch(console.error);
    },
  },
};
</script>

<style scoped>
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
