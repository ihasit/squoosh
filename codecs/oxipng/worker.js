import initOxiPNG, { start_worker_thread } from './pkg/oxipng.js';

addEventListener('message', async ({ data: [module, memory] }) => {
  postMessage(null);
  await initOxiPNG(module, memory);
  start_worker_thread();
}, { once: true });
