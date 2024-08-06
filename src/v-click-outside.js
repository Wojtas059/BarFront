// v-click-outside.js
export default {
    beforeMount(el, binding) {
      el.clickOutsideEvent = function(event) {
        if (!(el == event.target || el.contains(event.target))) {
          binding.value(event);
        }
      };
      document.body.addEventListener('mousedown', el.clickOutsideEvent);
      document.body.addEventListener('touchstart', el.clickOutsideEvent); // Dodanie obsługi zdarzeń dotykowych
    },
    unmounted(el) {
      document.body.removeEventListener('mousedown', el.clickOutsideEvent);
      document.body.removeEventListener('touchstart', el.clickOutsideEvent);
    },
  };