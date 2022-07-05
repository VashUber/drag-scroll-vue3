import { ObjectDirective } from "vue";

let previousPositionX = 0;
let previousPositionY = 0;

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
  const signX = previousPositionX < e.clientX ? -1 : 1;
  const signY = previousPositionY < e.clientY ? -1 : 1;

  const scrollTo: ScrollToOptions = {
    left:
      options.direction === Direction.all || options.direction === Direction.x
        ? el.scrollLeft +
          signX * Math.abs(e.clientX - previousPositionX) * options.speed
        : 0,

    top:
      options.direction === Direction.all || options.direction === Direction.y
        ? el.scrollTop +
          signY * Math.abs(e.clientY - previousPositionY) * options.speed
        : 0,

    behavior: "smooth",
  };

  el.scrollTo(scrollTo);

  previousPositionX = e.clientX;
  previousPositionY = e.clientY;
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

    el.onmousedown = (e) => {
      previousPositionX = e.clientX;
      previousPositionY = e.clientY;

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
