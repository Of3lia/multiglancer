<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <div>
        <!-- <div class="q-gutter-y-md column"> -->
        <div>
          <q-toolbar>
            <q-btn @click="toggleLeftDrawer" round dense flat icon="menu" class="q-mr-xs" />
            <!-- <q-avatar>
              <q-icon name="visibility" />
            </q-avatar> -->
            <q-toolbar-title>MultiGlancer</q-toolbar-title>

            <q-space />

            <q-input label="Site URL" dark dense standout v-model="url" style="width:40%;">
              <template v-slot:append>
                <q-icon v-if="url === ''" name="http" />
                <q-icon v-else name="clear" class="cursor-pointer" @click="url = ''" />
              </template>
            </q-input>
          </q-toolbar>
        </div>
      </div>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>
          Views
        </q-item-label>
        <views-edit />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAppStore } from 'src/stores/app'
import { ref } from 'vue'
import ViewsEdit from 'src/components/ViewsEdit.vue';

const { url } = storeToRefs(useAppStore())

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
