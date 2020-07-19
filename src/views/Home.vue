<template>
  <div id="home" class="home">
    <div class="add">
      <button
        class="btn"
        @click="modal = true"
      >Add Post</button>
    </div>
    <AddPost
      :modal="modal"
      :editPost="editPost"
      @close="closeEditPost"
    />
    <transition-group tag="ul">
      <li
        v-for="(post) of posts"
        :key="post.id + post.title"
      >
        <CardPost
          :title="post.title"
          :body="post.body"
          @edit="openEditPost(post)"
          @remove="deletePost(post.id)"
        />
      </li>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import CardPost from '@/components/CardPost';
import AddPost from '@/components/AddPost';

export default {
  name: "Home",
  data: () => ({
    modal: false,
    editPost: null
  }),
  components: {
    CardPost,
    AddPost
  },
  computed: {
    ...mapGetters(['posts'])
  },
  methods: {
    ...mapActions(['fetchPosts', 'deletePost']),
    openEditPost(post) {
      this.editPost = { ...post };
      this.modal = true;
    },
    closeEditPost() {
      this.editPost = null;
      this.modal = false;
    }
  },
  created() {
    this.fetchPosts();
  }
};
</script>

<style scoped>
#home {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px auto;
}
@media (max-width: 800px) {
  #home {
    margin: 10px;
  }
}
#home h1 {
  text-align: center;
}
.add {
  width: 600px;
  max-width: 100%;
  display: flex;
  justify-content: flex-end;
}
</style>