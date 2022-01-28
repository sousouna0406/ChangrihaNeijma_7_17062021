<template>
  <div class="about">
    <section class="formulaire">
      <h1>Un réseau social dédié exclusivement pour nos employés</h1>
      <form id="form" class="topBefore">
        <h2>Connexion</h2>
        <input id="name" type="text" placeholder="NAME" />
        <input id="password" type="text" placeholder="PASSWORD" />
        <input id="submit" type="submit" value="GO!" />
      </form>
    </section>
  </div>
</template>

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
