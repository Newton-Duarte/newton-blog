<template>
  <div class="card">
    <div class="card-header">
      <div>
        <p class="title">{{ title }}</p>
      </div>
      <div class="card-actions">
        <button>Acao</button>
      </div>
    </div>
    <div class="card-body">
      {{ body }}
    </div>
    <div class="card-comment">
      <button>Comentar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardPost',
  props: {
    title: {
      type: String,
      default: 'Title of Post'
    },
    body: {
      type: String,
      default: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus iste minima repellendus repudiandae nulla ad ex est delectus culpa vel aspernatur, maxime odio ut perspiciatis!'
    }
  }
}
</script>

<style scoped>
.card {
  padding: 15px;
  margin: 10px auto;
  background: white;
  box-shadow: var(--main-box-shadow);
  border-radius: 4px;
  width: 600px;
  max-width: 100%;
}
.card .title {
  font-weight: bold;
  color: #050505;
}
.card .time {
  font-size: .9rem;
  color: rgba(30, 60, 90, .5);
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.card-body {
  font-size: 1.125rem;
  color: #050505;
  margin-bottom: 10px;
}
</style>