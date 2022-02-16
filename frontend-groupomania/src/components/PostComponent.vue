<template>
  <div id="all-posts">
    <div v-if="post.User" class="post-user">
      <p>Par {{ post.User.email }}</p>
    </div>
    <div class="post-create">
      <p>Posté le {{ new Date(post.createdAt).toLocaleString("fr") }}</p>
    </div>

    <h4 v-if="!editMode" class="post-title">{{ post.title }}</h4>
    <input type="text" v-if="editMode" v-model="post.title" />

    <div v-if="!editMode" class="post-description">{{ post.description }}</div>
    <textarea v-if="editMode" v-model="post.description"></textarea>

    <img
      class="post-img"
      v-if="!editMode && post.img"
      v-bind:src="post.img"
      v-bind:alt="post.title"
    />

    <input
      required
      v-if="editMode"
      type="file"
      placeholder="Modifier l'image"
      @change="onFileChange"
      accept=".jpg, .jpeg, .png, .gif"
    />

    <div
      v-if="!post.User || currentUserId == post.User.id || isAdmin"
      class="button"
    >
      <button @click="setEditMode" class="post-modify">
        {{ !editMode ? "Modifer" : "Annuler" }}
      </button>
      <button v-if="editMode" @click="update" class="post-modify-valid">
        Valider !
      </button>
      <button @click="deletePost" class="post-delete">Supprimer</button>
    </div>
    <div class="contain-com">
      <div class="post-commentaire">
        <h4 class="titre-rep">Répondre :</h4>
        <div class="commentaire">
          <input
            id="coms"
            required
            v-model="content"
            type="text"
            placeholder="Ecrivez un commentaire"
          />
          <button @click="commentPost" class="send-button">Envoyer</button>
        </div>
      </div>
      <CommentComponent
        :comment="comment"
        v-for="comment of post.Comments"
        :key="comment.id"
      ></CommentComponent>
    </div>
  </div>
</template>
<script>
export default {
  name: "PostComponent",
  // initialisation des variables (models) utilisées par le composant
  data: () => ({
    editMode: false,
    currentUserId: localStorage.getItem("userId"),
    isAdmin: localStorage.getItem("isAdmin") === "true",
    filesAccepted: ["image/png", "image/jpeg", "image/jpg", "image/gif"],
    isFileChanged: false,
    content: "",
  }),
  props: ["post"],
  methods: {
    // commenter un post
    commentPost() {
      this.$http
        .post(
          "http://localhost:3000/api/posts/" + this.post.id + "/comment/",
          {
            postId: this.post.id,
            userId: this.currentUserId,
            content: this.content,
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
        .catch((error) => {
          console.error(error);
          alert("Une erreur est survenue");
        });
    },
    // chargement des fichiers(img)
    onFileChange(event) {
      const file = event.target.files[0];
      if (!this.filesAccepted.includes(file.type)) {
        event.target.value = null;
        return alert("Seul les fichiers jpg, jpeg, png et gif sont accéptés");
      }
      this.post.img = file;
      this.isFileChanged = true;
    },
    //
    setEditMode() {
      this.editMode = !this.editMode;
    },
    //suppression d'un post
    deletePost() {
      if (confirm("Êtes vous sûr de vouloir supprimer votre post ?")) {
        this.$http
          .delete("http://localhost:3000/api/posts/" + this.post.id, {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          })
          .then(() => {
            this.$router.go();
          })
          .catch((error) => {
            console.error(error);
            alert("Une erreur est survenue");
          });
      }
    },
    // modification d'un post
    update() {
      const formData = new FormData();

      formData.append("title", this.post.title);
      formData.append("description", this.post.description);

      if (this.post.img && this.isFileChanged) {
        formData.append("img", this.post.img);
      }
      this.$http
        .put("http://localhost:3000/api/posts/" + this.post.id, formData, {
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
.contain-com {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: #b3aca727 ridge 2px;
  background-color: #b3aca727;
  padding: 4px;
  border-radius: 15px;
}
.titre-rep {
  padding-left: 16px;
}
.post-commentaire {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
}
.commentaire {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 11px;
  width: 100%;
}
.send-button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-size: 0.875em;
  color: #4fdd9d;
  font-weight: bold;
  background: #4dd4971f;
  outline: none;
  cursor: pointer;
  margin: 5px;
  border: solid 1px #4dd497;
  border-radius: 15px;
}
.send-button:hover {
  background: #4dd497;
  color: #ffffff;
}
#coms {
  margin: 0%;
  padding: 10px;
  border-radius: 15px;
}
#all-posts {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 60%;
  border: solid 1px #b3aca7;
  background: white;
  padding: 15px;
  margin: 25px;
  border-radius: 30px;
  box-shadow: 8px 15px 10px #858282;
}
p {
  margin: 0%;
}
input {
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  width: 97%;
  padding: 5px;
  background: white;
  outline: none;
  color: #42b983;
  border: solid 1px #b3aca7;
  transition: all 0.3s ease-in-out;
}
textarea {
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  width: 97%;
  padding: 5px;
  background: white;
  outline: none;
  color: #42b983;
  border: solid 1px #b3aca7;
  transition: all 0.3s ease-in-out;
}

h4 {
  margin: 0%;
  padding-top: 15px;
  display: flex;
  width: 100%;
}
.post-user {
  width: 100%;
  display: flex;
  background-color: #b3aca727;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.post-create {
  width: 100%;
  display: flex;
  background-color: #b3aca727;
}
.post-description {
  display: flex;
  width: 100%;
  padding: 15px;
}
.post-img {
  width: 100%;
}
.post-modify {
  padding: 15px;
  font-size: 0.875em;
  color: #ffffff;
  font-weight: bold;
  background: #9654b4;
  outline: none;
  cursor: pointer;
  margin: 15px;
  border: solid 1px #9654b4;
  border-radius: 50px;
}
.post-modify-valid {
  padding: 15px;

  font-size: 0.875em;
  color: #ffffff;
  font-weight: bold;
  background: #42b983;
  outline: none;
  cursor: pointer;
  margin: 15px;
  border: solid 1px #42b983;
  border-radius: 50px;
}
.post-delete {
  padding: 15px;
  font-weight: bold;
  font-size: 0.875em;
  color: #ffffff;
  background: #ff3737;
  outline: none;
  cursor: pointer;
  margin: 15px;
  border: solid 1px #ff3737;
  border-radius: 50px;
}
button:hover {
  box-shadow: 0px 8px 15px #858282;
  transform: scale(0.95);
  color: #e2dedb;
}
.button {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
</style>
