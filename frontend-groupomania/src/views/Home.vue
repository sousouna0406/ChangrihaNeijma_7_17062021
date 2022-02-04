<template>
  <article id="posts">
    <h1>Acceuil</h1>
    <div class="formulaire">
      <p>Partagez avec vos collegues !</p>
      <form action="/post" method="post">
        <div>
          <label for="message">Votre message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Bonjour, ...."
            required
          ></textarea>
        </div>
        <div>
          <input id="submit" type="submit" value="Send" />
        </div>
      </form>
    </div>
    <section id="posts">
      <PostComponent post="post" v-for="post of posts"></PostComponent>
    </section>
  </article>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    posts: [],
  }),
  created() {
    console.log("home");
    this.$http
      .get("http://localhost:3000/api/posts", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch(console.error);
  },
  methods: {},
};
</script>

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
