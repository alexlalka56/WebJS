var workingArticleButton = document.getElementById('working-article-button')
var articleContainer = document.getElementById('article-container')
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

    for (var i = 0; i < articlesArray.length; i++) {
       articleCount++;

        var articleDiv = document.createElement('div');
        articleDiv.className = 'article';

        var articleTitle = articlesArray[i].title;
        var articleText = articlesArray[i].text;

        articleTitle = articleTitle.replace("#", `#${articleCount}`);
        articleText = articleText.replace("#", `#${articleCount}`);
        articleDiv.innerHTML = `
        <h4>${articleTitle}</h4>
        <p>${articleText}</p>
        `;

        articleContainer.append(articleDiv)
    }

}

