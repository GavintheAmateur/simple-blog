import { insertFragment } from './common.js';

const left_sidebar_html = `
<section class="left-sidebar">

<div class="author">
    <img   alt="avatar" class="author-avatar" src="/img/avatar.jpeg">
    <div class='author-info'>
    <div class='author-info-name'><b>Gavin</b></div>
    <div class='author-info-title'><em>Engineer</em></div>
    <div class='author-info-bio'><blockquote cite="https://en.wikipedia.org/wiki/Know_thyself">--Know thyself.</blockquote></div>
    </div>
</div>

</section>
`
const right_sidebar_html = `
<section class="right-sidebar">
<div class="catalog">

    <h3>Recent Articles</h3>
    <li><a href="/posts/1.html"><u>Today I begin a new life</u></a></li>
    <li><a href="/posts/2.html"><u>I will greet this day with love in my heart</u></a></li>
    <li><a href="/posts/3.html"><u>I will persist until I succeed</u></a></li>
    <li><a href="/posts/4.html"><u>I am nature’s greatest miracle</u></a></li>
    <li><a href="/posts/5.html"><u>I will live this day as if it is my last</u></a></li>
    <li><a href="/posts/6.html"><u>Today I will be master of my emotions</u></a></li>
</div>
</section>
`

insertFragment(left_sidebar_html, '.main', 'beforebegin');
insertFragment(right_sidebar_html, '.main', 'afterend');