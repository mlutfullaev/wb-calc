<script setup>
import {ref, watch} from "vue";

const props = defineProps({active: Boolean})

const overlay = ref(true)
watch(props, () => {
  if (!props.active) {
    overlay.value = true
  }
})
</script>

<template>
  <div :class="`modal${active ? ' active' : ''}`" @click="$emit('close')">
    <div :class="`modal-content${overlay ? ' overlay' : ''}`" @click.stop>
      <iframe width="700" height="400" src="https://www.youtube.com/embed/4qLB0ABzpdo?si=RcZipY-Oco8fRcHx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <div class="overlay">
        <button @click="overlay = false">
          <svg width="94" height="94" viewBox="0 0 94 94" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.88">
              <rect width="94" height="94" rx="47" fill="#3CD06E"/>
              <path d="M56.0103 45.2691C57.3409 46.0395 57.3409 47.9605 56.0103 48.7309L43.0021 56.262C41.6687 57.0339 40 56.0718 40 54.5311L40 39.4689C40 37.9282 41.6687 36.9661 43.0021 37.738L56.0103 45.2691Z" fill="white"/>
            </g>
          </svg>
        </button>
        <h2>Калькулятор прибыли</h2>
        <p>инструкция</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal {
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.3);
  transition: .3s;
  opacity: 0;
  user-select: none;
  pointer-events: none;
  z-index: -1;
  padding: 10px;

  &.active {
    opacity: 1;
    user-select: auto;
    pointer-events: auto;
    z-index: 3;
  }
  &-content {
    max-width: 1020px;
    width: 100%;
    height: 600px;
    position: relative;

    @media (max-width: 768px) {
      max-width: 700px;
      height: 400px;
    }
    @media (max-width: 768px) {
      max-width: 100%;
      height: 250px;
    }
    &.overlay {
      .overlay {
        opacity: 1;
        user-select: auto;
        pointer-events: auto;
      }
      iframe {
        opacity: 0;
        user-select: none;
        pointer-events: none;
      }
    }
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 1;
      user-select: auto;
      pointer-events: auto;
      border-radius: 3px;
      z-index: 2;
      transition: .3s;
    }
    .overlay {
      padding: 20px;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      user-select: none;
      pointer-events: none;
      background: rgba(var(--primary-rgb), 80%);
      border-radius: 3px;
      transition: .3s;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 20px;
      z-index: 1;
      text-align: center;

      h2 {
        color: var(--secondary);
        font-size: 48px;
        font-weight: 700;

        @media (max-width: 450px) {
          font-size: 28px;
        }
      }
      button {
        border-radius: 50%;
      }
      p {
        font-size: 28px;
        color: #fff;
        text-transform: uppercase;

        @media (max-width: 450px) {
          font-size: 20px;
        }
      }
    }
  }
}
</style>