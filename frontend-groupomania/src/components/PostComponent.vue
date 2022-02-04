<template>
  <div class="posts">
    <article class="post">
      <div class="post">
        <span class="post-info"
          >Posté le {{ dateFormat(post.date) }} par {{ post.email }}
        </span>
        <span class="post-modify">Modifier</span>
      </div>
      <h2 class="post-title">{{ post.title }}</h2>
      <div class="post-description"></div>
    </article>
  </div>
</template>
