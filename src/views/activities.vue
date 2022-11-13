<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <h2 class="mb-8">Виды ботинок</h2>
        <div
          v-for="i of 5"
          :key="i"
          class="d-flex align-start flex-column mb-4"
        >
          <p class="mb-1 info--text">Туфли {{ i }}</p>
          <span>Описание: {{ lorem }}</span>
        </div>
      </v-col>
      <v-divider vertical class="ml-1 mr-4" />
      <v-col>
        <h2 class="mb-8">Одежда</h2>
        <div
          v-for="j of 5"
          :key="j"
          class="d-flex align-start flex-column mb-4"
        >
          <p class="mb-1 info--text">Рубашка {{ j }}</p>
          <span>Описание: {{ lorem }}</span>
        </div>
      </v-col>
      <v-divider vertical class="ml-1 mr-4" />
      <v-col>
        <h2 class="mb-8">Бабочки и галстуки</h2>
        <div
          v-for="k of 5"
          :key="k"
          class="d-flex align-start flex-column mb-4"
        >
          <p class="mb-1 info--text">Бабочка {{ k }}</p>
          <span>Описание: {{ lorem }}</span>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "activities",
  data() {
    return {
      lorem:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis velit quae repellendus in nihil neque dolorum placeat amet aliquam sapiente, eum consectetur ratione quis similique dolore quam cupiditate perferendis. Quis.",
    };
  },
};
</script>
