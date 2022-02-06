<template>
  <article class="post">
    <div class="post">
      <span class="post-info"
        >Posté le {{ dateFormat(Posts.date) }} par {{ Posts.email }}
      </span>
      <span class="post-modify">Modifier</span>
    </div>
    <h2 class="post-title">{{ Posts.title }}</h2>
    <div class="post-description"></div>
  </article>
</template>

<style scoped></style>
