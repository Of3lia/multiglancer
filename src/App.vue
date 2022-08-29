<template>
  <router-view />
</template>

<script setup lang="ts">
import { LocalStorage } from 'quasar';
import { watch } from 'vue';

import { useAppStore } from './stores/app';

const appSt = useAppStore()

console.log(LocalStorage.getItem('appState'))

LocalStorage.getItem('appState') ? appSt.$state = LocalStorage.getItem('appState') as any : ''

watch(appSt.$state, (val) => {
  LocalStorage.set('appState', val)
  console.log(val)
}, { deep: true })
</script>
