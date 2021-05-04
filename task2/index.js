var workingArticleButton = document.getElementById('working-article-button')
var articleCount = 0;
var articlesArray = [
    {
        title: 'Working Article #',
        text: 'Article # working text.',
    },
    {
        title: 'Working Article #',
        text: 'Article # working text.',
    },
    {
        title: 'Working Article #',
        text: 'Article # working text.',
    },
]
workingArticleButton.onclick = function (event) {
    event.preventDefault();

    for (var i = 0; i < articlesArray.lenght; i++) {
        console.log(articlesArray[i]);

        var articleDiv = document.createElement('div');
        articleDiv.className = 'article';

        var articleTitle = articlesArray[i].title;
        var articleText = articlesArray[i].text;

        articleTitle = articleTitle.replace("#", `#${articleCount}`);
        articleText = articleText.replace("#", `#${articleCount}`);
        articleDiv.innerHTML = `
        <h4>${articleTitle}</h3>
        <p>${articleText}</p>
        `;
    }
}

