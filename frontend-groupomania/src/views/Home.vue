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
          <input
            id="file"
            required
            type="file"
            placeholder="Ajouter une image"
            @change="onFileChange"
            accept=".jpg, .jpeg, .png, .gif"
          />
          <input
            id="submit"
            type="button"
            @click="createPost"
            value="Poster !"
          />
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
    file: null,
    filesAccepted: ["image/png", "image/jpeg", "image/jpg", "image/gif"],
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
      .catch((error) => {
        console.error(error);
        alert("Une erreur est survenue");
      });
  },
  methods: {
    //
    onFileChange(event) {
      const file = event.target.files[0];
      if (!this.filesAccepted.includes(file.type)) {
        event.target.value = null;
        return alert("Seul les fichiers jpg, jpeg, png et gif sont accéptés");
      }
      this.file = file;
    },
    //création d'un post
    createPost() {
      if (!this.title) {
        alert("Le titre est obligatoire");
        return;
      }
      const formData = new FormData();

      formData.append("title", this.title);
      formData.append("description", this.description);
      formData.append("userId", Number(localStorage.getItem("userId")));

      if (this.file) {
        formData.append("img", this.file);
      }
      this.$http
        .post("http://localhost:3000/api/posts", formData, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Content-Type": "multipart/form-data",
          },
        })
        .then(() => {
          this.$router.go();
        })
        .catch((error) => {
          console.error(error);
          alert("Une erreur est survenue");
        });
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
