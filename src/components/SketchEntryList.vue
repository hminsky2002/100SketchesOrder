<script setup lang="ts">
import { computed } from "vue";
import type { Sketch } from "../types";
import SketchEntry from "./SketchEntry.vue";

const props = defineProps<{ sketches: Sketch[] }>();

const midpoint = Math.ceil(props.sketches.length / 2);
const leftColumn = computed(() => props.sketches.slice(0, midpoint));
const rightColumn = computed(() => props.sketches.slice(midpoint));
</script>

<template>
  <div class="full-list">
    <div class="column">
      <div v-for="(sketch, index) in leftColumn" :key="'left-' + index">
        <SketchEntry :sketch="sketch" />
      </div>
    </div>
    <div class="column">
      <div v-for="(sketch, index) in rightColumn" :key="'right-' + index">
        <SketchEntry :sketch="sketch" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.full-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.column {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.sketch-entry {
  text-align: left;
}
</style>
