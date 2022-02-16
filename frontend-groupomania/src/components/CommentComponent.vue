<template>
  <div class="reply">
    <div class="reply_content">
      <div class="comment_name">
        {{ comment.User.email }},<br />{{
          new Date(comment.createdAt).toLocaleString("fr")
        }}
      </div>
      <p>{{ comment.content }}</p>
    </div>
    <button
      @click="deleteComment"
      v-if="currentUserId == comment.User.id || isAdmin"
      class="post-delete"
    >
      Supprimer
    </button>
  </div>
</template>
<script>
export default {
  name: "CommentComponent",
  // initialisation des variables (models) utilisées par le composant
  data: () => ({
    currentUserId: localStorage.getItem("userId"),
    isAdmin: localStorage.getItem("isAdmin") === "true",
  }),
  props: ["comment"],
  methods: {
    //suppression d'un comment
    deleteComment() {
      if (confirm("Êtes vous sûr de vouloir supprimer votre commentaire ?")) {
        this.$http
          .delete(
            "http://localhost:3000/api/posts/" +
              this.comment.postId +
              "/comment/" +
              this.comment.id,
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
      }
    },
  },
};
</script>

<style scoped>
.reply {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  text-align: left;
}
.reply_content {
  display: flex;
  flex-direction: column;
  flex: 1;
}
.comment_name {
  font-weight: bold;
}
button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-size: 0.875em;
  color: #ff3737;
  font-weight: bold;
  background: #ff373713;
  outline: none;
  cursor: pointer;
  margin: 5px;
  border: solid 1px #ff3737;
  border-radius: 15px;
}
button:hover {
  box-shadow: 0px 8px 15px #858282;
  transform: scale(0.95);
  background: #ff3737;
  color: #ffffff;
}
</style>
