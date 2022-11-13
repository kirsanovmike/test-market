<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div
        class="d-flex align-center justify-space-between pa-4"
        style="width: 100%"
      >
        <div class="d-flex align-start flex-column">
          <h2 class="mb-0 pl-0 ml-0 card--text mb-1">MShop</h2>
          <p class="card--text mb-0">Clothing mens shop</p>
        </div>
        <div class="d-flex align-center">
          <v-btn color="primary" elevation="0" small to="/activities">Виды деятельности</v-btn>
          <v-btn color="primary" elevation="0" small class="ml-1" to="/catalog">Каталог</v-btn>
          <v-btn color="primary" elevation="0" small class="ml-1" to="/contacts">Контакты</v-btn>
          <v-btn color="primary" elevation="0" small class="ml-1" to="/news">Новости</v-btn>
        </div>
        <div class="d-flex align-end flex-column mt-1">
          <h3 class="mb-0 pl-0 ml-0 card--text mb-1">
            8&nbsp;(800) &nbsp;555&nbsp;-&nbsp;**&nbsp;-&nbsp;**
          </h3>
          <p class="card--text mb-0">г. Москва, Красная площадь, д.1</p>
        </div>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>
