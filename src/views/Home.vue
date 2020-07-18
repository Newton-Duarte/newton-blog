<template>
  <div id="home" class="home">
    <AddPost />
    <CardPost
      v-for="(post) of posts"
      :key="post.id + post.title"
      :title="post.title"
      :body="post.body"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import CardPost from '@/components/CardPost';
import AddPost from '@/components/AddPost';

export default {
  name: "Home",
  components: {
    CardPost,
    AddPost
  },
  computed: {
    ...mapGetters(['posts'])
  },
  methods: {
    ...mapActions(['fetchPosts'])
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
</style>