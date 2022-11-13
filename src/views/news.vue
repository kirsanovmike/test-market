<template>
  <v-container fluid>
    <h3 class="primary--text">
      Здесь можно найти новостную сводку за неделю
      {{ new Date().toDateString() }}
    </h3>
    <img
      class="mt-8"
      src="@/assets/news.jpg"
      alt="Вот такие у нас новости"
      title="Вот такие у нас новости"
    />
  </v-container>
</template>

<script>
export default {
  name: "news",
};
</script>
