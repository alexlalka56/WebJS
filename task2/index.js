var workingArticleButton = document.getElementById('working-article-button')

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

    for (var i = 0; i< articlesArray.lenght; i++){
        console.log(articlesArray[i]);
    }
}

