import { insertFragment } from './common.js';

const footer_html = `
<footer class="footer">
<div class="footer-copyright"> <span>Copyright © 2021 GavinTheAmateur, All Rights Reserved</span></div>
</footer>
`

insertFragment(footer_html, 'body', 'beforeend');