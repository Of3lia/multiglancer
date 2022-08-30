<template>
  <template v-for="(view, i) in views">
    <q-item>
      <q-item-section>
        <q-checkbox v-model="view.enabled" />
      </q-item-section>
      <q-item-section>
        <q-input label="name" v-model="view.name" />
      </q-item-section>
      <q-item-section>
        <q-input label="width" type="number" v-model="view.width" />
      </q-item-section>
      <q-item-section>
        <q-input label="height" type="number" v-model="view.height" />
      </q-item-section>
      <q-item-section>
        <q-btn class="bg-red" icon="delete" @click="delView(i)" />
      </q-item-section>
    </q-item>
  </template>
  <q-item>
    <q-btn icon="add" class="q-mx-auto bg-blue" size="xl" color="white" @click="addView" />
  </q-item>

  <q-item-section>
    <q-btn @click="reset()" class="bg-warning">Reset</q-btn>
  </q-item-section>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { LocalStorage } from 'quasar';
import { View } from 'src/models/views';
import { useAppStore } from 'src/stores/app';

const appSt = useAppStore()
const { views } = storeToRefs(appSt)

const addView = () => {
  views.value.push({} as View)
}

const delView = (i: number) => {
  views.value.splice(i, 1)
}

const reset = () => {
  if (confirm('Are you sure you want to reset all config?')) {
    LocalStorage.clear()
    location.reload()
  }
}
</script>
