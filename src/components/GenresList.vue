<template>
  <div class="genres-list">
    <div class="header">
      Жанры
    </div>
    <div class="genres">
      <div class="genres__comedy">
        <img src="../assets/genres-icons/comedy.svg" alt="comedy" class="image">
        <div class="genres-title">Комедии</div>
      </div>

      <div class="genres__drama">
        <img src="../assets/genres-icons/drama.svg" alt="drama" class="image">
        <div class="genres-title">Драмы</div>
      </div>

      <div class="genres__fantastic">
        <img src="../assets/genres-icons/fantastic.svg" alt="fantastic" class="image">
        <div class="genres-title">Фантастика</div>
      </div>

      <div class="genres__horrors">
        <img src="../assets/genres-icons/horrors.svg" alt="horrors" class="image">
        <div class="genres-title">Ужасы</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
  .genres-list {
    display: flex;
    flex-direction: column;
    width: calc(1440px * 82%);
    min-width: 400px;
    max-width: 1180px;
    margin: 30px auto;
  }

  .header {
    display: flex;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    text-align: left;
    color: #333333;
    margin-bottom: 15px;
  }

  .genres {
    width: 1240px;
    display: flex;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    color: #FFFFFF;

    &-title {
      margin-top: 32px;
    }

    &__comedy,
    &__drama,
    &__fantastic,
    &__horrors, {
      width: 280px;
      height: 208px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-right: 20px;
      cursor: pointer;
      padding-top: 32px;
    }

    &__comedy {
      background: linear-gradient(136.27deg, #F2C94C 8.44%, #F29A4A 91.36%);
      box-shadow: inset 0 0 16px rgba(0, 0, 0, 0.15);
      border-radius: 6px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }

    &__drama {
      background: linear-gradient(136.27deg, #F2994A 8.44%, #EB5757 91.36%);
      opacity: 0.8;
      box-shadow: inset 0 0 16px rgba(0, 0, 0, 0.15);
      border-radius: 6px;

      &:hover {
        opacity: 1;
      }
    }

    &__fantastic {
      background: linear-gradient(136.27deg, #56CCF2 8.44%, #2F80ED 91.36%);
      opacity: 0.8;
      box-shadow: inset 0 0 16px rgba(0, 0, 0, 0.15);
      border-radius: 6px;

      &:hover {
        opacity: 1;
      }
    }

    &__horrors {
      background: linear-gradient(136.27deg, #828282 8.44%, #333333 91.36%);
      opacity: 0.8;
      box-shadow: inset 0 0 16px rgba(0, 0, 0, 0.15);
      border-radius: 6px;

      &:hover {
        opacity: 1;
      }
    }
  }

  .image {
    width: 48px;
    margin: 0 auto;
  }
</style>
