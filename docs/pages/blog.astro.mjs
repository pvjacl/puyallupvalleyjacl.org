export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('../chunks/pages/index_B-My5eHq.mjs').then(n => n.b);

export { page };