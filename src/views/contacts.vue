<template>
  <v-container fluid>
    <form>
      <v-text-field
        v-model="name"
        :error-messages="nameErrors"
        :counter="10"
        label="Ваше имя"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="email"
        :error-messages="emailErrors"
        label="E-mail"
        required
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      ></v-text-field>
      <v-select
        v-model="select"
        :items="items"
        :error-messages="selectErrors"
        label="Причина обращения"
        required
        @change="$v.select.$touch()"
        @blur="$v.select.$touch()"
      ></v-select>
      <v-checkbox
        v-model="checkbox"
        :error-messages="checkboxErrors"
        label="Do you agree?"
        required
        @change="$v.checkbox.$touch()"
        @blur="$v.checkbox.$touch()"
      ></v-checkbox>

      <v-btn class="mr-4" :disabled="$v.$invalid" @click="submit">
        submit
      </v-btn>
      <v-btn @click="clear"> clear </v-btn>
    </form>
  </v-container>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";

export default {
  name: "contacts",
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(10) },
    email: { required, email },
    select: { required },
    checkbox: {
      checked(val) {
        return val;
      },
    },
  },

  data: () => ({
    name: "",
    email: "",
    select: null,
    items: ["Все сломалось", "Просто так"],
    checkbox: false,
  }),

  computed: {
    checkboxErrors() {
      const errors = [];
      if (!this.$v.checkbox.$dirty) return errors;
      if (!this.$v.checkbox.checked) {
        errors.push("Согласитесь, чтобы продолжить!");
      }
      return errors;
    },
    selectErrors() {
      const errors = [];
      if (!this.$v.select.$dirty) return errors;
      if (!this.$v.select.required) {
        errors.push("Знанчение должно быть передано");
      }
      return errors;
    },
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      if (!this.$v.name.maxLength) {
        errors.push("Максимум 10");
      }
      if (!this.$v.name.required) {
        errors.push("Знанчение должно быть передано");
      }
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      if (!this.$v.email.email) {
        errors.push("Не похоже на email");
      }
      if (!this.$v.email.required) {
        errors.push("Знанчение должно быть передано");
      }
      return errors;
    },
  },

  methods: {
    submit() {
      this.$v.$touch();
      /* eslint-disable */
      alert("Спасибо за обращение! Мы с Вами свяжемся!");
      /* eslint-enable */
      this.clear();
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.select = null;
      this.checkbox = false;
    },
  },
};
</script>
