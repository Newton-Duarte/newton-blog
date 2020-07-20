<template>
  <div id="home" class="home">
    <div class="add">
      <SearchBox @search="term = $event" />
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
    <transition-group v-if="computedPosts.length" tag="ul" style="width: 100%;">
      <li
        v-for="(post) of computedPosts"
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
    <p v-else class="no-posts">
      Your search - <span class="search-term">{{ term }}</span> - did not match any posts.
    </p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import CardPost from '@/components/CardPost';
import AddPost from '@/components/AddPost';
import SearchBox from '@/components/SearchBox';

export default {
  name: "Home",
  data: () => ({
    modal: false,
    editPost: null,
    term: ''
  }),
  components: {
    CardPost,
    AddPost,
    SearchBox
  },
  computed: {
    ...mapGetters(['posts']),
    computedPosts() {
      return this.posts.filter(post => post.title.includes(this.term) || post.body.includes(this.term));
    },
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
.add :first-child {
  flex: 5;
  margin-right: 20px;
}
@media (max-width: 800px) {
  .add :first-child {
    flex: 2;
    margin-right: 10px;
  }
}
.add :last-child {
  flex: 1;
}
.no-posts {
  background: #fff;
  width: 600px;
  max-width: 100%;
  padding: 20px;
  margin-top: 20px;
  text-align: center;
}
.search-term {
  color: #65d;
  font-weight: bold;
}
</style>