
export default defineNuxtConfig({
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
  },
})
