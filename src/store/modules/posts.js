import api from '@/services/api';

const state = {
  posts: []
};

const getters = {
  posts: state => state.posts
};

const actions = {
  async fetchPosts({ state, commit }) {
    if (state.posts.length) return;
    
    try {
      const response = await api.get('/posts');
      commit('SET_POSTS', response.data);
    } catch (error) {
      console.log(error);
    }
  },
  async addPost({ commit }, post) {
    try {
      const response = await api.post('/posts', post);
      commit('SET_POST', response.data);
    } catch (error) {
      console.log(error);
    }
  },
  async updatePost({ commit }, updPost) {
    try {
      const response = await api.put(`/posts/${updPost.id}`, updPost);
      commit('UPDATE_POST', response.data);
    } catch (error) {
      console.log(error);
    }
  },
  async deletePost({ commit }, id) {
    if (confirm('Are you sure?')) {
      try {
        await api.delete(`/posts/${id}`);
        commit('DELETE_POST', id);
      } catch (error) {
        console.log(error);
      }
    }
  }
};

const mutations = {
  SET_POSTS: (state, posts) => state.posts = posts,
  SET_POST: (state, post) => state.posts.unshift(post),
  UPDATE_POST: (state, updPost) => {
    const index = state.posts.findIndex(post => post.id === updPost.id);
    if (index !== -1) state.posts.splice(index, 1, updPost);
  },
  DELETE_POST: (state, id) => {
    state.posts = state.posts.filter(post => post.id !== id);
  }
};


export default {
  state,
  getters,
  actions,
  mutations
}