<template>
  <div class="card" :id="id">
    <div class="card-header">
      <div class="card-title">
        <p class="title">{{ title }}</p>
      </div>
      <div class="card-actions">
        <button @click="$emit('edit')">Edit</button>
        <button @click="$emit('remove')">Delete</button>
      </div>
    </div>
    <div class="card-body">
      {{ body }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardPost',
  props: {
    id: {
      default: null
    },
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
.card-title {
  width: 80%;
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
  font-size: .9rem;
  color: #050505;
  margin-bottom: 10px;
}
.card-actions {
  width: 20%;
  text-align: end;
}
.card-actions button {
  cursor: pointer;
  background: transparent;
  border: none;
}
.card-actions button:focus {
  border: none;
}
@media (max-width: 800px) {
  .card-actions button {
    margin: 5px 0;
  }
}
</style>