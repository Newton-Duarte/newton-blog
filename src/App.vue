<template>
  <div id="app">
    <Navbar />
    <main id="main">
      <transition mode="out-in">
        <router-view />
      </transition>
    </main>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';

export default {
  components: {
    Navbar
  }  
}
</script>

<style>
:root {
  --main-box-shadow: 0 2px 4px rgba(30, 60, 90, .1);
}
* {
  box-sizing: border-box;
}
body, ul, li, h1, h2, p {
  padding: 0;
  margin: 0;
}
ul {
  list-style: none;
}
body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  background: #f4f4f4;
  color: #345;
}
a {
  color: #345;
  text-decoration: none;
}
img {
  max-width: 100%;
  display: block;
}
.btn {
  display: block;
  padding: 10px 30px;
  background: #87f;
  border-radius: 4px;
  color: #fff;
  text-align: center;
  font-size: 1rem;
  box-shadow: 0 4px 8px rgba(30, 60, 90, .2);
  transition: all .3s;
  border: none;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  cursor: pointer;
}
@media (max-width: 800px) {
  .btn {
    padding: 10px 15px;
  }
}
.btn-outline {
  display: block;
  padding: 10px 30px;
  background: #fff;
  border-radius: 4px;
  color: #65d;
  text-align: center;
  font-size: 1rem;
  border: 1px solid #65d;
  transition: all .3s;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  cursor: pointer;
}
.btn-outline:hover {
  background: #65d;
  color: #fff;
}
.btn:hover {
  background: #65d;
  transform: scale(1.1);
}
.btn-disabled,
.btn-disabled:hover {
  background: #bbc;
  transform: scale(1);
}
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
#main {
  flex: 1;
}
label {
  margin-bottom: 5px;
}
input, textarea {
  border-radius: 4px;
  border: 1px solid white;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(30, 60, 90, .1);
  transition: all .3s;
  font-size: 1rem;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  margin-bottom: 15px;
  width: 100%;
}
input:hover, input:focus,
textarea:hover, textarea:focus {
  outline: none;
  box-shadow: 0 6px 12px rgba(30, 60, 90, .2);
  border-color: #87f;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}
.v-enter {
  transform: translate3d(0, -20px, 0);
}
.v-leave-to {
  transform: translate3d(0, 20px, 0);
}
.v-enter-active,
.v-leave-active {
  transition: all .3s;
}
.router-link-exact-active {
  color: #87f;
}
</style>
