<template>
  <section>
    <div class="home">
      <div class="logo">
        <img alt="Vue logo" src="../assets/logo.png" />
      </div>
      <HelloWorld msg="Réseau sociale pour les entreprises" />
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
