import { defineStore } from 'pinia'
import { View } from 'src/models/views'

export const useAppStore = defineStore('app', {
  state: () => ({
    scale:0.5,
    url: 'https://quasar.dev/',
    // url: location.origin,
    views: [
      { enabled:true, name: 'Pxiel 5', width: 393, height: 851 },
      { enabled:true, name: 'iPhone 12 Pro', width: 390, height: 844 },
      { enabled:true, name: 'SXGA', width: 1280, height: 1024 },
      { enabled:true, name: 'HD', width: 1366, height: 768 },
      { enabled:true, name: 'HD+', width: 1600, height: 900 },
      { enabled:true, name: 'FHD', width: 1920, height: 1080 },
      { enabled:true, name: 'WUXGA', width: 1920, height: 1200 },
      { enabled:true, name: 'QHD', width: 2560, height: 1440 },
      { enabled:true, name: 'WQHD', width: 3440, height: 1440 },
      { enabled:true, name: 'UHD', width: 3840, height: 2160 },
    ] as View[]
  }),
  getters: {
  },
  actions: {
  }
})
