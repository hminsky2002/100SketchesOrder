<script setup lang="ts">
import { useRouter } from "vue-router";
import type { Sketch } from "../types";
import SketchEntryList from "../components/SketchEntryList.vue";
const props = defineProps<{ sketches: Sketch[] }>();

const router = useRouter();

const goBackToCounter = () => {
  router.push({ name: "Home", params: { currentSketchNumber: 0 } });
};
</script>

<template>
  <div class="back-button-container">
    <button class="back-button" @click="goBackToCounter">
      Back to Tracker
    </button>
  </div>
  <div>
    <SketchEntryList :sketches="props.sketches" />
  </div>
  <div class="back-button-container">
    <button class="back-button" @click="goBackToCounter">
      Back to Tracker
    </button>
  </div>
</template>

<style scoped>
.back-button-container {
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: white;
  padding: 1rem;
  margin-bottom: 1rem;
}

.back-button {
  all: unset;
  cursor: pointer;
}
</style>
