<script setup>
import {ref} from "vue";

const share = ref(false)

const onShare = () => {
  // Логика при клике на поделится
  share.value = true

  setTimeout(() => {
    if (share.value) {
      share.value = false
    }
  }, 3000)
}
</script>

<template>
  <div class="item-top">
    <button class="btn btn-reset">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 3.98665C11.78 3.76665 9.54667 3.65332 7.32 3.65332C6 3.65332 4.68 3.71999 3.36 3.85332L2 3.98665" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5.66667 3.31334L5.81334 2.44001C5.92001 1.80668 6 1.33334 7.12667 1.33334H8.87334C10 1.33334 10.0867 1.83334 10.1867 2.44668L10.3333 3.31334" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12.5667 6.09332L12.1333 12.8067C12.06 13.8533 12 14.6667 10.14 14.6667H5.86C4 14.6667 3.94 13.8533 3.86667 12.8067L3.43333 6.09332" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6.88667 11H9.10667" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6.33333 8.33334H9.66666" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      Очистить данные
    </button>
    <button v-if="share" class="btn btn-shared">
      <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="0.5" width="17" height="17" rx="2.5" stroke="white" stroke-opacity="0.06"/>
        <path d="M5.91421 7.82843L9.44975 11.364L8.03553 12.7782L4.5 9.24264L5.91421 7.82843Z" fill="#263053"/>
        <path d="M14.3995 6.41421L8.03553 12.7782L6.62132 11.364L12.9853 5L14.3995 6.41421Z" fill="#263053"/>
      </svg>
      Ссылка скопирована
    </button>
    <button v-else class="btn btn-share" @click="onShare">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.6667 1.33334H5.33334V5.33334H1.33334V14.6667H10.6667V10.6667H14.6667V1.33334ZM10.6667 9.33334H13.3333V2.66668H6.66668V5.33334H10.6667V9.33334Z" fill="#263053"/>
      </svg>
      Поделиться калькулятором
    </button>
    <button class="btn btn-video">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.1 7.98036C11.5 8.2113 11.5 8.78865 11.1 9.01959L6.15 11.8775C5.75 12.1084 5.25 11.8197 5.25 11.3579L5.25 5.64209C5.25 5.18021 5.75 4.89154 6.15 5.12248L11.1 7.98036Z" fill="#263053"/>
      </svg>
      Обучающее видео
    </button>
    <button class="btn btn-export">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4.66669 6.66666L8.00002 9.99999L11.3334 6.66666" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8 10V2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      Excel
    </button>
  </div>
</template>

<style lang="scss" scoped>
.item-top {
  display: flex;
  gap: 16px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(var(--primary-rgb), 4%);
  margin-bottom: 20px;
  flex-wrap: wrap;

  @media (max-width: 450px) {
    flex-direction: column;
    align-items: center;
  }
  .btn {
    &-reset {
      border-color: rgba(212, 96, 96, 50%);
      color: rgba(212, 96, 96, 50%);
      transition: .3s;
      margin-right: auto;

      &:hover {
        border-color: #D46060;
        color: #D46060;
        svg {
          color: #D46060;
        }
      }
      svg {
        color: rgba(212, 96, 96, 50%);
      }
      @media (max-width: 768px) {
        display: none;
      }
    }
    &-share {
      background: rgba(var(--primary-rgb), 4%);

      &:hover {
        background: rgba(var(--primary-rgb), 16%)
      }
    }
    &-shared {
      background: var(--secondary);
    }
    &-video {
      border-color: var(--primary);

      &:hover {
        background: rgba(var(--primary-rgb), 16%)
      }
    }
    &-export {
      border-color: rgba(var(--primary-rgb), 10%);

      &:hover {
        border-color: var(--primary);
      }
      &:focus {
        background: var(--primary);
        color: #fff;

        svg {
          color: #fff;
        }
      }
    }
  }
}
</style>