# drag-scroll-vue3

This package provide directive for drag scroll

## Installation

    npm install drag-scroll-vue3

## Basic usage

```js
import { createApp } from "vue";
import App from "./App.vue";
import dragScroll from "drag-scroll-vue3";

const app = createApp(App);

app.directive("drag-scroll", dragScroll);
app.mount("#app");
```

```js
<your-component-with-list v-drag-scroll>
  <block />
  <block />
  <block />
  <block />
  <block />
</your-component-with-list>
```

In this case, scroll will work for all directions at a speed equal to 1

## Modify speed and direction

```js
<your-component-with-list v-drag-scroll.options="{ speed: 2, direction: 'y' }">
  <block />
  <block />
  <block />
  <block />
  <block />
</your-component-with-list>
```

Available direction option

> - all
> - x
> - y
