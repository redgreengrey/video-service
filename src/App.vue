<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css?family=Rubik");
  @import url("https://fonts.googleapis.com/css2?family=Rubik:wght@500&display=swap");

#app {
  font-family: Rubik, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
  max-width: 1440px;
}
</style>
