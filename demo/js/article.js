// 展开文章
var domArticle = document.querySelector('.tt-article-unfold-btn');
if (domArticle != undefined) {
    domArticle.onclick = (e) => {
        document.querySelector('.tt-article').classList.remove('fold');
    }
}
