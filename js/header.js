import { insertFragment } from './common.js';

const header_html = `

<header class="header">
<div class="header-image"></div>
<div class="header-navbar">
    <ul><a href="/index.html">Home</a></ul>
    <ul><a href="/subscribe.html">Subscribe</a></ul>
    <ul><a href="/about.html">About Me</a></ul>
</div>
</header>
`

insertFragment(header_html, 'body', 'afterbegin');