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
  }),
  props: ["post"],
  methods: {
    //
    setEditMode() {
      this.editMode = !this.editMode;
    },
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
          .catch(console.error);
      }
    },
    update() {
      this.$http
        .put(
          "http://localhost:3000/api/posts/" + this.post.id,
          {
            title: this.post.title,
            description: this.post.description,
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
