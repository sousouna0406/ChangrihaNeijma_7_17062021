<template>
  <section class="user-container">
    <h1>{{ user.email }}</h1>
    <button v-if="!isAdmin" @click="deleteAccount" class="delete">
      Supprimer mon compte
    </button>

    <section id="posts">
      <PostComponent
        :post="post"
        v-for="post of user.Posts"
        :key="post.id"
      ></PostComponent>
    </section>
  </section>
</template>

<script>
export default {
  name: "User",
  data: () => ({
    user: {},
    isAdmin: localStorage.getItem("isAdmin") === "true",
  }),
  created() {
    this.$http
      .get(
        "http://localhost:3000/api/users/" + localStorage.getItem("userId"),
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        this.user = res.data.user;
      })
      .catch(console.error);
  },
  methods: {
    deleteAccount() {
      if (confirm("Êtes vous sûr de vouloir supprimer votre compte ?")) {
        this.$http
          .delete(
            "http://localhost:3000/api/users/" + localStorage.getItem("userId"),
            {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            }
          )
          .then(() => {
            localStorage.clear();
            this.$router.push("/signin");
          })
          .catch(console.error);
      }
    },
  },
};
</script>

<style scoped>
.user-container {
  width: 100%;
}
.delete {
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
#posts {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
