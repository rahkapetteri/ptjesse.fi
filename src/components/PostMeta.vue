<template>
   <div class="post-meta">
    <div class="post-date">
      <time>{{ post.date }}</time> | 
      <template v-if="post.timeToRead == 1">
        ☕️ Lukuaika noin <time>{{ post.timeToRead }}</time> minuutti
      </template>

      <template v-else>
        ☕️ Lukuaika noin <time>{{ post.timeToRead }}</time> minuuttia
      </template>
    </div>
    <div v-if="post.date != post.updated_at" class="updated_at text-background-title">päivitetty: <time>{{ post.updated_at }}</time></div>
    </div>
</template>

<script>
export default {
  props: ['post']
}
</script>

<style lang="scss">
.post-meta {
  margin: 0.75rem 0;
  font-size: var(--font-size-14);
}

.post-date{
  display: block;
}

.updated_at{
  margin-top: .5rem;
  display: inline-block;
  font-size: var(--font-size-13);
}
</style>