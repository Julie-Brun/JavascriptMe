window.onload = function() {
    readFile('data/articles.json', function(articles) {
        console.log(articles);

    // VOUS Y ETES PRESQUE !!!

    // ------------- FINAL STEP -----------------
        // A PARTIR DU PARAMETRE 'ID' PRESENT DANS L'URL :
            // 1. Récupérer l'article correspondant à partir du fichier 'JSON'
            // 2. Utiliser les données pour instancier un nouvelle object 'Article'
            // 3. Inserer l'article dans la page 'article.html' sous la forme d'un element HTML


    // -- IMPORTANT --------------->
        // ---- comme vous pouvez le constater pour cette final step rien de bien nouveau, allons nous réecrire un code déjà fait ?
        // BIEN SUR QUE NON !
        // Il serait donc peut-etre jusdicieux d'organiser notre code en utilisant des fonctions dynamique réutilisable ;-)

        let params = (new URL(document.location)).searchParams;
        let id = params.get("id");
        console.log(id);

        for (let i = 0; i < articles.length; i++) {
            var article = new Article (articles[i].id, articles[i].title, articles[i].author, articles[i].publishedDate, articles[i].img, articles[i].content, articles[i].resumes, articles[i].tags);

            if(id == article.id){
                const section = document.getElementsByTagName("section")[0];
                const articleBloc = document.createElement("article");
                const articleTitle = document.createElement("h2");
                const articleBody = document.createElement("div");
                const articleImg = document.createElement("div");
                const img = document.createElement("img");
                const articleContent = document.createElement("div");
                const content = document.createElement("p");
                const articleTags = document.createElement("div");
                const tags = document.createElement("p");
                
                bloc(section, articleBloc, article.getId());

                title(articleBloc, articleTitle, article.getTitle());

                body(articleBloc, articleBody);
                
                image(articleBody, articleImg);

                setImg(articleImg, img, article.getId(), article.getImg());

                cont(articleBody, articleContent);

                setContent(articleContent, content, article.getContent());

                tag(articleBody, articleTags);

                setTags(articleTags, tags, article.getTags());

            }
        }
    
    });

}
