var formSumbit = document.getElementById("form-sumbit")
var articleContainer = document.getElementById("article-container");
var app = document.getElementById("app");
formSumbit.onclick = function(event){
    event.preventDefault();
    var formTitle = document.getElementById("form-title");
    // formTitle.value = "Congratulation this dont work";

    var articleTitle = formTitle.value;
    var formText = document.getElementById("form-text");
    var articleText = formText.value;
    var articleDiv = document.createElement("div")
    articleDiv.className = "article"
    articleDiv.innerHTML = `     
    
         <h3>${articleTitle}</h3>
             <p>
                ${articleText}
             </p>
    `;
    articleContainer.append(articleDiv);
    formTitle.value = "";
    formText.value = "";
}