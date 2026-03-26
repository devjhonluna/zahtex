import { ref, onMounted, onUnmounted, nextTick } from "vue";

export function useAutoscroll(speed = 1) {
  const elementRef = ref(null);
  const animationID = ref(null);

  const animate = () => {
    const el = elementRef.value;
    if (!el) return;

    // Aumentamos el scroll según la velocidad
    el.scrollLeft += speed;

    /**
     * EFECTO INFINITO:
     * Si el scroll horizontal supera la mitad del ancho total (scrollWidth),
     * volvemos al inicio. Como el contenido está duplicado, el salto es invisible.
     */
    if (el.scrollLeft >= el.scrollWidth / 2) {
      el.scrollLeft = 0;
    }

    animationID.value = requestAnimationFrame(animate);
  };

  const play = () => {
    // Evitamos duplicar animaciones si ya está corriendo
    if (!animationID.value) {
      animate();
    }
  };

  const pause = () => {
    if (animationID.value) {
      cancelAnimationFrame(animationID.value);
      animationID.value = null;
    }
  };

  onMounted(async () => {
    // Esperamos a que el DOM se renderice completamente
    await nextTick();
    play();
  });

  onUnmounted(() => {
    pause();
  });

  return { elementRef, play, pause };
}
