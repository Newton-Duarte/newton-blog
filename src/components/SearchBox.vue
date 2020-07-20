<template>
  <input
    v-model="term"
    type="search"
    name="search"
    id="search"
    placeholder="Search ..."
    @keyup="search"
    @search="search"
  >
</template>

<script>
export default {
  data: () => ({
    timeout: null,
    term: ''
  }),
  methods: {
    search() {
      clearTimeout(this.timeout);
      this.timeout = null;
      this.timeout = setTimeout(() => this.$emit('search', this.term), 500);
    }
  }
}
</script>

<style scoped>
input {
  margin: 0;
}
</style>