import '../scss/main.scss';

import { initBootstrap } from './bootstrap.js';
import './components/get-items.js';
import './components/dark-mode.js';
// import './components/dark-mode-cookie.js';

// Loading bootstrap with optional features
initBootstrap({
  tooltip: false,
  popover: false,
  toasts: false,
});
