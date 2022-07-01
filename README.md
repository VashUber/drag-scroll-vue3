# drag-scroll-vue3

This package provide directive for drag scroll

## Installation

    npm install drag-scroll-vue3

## Basic usage

```js
import { createApp } from "vue";
import App from "./App.vue";
import dragScroll from "./directive/drag-scroll";

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

## Modify speed

```js
<your-component-with-list v-drag-scroll.speed="2">
  <block />
  <block />
  <block />
  <block />
  <block />
</your-component-with-list>
```
