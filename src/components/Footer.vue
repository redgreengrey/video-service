<template>
  <div class="footer">
    <div class="icon">
      <img alt="logo" src="../assets/company-logo.svg" />
    </div>
    <div class="description">
      <div class="description-address">426057, Россия, Удмуртская Республика, г. Ижевск, ул. Карла Маркса, 246 (ДК «Металлург»)</div>
      <div class="description-phone">+7 (3412) 93-88-61, 43-29-29</div>
      <div class="description-website">htc-cs.ru</div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped lang="scss">
  .footer {
    max-width: 1440px;
    background-color: #F2F2F2;
    display: flex;
    margin: 70px auto 0 auto;
    padding:  28px 298px 28px 130px;
  }

  @media (max-width : 1440px) {
    .footer{
      max-width: 1080px;
    }
  }

  @media (max-width : 1080px) {
    .footer{
      width: 768px;
    }
  }

  @media (max-width : 768px) {
    .footer{
      width: 768px;
    }
  }

  .icon {
    width: 33px;
    height: 64px;
  }

  .description {
    margin-left: 40px;
    text-align: left;

    &-address,
    &-phone {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      color: #333333;
    }

    &-phone {
      margin-top: 6px;
    }

    &-website {
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
      color: #1F4766;
      margin-top: 10px;
    }
  }
</style>
