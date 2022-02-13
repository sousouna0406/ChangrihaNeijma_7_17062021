<template>
  <section id="posts">
    <div class="formulaire">
      <h1>Partagez avec vos collegues <i class="far fa-comment-dots"></i></h1>
      <form class="form">
        <div class="message">
          <input
            id="title"
            required
            v-model="title"
            type="text"
            placeholder="Titre*"
          />
          <textarea
            v-model="description"
            id="message"
            name="message"
            placeholder="Présentez-vous, dites quelque chose..."
            required
          ></textarea>
          <input id="submit" @click="createPost" value="Poster !" />
        </div>
      </form>
    </div>
    <section>
      <PostComponent
        :post="post"
        v-for="post of posts"
        :key="post.id"
      ></PostComponent>
    </section>
  </section>
</template>

<script>
export default {
  name: "Home",
  // initialisation des variables (models) utilisées par le composant
  data: () => ({
    posts: [],
    title: "",
    description: "",
  }),
  // création d'un post
  created() {
    this.$http
      .get("http://localhost:3000/api/posts", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        this.posts = res.data.posts;
      })
      .catch(console.error);
  },
  methods: {
    //création d'un post
    createPost() {
      if (!this.title) {
        alert("Le titre est obligatoire");
        return;
      }

      this.$http
        .post(
          "http://localhost:3000/api/posts",
          {
            title: this.title,
            description: this.description,
            userId: Number(localStorage.getItem("userId")),
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        )
        .then(() => {
          this.$router.go();
        })
        .catch(console.error);
    },
  },
};
</script>

<style scoped>
section {
  height: 100%;
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
  padding: 12px;
  background: white;
  outline: none;
  color: #42b983;
  border: solid 1px #b3aca7;
  transition: all 0.3s ease-in-out;
  border-radius: 30px;
}
textarea:hover {
  box-shadow: 0px 8px 15px #858282;
  transform: scale(0.95);
}
input:hover {
  background: #46c08993;
  color: #0f0e0e;
  box-shadow: 0px 8px 15px #858282;
  transform: scale(0.95);
}
.form {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

#title {
  display: flex;

  justify-content: center;
  align-items: center;
  font-size: 15px;
  width: 100%;
  padding: 12px;
  background: white;
  outline: none;
  color: #42b983;
  border: solid 1px #b3aca7;
  transition: all 0.3s ease-in-out;
  border-radius: 30px;
}
#submit {
  padding: 25px;
  font-size: 0.875em;
  color: white;
  font-weight: bold;
  outline: none;
  cursor: pointer;
  border: solid 1px #b3aca7;
  border-radius: 50px;
  background: #42b983;
  text-align: center;
}

#submit:hover {
  color: #e2dedb;
}

.message {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  flex-direction: column;
  gap: 10px;
}
#posts {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
