<template>
  <section class="modal" v-if="modal">
    <div class="modal_container">
      <div class="modal_dados">
        <button class="modal_fechar" @click="$emit('close')">X</button>
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    modal: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
/* Modal */

.modal::before {
  content: '';
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, .5);
}

.modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  padding: 80px;
}

.modal_container {
  position: relative;
  background: white;
  width: 600px;
  max-width: 100%;
  z-index: 1;
  padding: 30px;
  animation: fadeIn .3s forwards;
}

@media (max-width: 800px) {
  .modal {
    padding: 80px 20px;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translate3d(50px, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0px, 0, 0);
  }
}

.modal_fechar {
  border-radius: 50%;
  border: 2px solid #000;
  width: 40px;
  height: 40px;
  position: absolute;
  top: -10px;
  right: -10px;
  font-size: 1rem;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, .1), 0px 4px 10px rgba(0, 0, 0, .2);
  cursor: pointer;
}

.modal_titulo {
  font-size: 3rem;
}

.modal_btn {
  margin-top: 80px;
  background: #000;
  cursor: pointer;
  color: #fff;
  border: none;
  font-size: 1rem;
  padding: 10px 25px;
  font-family: "Noto Serif";
}
</style>