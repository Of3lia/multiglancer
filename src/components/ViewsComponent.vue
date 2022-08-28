<template>
  <div style="margin:13em 0"></div>
  <div v-for="(view, i) in views" :key="i" :style="`transform:scale(${scale});`" style="display:inline-block">
    <div :style="`margin:-${view.height * (1 - scale)}px -${view.width * (1 - scale) / 2}px `">
      <h3>
        {{ view.name }} {{ view.width }}x{{ view.height }}
      </h3>
      <iframe :src="url" :width="view.width" :height="view.height" loading="lazy" frameborder="1"></iframe>
    </div>
  </div>
  <!-- <div v-for="(view, i) in views" :key="i">
    <div>
      <iframe :style="`transform:scale(${scale}); transform-origin: 0 0`" :src="url" :width="view.width"
        :height="view.height" loading="lazy" frameborder="1"></iframe>
    </div>
  </div> -->
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAppStore } from 'src/stores/app'
import { ref } from 'vue'

const { url, views } = storeToRefs(useAppStore())

const scale = ref(0.5)
</script>

<style scoped>
/* .container {}

.content {} */

/* .content {
  --scale: 0.5;

  width: 200px;
  height: 200px;
  background: lightgreen;
  transform: scale(var(--scale));
  transform-origin: top left;
  margin-bottom: calc((var(--scale) - 1) * 100%);
} */
</style>
