<script setup>

</script>

<template>
  <div class="footer">
    <img src="@/assets/img/anna.png" alt="anna">
    <div class="footer-content">
      <h2>Привет, пишет Анна 👋</h2>
      <p>Заметили неполадки или есть предложения по улучшению, напишите мне <a href="https://t.me/annampstat">@annampstat</a>.</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

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
</style>