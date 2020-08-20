<template>
  <div class="navigation">
    <router-link to="/">Фильмы</router-link>
    <router-link to="/about">Телеканалы</router-link>
  </div>
</template>

<style scoped lang="scss">
  .navigation {
    padding-top: 50px;
    margin-left: 25px;

    a {
      font-family: Rubik, sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 28px;
      line-height: 33px;
      text-align: right;
      text-decoration: none;
      color: #333333;
      padding-bottom: 9px;
      margin-right: 25px;

      &.router-link-exact-active {
        color: $red;
        border-bottom: 2px solid $red;
      }
    }
  }

  @media (max-width : 1440px) {
    .navigation {
      padding: 20px;
    }
  }

  @media (max-width : 1080px) {
    .navigation {
      padding-left: 240px;
    }
  }

  @media (max-width : 768px) {
    .navigation {
      padding-left: 400px;
    }
  }
</style>
