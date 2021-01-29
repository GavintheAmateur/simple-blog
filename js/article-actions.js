import { insertFragment } from './common.js';

const posts = [
    "Today I begin a new life",
    "I will greet this day with love in my heart",
    "I will persist until I succeed",
    "I am nature’s greatest miracle",
    "I will live this day as if it is my last",
    "Today I will be master of my emotions"
]

const renderArticleNav = (posts) => {
    let pageNum = parseInt(window.location.pathname.split("/").pop().split(".")[0]);
    let navPrevious = pageNum <= 1 ? '' : `<div class="link-previous"><a href="${pageNum - 1}.html">Previous: ${posts[pageNum - 2]}</a></div>`
    let navhome = '<div class="link-home"><a href="/index.html">Home</a></div>'
    let navNext = pageNum >= posts.length ? '' : `<div class="link-next"><a href="${pageNum + 1}.html">Next: ${posts[pageNum ]}</a></div>`

    let articleNav =
        `<div class="article-nav">
    ${navPrevious}
    ${navhome}
    ${navNext}
    </a></div>`

    return articleNav;

}

const article_actions_html =
    ` 
    ${renderArticleNav(posts)}
<div class="sharing">
<a class="sharing-icon sharing-icon-facebook"></a>
<a class="sharing-icon sharing-icon-linkedin"></a>
<a class="sharing-icon sharing-icon-github"></a>
</div>

<div class="article-comment">
<p class="article-comment-hint"> Welcome to leave your comments below:</p>
<textarea class="article-comment-box"></textarea>
<button class="submit article-comment-submit" value="">Submit</button>
<div class="article-comment-existing">
    <p>#1 posted by <em>Stranger</em> at <em>2021-01-21 00:00:00</em></p>

    <p>Good article!</p>
</div>

</div>
`


insertFragment(article_actions_html, '.article-body', 'afterend');



