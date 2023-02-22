<template>
  <div>
    <div class="list" v-drag-scroll.options="{ direction: 'x' }">
      <div v-for="i in 80" :key="i" class="block">
        {{ i }}
      </div>
    </div>

    <div class="wrapper" v-drag-scroll.options="{ direction: 'y' }">
      <div class="xy-block"></div>
    </div>

    <div class="wrapper" v-drag-scroll.options="{ direction: 'all' }">
      <div class="xy-block"></div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}

.wrapper {
  margin: 20px;
  width: 350px;
  height: 350px;
  overflow: scroll;
}

.xy-block {
  width: 500px;
  height: 500px;
  background: #7d4ec3;
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
    height: 120px;
  }
}
</style>
