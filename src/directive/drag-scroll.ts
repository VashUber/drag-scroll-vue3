import { DirectiveBinding, ObjectDirective } from "vue";

let previousPosition = 0;
let speed = 1;

const onMouseOver = (e: MouseEvent, el: HTMLElement) => {
  const sign = previousPosition < e.clientX ? -1 : 1;

  el.scrollTo({
    left: el.scrollLeft + sign * Math.abs(e.clientX - previousPosition) * speed,
    top: 0,
    behavior: "smooth",
  });

  previousPosition = e.clientX;
};

const dragScroll = {
  created(el: HTMLElement, binding: DirectiveBinding) {
    if (binding.modifiers.speed) {
      speed = binding.value;
    }
  },
  mounted(el: HTMLElement) {
    el.style.cursor = "grab";
    Array.from(el.children).forEach((child) => {
      const elem = child as HTMLElement;

      elem.style.userSelect = "none";
    });

    el.onmousedown = (e) => {
      previousPosition = e.clientX;
      el.onmousemove = (e) => onMouseOver(e, el);
    };

    el.onmouseup = () => {
      el.onmousemove = null;
    };
    el.onmouseleave = () => {
      el.onmousemove = null;
    };
  },
} as ObjectDirective;

export default dragScroll;
