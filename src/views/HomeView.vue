<template>
  <div class="home-view">
    <div class="image-container">
      <img src="/grinch.png" alt="Tracker Logo" class="top-image" />
    </div>
    <h3>100 Sketches Per Hour Tracker</h3>

    <div class="sketches-container">
      <div class="dimmed-sketches previous">
        <div>..............</div>
        <div
          v-for="(sketch, index) in previousSketches"
          :key="'previous-' + index"
          class="dimmed-sketch sketch-box"
        >
          {{ sketch.sketchNumber }}: {{ sketch.sketchName }}
        </div>
      </div>
      <div class="current-sketch sketch-box">
        <h2>
          {{ currentSketch?.sketchNumber }}: {{ currentSketch?.sketchName }}
        </h2>
      </div>
      <div class="dimmed-sketches next">
        <div
          v-for="(sketch, index) in nextSketches"
          :key="'next-' + index"
          class="dimmed-sketch sketch-box"
        >
          {{ sketch.sketchNumber }}: {{ sketch.sketchName }}
        </div>
        <div>..............</div>
      </div>
    </div>
    <div class="navigation-buttons">
      <button
        @click="goToPreviousSketch"
        :disabled="currentSketchIndex === 0"
        id="previous-button"
      >
        -
      </button>
      <button @click="goToFullList">Full List</button>
      <button
        @click="goToNextSketch"
        :disabled="currentSketchIndex === sketches.length - 1"
        id="next-button"
      >
        +
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import type { Sketch } from "../types";

const props = defineProps<{ sketches: Sketch[] }>();

const route = useRoute();
const router = useRouter();

const currentSketchIndex = ref(Number(route.params.currentSketchNumber) || 0);

const updateRoute = () => {
  router.push({
    name: "Home",
    params: { currentSketchNumber: currentSketchIndex.value },
  });
};

watch(currentSketchIndex, updateRoute);

watch(
  () => route.params.currentSketchNumber,
  (newSketchNumber) => {
    currentSketchIndex.value = Number(newSketchNumber) || 0;
  },
);

const currentSketch = computed(() => props.sketches[currentSketchIndex.value]);
const previousSketches = computed(() =>
  props.sketches.slice(
    Math.max(0, currentSketchIndex.value - 3),
    currentSketchIndex.value,
  ),
);
const nextSketches = computed(() =>
  props.sketches.slice(
    currentSketchIndex.value + 1,
    currentSketchIndex.value + 4,
  ),
);

const goToPreviousSketch = () => {
  if (currentSketchIndex.value > 0) {
    currentSketchIndex.value--;
  }
};

const goToNextSketch = () => {
  if (currentSketchIndex.value < props.sketches.length - 1) {
    currentSketchIndex.value++;
  }
};

const goToFullList = () => {
  router.push("/fullList");
};
</script>

<style scoped>
.home-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
}

.sketches-container {
  display: flex;
  height: 500px;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.dimmed-sketch {
  color: gray;
  font-size: 1.5rem;
}

.current-sketch {
  font-weight: bold;
  color: red;
  height: 200px;
  align-content: center;
  font-size: 2rem;
}

.navigation-buttons {
  display: flex;
  gap: 1rem;
  font-size: 2rem;
}

#next-button {
  background: green;
}

#previous-button {
  background: red;
}
.image-container {
  width: 200px;
  height: 200px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
}

.top-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
