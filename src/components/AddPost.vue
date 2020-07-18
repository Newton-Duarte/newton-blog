<template>
  <form @submit.prevent="save">
    <input v-model="post.title" type="text" name="title" id="title" placeholder="Title">
    <textarea v-model="post.body" name="body" id="body" cols="30" rows="10" placeholder="Body"></textarea>
    <input type="submit" class="btn" value="Save">
  </form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data: () => ({
    post: {
      title: '',
      body: ''
    }
  }),
  methods: {
    ...mapActions(['addPost']),
    defaultPostObject() {
      return { title: '', body: '' };
    },
    preparePostObject() {
      return { ...this.post };
    },
    save() {
      if (this.post.title && this.post.body) {
        const newPost = this.preparePostObject();
        this.addPost(newPost);
        this.post = this.defaultPostObject();
      }
    }
  }
}
</script>

<style scoped>
form {
  width: 600px;
  max-width: 100%;
}
</style>