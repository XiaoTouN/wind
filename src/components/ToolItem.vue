<script setup lang="ts"></script>

<template>
  <div class="tool-item">
    <slot></slot>
  </div>
</template>

<style scoped>
.tool-item {
  width: 23px;
  height: 23px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: 4px;

  &:hover {
    background: #ffffff88;
  }
}
</style>
