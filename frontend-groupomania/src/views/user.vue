<template>
  <section class="formulaire">
    <h1>{{ user.email }}</h1>

    <!-- mettre un bouton supprimer mon compte @click qui appelle la methode delete -->
  </section>
</template>

<script>
export default {
  name: "User",
  data: () => ({
    user: null,
  }),
  created() {
    console.log("user");
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
        console.log(res);
        this.user = res.data.user;
      })
      .catch(console.error);
  },
  methods: {
    delete() {
      this.$http
        .delete(
          "http://localhost:3000/api/users/" + localStorage.getItem("userId"),
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          console.log(res);
          localStorage.clear();
          this.$router.push("/signin");
        })
        .catch(console.error);
    },
  },
};
</script>
