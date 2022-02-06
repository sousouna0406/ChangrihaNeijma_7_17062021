<template>
  <article id="posts">
    <div class="formulaire">
      <h1>Partagez avec vos collegues !</h1>
      <form class="post">
        <div class="message">
          <textarea
            id="message"
            name="message"
            placeholder="Présentez-vous, ..."
            required
          ></textarea>
        </div>

        <input id="submit" type="submit" value="Send" />
      </form>
    </div>
    <section id="posts">
      <!-- <PostComponent post="post" v-for="post of posts"></PostComponent>-->
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
article {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}
.formulaire {
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

#message {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  width: 100%;
  padding: 15px;
  background: white;
  outline: none;
  color: #42b983;
  border: solid 1px #b3aca7;
  transition: all 0.3s ease-in-out;
  border-radius: 30px;
}

input:hover {
  background: #46c08993;
  color: #0f0e0e;
}
.post {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

#submit {
  padding: 25px;

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

.message {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
}
</style>
