<template>
  <section id="galería" class="py-10 flex flex-col items-center w-full overflow-hidden">
    <h2 class="text-title text-center font-medium font-nunito mb-6">Galería</h2>
    
    <!-- Mantenemos tus clases de carrusel.css -->
    <section 
      class="carrusel cursor-pointer" 
      ref="elementRef"
      @mouseenter="pause" 
      @mouseleave="play"
    >
      <ul class="carrusel-wrapper gap-x-2">
        <li class="*:object-cover *:h-full" v-for="(item, index) in galleryData" :key="`${item.id}-${index}`">
          <img :src="item.image.src" :alt="item.alt" >
        </li>
      </ul>
    </section>
  </section>
</template>

<script setup>
import { computed } from "vue";
import galleryImage from '@js/galleryImg.ts';
import { useAutoscroll } from "./composable/useautoscroll";

// Duplicamos las imágenes para crear el efecto de bucle infinito
const galleryData = computed(() => [...galleryImage, ...galleryImage]);

// Inicializamos el composable con una velocidad de 1.5
const { elementRef, play, pause } = useAutoscroll(1.5);
</script>
