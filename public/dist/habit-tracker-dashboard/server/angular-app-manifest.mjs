
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 28914, hash: '19db197befb18cc71e568e8b37ffa84d4adc6c5e0cc8acb046784cae2895d2a2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17244, hash: '7ded1b4c8247ace6dd53bb652bfc8b4973e545316c9894f9e22fced9d7425c88', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-QH6J5QIP.css': {size: 312393, hash: '8Bf773dJ5To', text: () => import('./assets-chunks/styles-QH6J5QIP_css.mjs').then(m => m.default)}
  },
};
