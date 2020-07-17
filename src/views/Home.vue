<template>
  <div id="home" class="home">
    <CardPost />
  </div>
</template>

<script>
import CardPost from '@/components/CardPost';

export default {
  name: "Home",
  components: {
    CardPost
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