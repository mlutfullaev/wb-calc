<script setup>

</script>

<template>
  <div class="footer laptop">
    <img src="@/assets/img/anna.png" alt="anna">
    <div class="footer-content">
      <h2>Привет, пишет Анна 👋</h2>
      <p>Заметили неполадки или есть предложения по улучшению, напишите мне <a href="https://t.me/annampstat">@annampstat</a>.</p>
    </div>
  </div>
  <div class="alert tablet">
    <p>Калькулятор UNIT-экономики цены, доставки и хранения на Wildberries для FBO и FBS актуальный на 2024 год.</p>
    <a href="https://marketguru.io/privacy">Публичная оферта</a>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  gap: 15px;
  margin-top: 20px;

  img {
    width: 80px;

    @media (max-width: 550px) {
      width: 60px;
    }
  }

  &-content {
    max-width: 400px;

    h2 {
      font-size: 18px;
      font-weight: 600;
      padding-bottom: 6px;

      @media (max-width: 550px) {
        font-size: 14px;
      }
    }
    p {
      font-size: 16px;
      color: rgba(var(--primary-rgb), 50%);

      @media (max-width: 550px) {
        font-size: 12px;
      }

      a {
        color: var(--pink)
      }
    }
  }
}
.alert {
  display: none;
//  padding: 10px;
//  background: var(--primary);
//  color: #fff;
//  justify-content: center;
//  align-items: center;
//  gap: 20px;
//  font-size: 12px;
//
//  a {
//    color: #ffffff
//  }
//  @media (max-width: 768px) {
//    display: flex;
//  }
//  @media (max-width: 400px) {
//    flex-direction: column
//  }
}
</style>