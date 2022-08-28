import { defineStore } from 'pinia'
import { View } from 'src/models/views'

export const useAppStore = defineStore('app', {
  state: () => ({
    url: 'https://quasar.dev/',
    // url: location.origin,
    views: [
      { name: 'Pxiel 5', width: 393, height: 851 },
      { name: 'iPhone 12 Pro', width: 390, height: 844 },
      { name: 'PC sm', width: 1366, height: 768 },
      { name: 'PC md', width: 1920, height: 1080 },
      { name: 'PC lg', width: 2560, height: 1440 },
    ] as View[]
  }),
  getters: {
  },
  actions: {
  }
})
