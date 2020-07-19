<template>
  <Modal
    :modal="modal"
    @close="$emit('close')"
  >
    <form @submit.prevent="save">
      <label for="title">Title</label>
      <input
        v-model="post.title"
        type="text"
        name="title"
        id="title"
        placeholder="Title of the post ..."
        required
      >
      <label for="body">Body</label>
      <textarea
        v-model="post.body"
        name="body"
        id="body"
        cols="30"
        rows="10"
        placeholder="Body of the post ..."
        required
      ></textarea>
      <input type="submit" class="btn" :value="btnText">
    </form>
  </Modal>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    modal: {
      type: Boolean,
      default: false
    },
    editPost: {
      default: null
    }
  },
  data: () => ({
    post: {
      title: '',
      body: ''
    }
  }),
  watch: {
    modal(value) {
      if (!value) this.post = this.defaultPostObject();
    },
    editPost(value) {
      if (value) this.post = value;
    }
  },
  computed: {
    btnText() {
      return this.editPost ? 'Update' : 'Save';
    }
  },
  methods: {
    ...mapActions(['addPost', 'updatePost']),
    defaultPostObject() {
      return { title: '', body: '' };
    },
    preparePostObject() {
      return { ...this.post };
    },
    save() {
      if (!this.editPost && this.post.title && this.post.body) {
        const newPost = this.preparePostObject();
        this.addPost(newPost);
        this.post = this.defaultPostObject();
        this.$emit('close');
      } else if (this.editPost && this.post.title && this.post.body) {
        const updPost = this.preparePostObject();
        this.updatePost(updPost);
        this.post = this.defaultPostObject();
        this.$emit('close');
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
form label {
  font-weight: bold;
}
form input,
form textarea {
  margin-top: 5px;
}
</style>