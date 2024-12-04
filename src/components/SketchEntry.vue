<script setup lang="ts">
import type { Sketch } from "../types";
const props = defineProps<{ sketch: Sketch }>();
</script>

<template>
  <div class="sketch-entry">
    <div class="sketch-name">
      <span class="sketch-number">{{ props.sketch.sketchNumber + " " }}</span
      >{{ props.sketch.sketchName }}
    </div>
  </div>
</template>

<style scoped>
.sketch-entry {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: left;
}

.sketch-number {
  color: red;
  font-weight: bold;
}

.sketch-name {
  font-weight: bold;
  word-break: break-word; /* Ensures long text wraps */
}
</style>
