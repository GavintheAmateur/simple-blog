import { insertFragment } from './common.js';

const footer_html = `
<div class="footer">
<div class="footer-copyright"> <span>Copyright © 2021 GavinTheAmateur, All Rights Reserved</span></div>
</div>
`

insertFragment(footer_html, 'body', 'beforeend');