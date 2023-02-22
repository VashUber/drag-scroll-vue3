import { ObjectDirective } from "vue";

enum Direction {
  all = "all",
  x = "x",
  y = "y",
}

type OptionsType = {
  speed: number;
  direction: Direction;
};

const onMouseOver = (e: MouseEvent, el: HTMLElement, options: OptionsType) => {
  if (
    options.direction === Direction.all ||
    options.direction === Direction.x
  ) {
    el.scrollLeft = el.scrollLeft + e.movementX * -1 * options.speed;
  }

  if (
    options.direction === Direction.all ||
    options.direction === Direction.y
  ) {
    el.scrollTop = el.scrollTop + e.movementY * -1 * options.speed;
  }
};

const dragScroll: ObjectDirective<HTMLElement, OptionsType> = {
  mounted(el, binding) {
    const options: OptionsType = {
      speed: 1,
      direction: Direction.all,
    };

    if (binding.modifiers.options) {
      Object.assign(options, binding.value);
    }

    el.style.cursor = "grab";
    Array.from(el.children).forEach((child) => {
      const elem = child as HTMLElement;

      elem.style.userSelect = "none";
    });

    el.onmousedown = () => {
      el.onmousemove = (e) => onMouseOver(e, el, options);
    };

    el.onmouseup = () => {
      el.onmousemove = null;
    };

    el.onmouseleave = () => {
      el.onmousemove = null;
    };
  },
};

export default dragScroll;
