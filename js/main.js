import { registerThemeControl } from './toggle-theme.js';
import { Router } from './router.js';

registerThemeControl();

const route = new Router();

route.add('/', '/pages/home.html');
route.add('/biblioteca', '/pages/biblioteca.html');
route.add(404, '/pages/404.html');
route.add('/busca', '/pages/busca.html');

route.handle();

window.onpopstate = () => route.handle();
