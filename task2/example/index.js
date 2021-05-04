var articleContainer = document.getElementById('article-container');
var createArticleButton = document.getElementById('create-article-button')
var articlesCount = 0; // Add global article count.

var articlesArray = [
    {
        title: 'Article #',
        text: 'Article # text.'
    },
    {
        title: 'Article #',
        text: 'Article # text.'
    },
    {
        title: 'Article #',
        text: 'Article # text.'
    }
]

// Add button click event.
createArticleButton.onclick = function (event) {
    event.preventDefault();

    // Add loop for articles array.
    for (var i = 0; i < articlesArray.length; i++) {
        articlesCount++; // Update global articles count.

        // Create new div for each element in array.
        var articleDiv = document.createElement('div');
        articleDiv.className = 'article'; // add class to apply styles.

        // For good and clean code create variables for title and text.
        var articleTitle = articlesArray[i].title;
        var articleText = articlesArray[i].text;

        // Add article number to it title and text.
        articleTitle = articleTitle.replace("#", `#${articlesCount}`);
        articleText = articleText.replace("#", `#${articlesCount}`);

        // Set html for created div.
        articleDiv.innerHTML = `
            <h3>${articleTitle}</h3>
            <p>${articleText}</p>
        `;

        // Insert article.
        articleContainer.append(articleDiv)

    }

}