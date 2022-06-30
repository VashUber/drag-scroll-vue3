<template>
  <div class="list" v-drag-scroll>
    <div v-for="i in 80" :key="i" class="block">
      {{ i }}
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}

.list {
  display: flex;
  gap: 10px;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  .block {
    background: #7d4ec3;
    min-width: 220px;
    min-height: 120px;
  }
}
</style>
