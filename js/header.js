import { insertFragment } from './common.js';

const header_html = `

<div class="header">
<div class="header-image"></div>
<div class="header-navbar">
    <ul><a href="/index.html">Home</a></ul>
    <ul><a href="/subscribe.html">Subscribe</a></ul>
    <ul><a href="/about.html">About Me</a></ul>
</div>
</div>
`

insertFragment(header_html, 'body', 'afterbegin');