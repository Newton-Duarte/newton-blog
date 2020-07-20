<template>
  <div class="about">
    <div class="card">
      <div class="card-body">
        <div class="card-image">
          <img src="@/assets/newton.jpg" alt="Newton Duarte">
        </div>
        <div class="card-info">
          <h2>Newton Duarte</h2>
          <p>Full Stack Developer</p>
          <p>This project was created to practice Vue.js</p>
          <div>
            <a href="https://github.com/Newton-Duarte" target="_blank" class="btn-outline">Github</a>
            <a href="https://www.linkedin.com/in/newton-duarte" target="_blank" class="btn-outline">Linkedin</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  margin: 20px auto;
}
.card {
  display: block;
  margin: 0 auto;
  padding: 20px;
  width: 600px;
  max-width: 100%;
  box-shadow: var(--main-box-shadow);
  background: white;
}
.card-body {
  display: flex;
}
@media (max-width: 800px) {
  .card-body {
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }
}
.card-info {
  padding-left: 20px;
}
.card-info div {
  margin-top: 20px;
  display: flex;
  justify-content: space-evenly;
}
.card-info p:nth-child(2) {
  font-size: .9rem;
  margin-bottom: 20px;
}
.card-image img {
  width: 200px;
  max-width: 100%;
  border-radius: 50%;
}
@media (max-width: 800px) {
  .card-image img {
    margin: 0 auto;
  }
  .card-info {
    margin-top: 20px;
    text-align: center;
    padding-left: 0;
  }
}
</style>