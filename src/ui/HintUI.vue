<script setup>
defineProps({ hint: String })
</script>

<template>
  <div class="hint">
    <span>?</span>
    <div class="hint-content">{{ hint }}</div>
  </div>
</template>

<style lang="scss" scoped>
.hint {
  position: relative;
  display: inline-block;
  z-index: 2;

  &:hover div {
    display: block;
  }
  span {
    width: 16px;
    border-radius: 50%;
    height: 16px;
    background: rgba(var(--primary-rgb), 30%);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .3s;
    font-size: 12px;
    user-select: none;

    &:hover {
      background: var(--primary);
    }
  }

  div {
    display: none;
    position: absolute;
    left: 50%;
    transform: translate3d(-30px, 10px, 0);
    background-color: var(--primary);
    color: #fff;
    padding: 8px;
    border-radius: 4px;
    font-size: 12px;
    width: max-content;
    max-width: 200px;

    &::before {
      content: '';
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 7.5px 12px 7.5px;
      border-color: transparent transparent var(--primary) transparent;
      transform: rotate(0deg);
      position: absolute;
      top: -5px;
      left: 22px;
    }
  }
}
</style>
