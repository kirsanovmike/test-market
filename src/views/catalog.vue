<template>
  <v-container fluid>
    <p>
      Это наши товары, при необходимости Вы можете отсротировать по категориям и цене
    </p>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="16"
      hide-default-footer
      item-key="name"
      class="elevation-1"
    />
  </v-container>
</template>

<script>
export default {
  name: "catalog",
  data() {
    return {
      headers: [
        {
          text: "Товар",
          align: "start",
          value: "name",
        },
        { text: "Цена", value: "price" },
      ],
      desserts: [
        {
          name: "Рубашка",
          price: "1000",
        },
        {
          name: "Брюки",
          price: "1500",
        },
        {
          name: "Ботинки",
          price: "3500",
        },
        {
          name: "Бабочка",
          price: "700",
        },
        {
          name: "Галстук",
          price: "1200",
        },
        {
          name: "Запонки",
          price: "2000",
        },
        {
          name: "Носки",
          price: "100",
        },
        {
          name: "Очки",
          price: "25000",
        },
        {
          name: "Пиво",
          price: "50",
        },
        {
          name: "Водка",
          price: "150",
        },
        {
          name: "Рубашка-2",
          price: "2345",
        },
        {
          name: "Брюки-2",
          price: "5235",
        },
        {
          name: "Ботинки-2",
          price: "5435",
        },
        {
          name: "Бабочка-2",
          price: "345",
        },
        {
          name: "Галстук-2",
          price: "5434",
        },
        {
          name: "Запонки-2",
          price: "7000",
        },
      ],
    };
  },
};
</script>
