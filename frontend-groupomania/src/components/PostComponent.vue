<template>
  <div id="all-posts">
    <div class="post-user">
      <p>Par {{ post.User.email }}</p>
    </div>
    <div class="post-create">
      <p>Posté le {{ post.createdAt }}</p>
    </div>

    <h4 class="post-title">{{ post.title }}</h4>
    <div class="post-description">{{ post.description }}</div>
    <div class="button">
      <button @click="update" class="post-modify">Modifier</button>
      <button @click="update" class="post-delete">Supprimer</button>
    </div>
  </div>
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
}
.button {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
</style>
