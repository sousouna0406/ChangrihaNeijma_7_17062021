<template>
  <article class="post">
    <div class="post">
      <span class="post-info"
        >Posté le {{ post.createdAt }} par {{ post.User.email }}
      </span>
      <span @click="update" class="post-modify">Modifier</span>
    </div>
    <h2 class="post-title">{{ post.title }}</h2>
    <div class="post-description"></div>
  </article>
</template>
<script>
export default {
  name: "PostComponent",
  props: ["post"],
  methods: {
    update() {
      console.log("update");
      console.log(this.post);
    },
    delete() {
      console.log("delete");
      console.log(this.post);
    },
  },
};
</script>

<style scoped></style>
