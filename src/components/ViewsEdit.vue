<template>
  <template v-for="(view, i) in views">
    <q-item>
      <q-item-section>
        <q-input label="name" v-model="view.name"></q-input>
      </q-item-section>
      <q-item-section>
        <q-input label="width" type="number" v-model="view.width"></q-input>
      </q-item-section>
      <q-item-section>
        <q-input label="height" type="number" v-model="view.height"></q-input>
      </q-item-section>
      <q-item-section>
        <q-btn class="bg-red" icon="delete" @click="delView(i)" />
      </q-item-section>
    </q-item>
  </template>
  <q-item>
    <q-btn icon="add" class="q-mx-auto bg-blue" size="xl" color="white" @click="addView" />
  </q-item>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { View } from 'src/models/views';
import { useAppStore } from 'src/stores/app';

const { views } = storeToRefs(useAppStore())

const addView = () => {
  views.value.push({} as View)
}

const delView = (i: number) => {
  console.log(i)
  views.value.splice(i, 1)
}
</script>
