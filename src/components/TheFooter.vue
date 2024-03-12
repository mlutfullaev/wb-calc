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
  padding: 10px 0;
  gap: 15px;

  @media (max-width: 768px) {
    display: none;
  }

  img {
    width: 80px;
  }

  &-content {
    max-width: 400px;

    h2 {
      font-size: 18px;
      font-weight: 600;
      padding-bottom: 6px;
    }
    p {
      font-size: 16px;
      color: rgba(var(--primary-rgb), 50%);

      a {
        color: var(--pink)
      }
    }
  }
}
.alert {
  padding: 10px;
  background: var(--primary);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-size: 12px;

  a {
    color: #ffffff
  }
}
</style>