
export default defineNuxtConfig({
  meta: {
    title: 'Geotech Solutions International',
  },
  "nitro": {
      "output": {
          dir: 'output',
          serverDir: 'output/server',
          publicDir: 'output/public'
      }
  },
  router: {
    scrollBehavior: async (to, from, savedPosition) => {
      if (savedPosition) {
        return savedPosition;
      } else {
        await new Promise((resolve) => {
          setTimeout(() => resolve(), 100);
        });
        return { left: 0, top: 0 };
      }
    },
    modules: [
      'vue3-carousel-nuxt'
    ],
  },
})
