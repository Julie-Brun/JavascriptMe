// Ce fichier contient des fonction réutilisable -->
class Article {
    constructor (id, title, author, publishedDate, img, content, resumes, tags) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.publishedDate = publishedDate;
        this.img = img;
        this.content = content;
        this.resumes = resumes;
        this.tags = tags;
    }

    getId() {
        return this.id;
    }
    setId (newId) {
        this.id = newId;
    }

    getTitle() {
        return this.title;
    }
    setTitle (newTitle) { 
        this.title = newTitle;
    }

    getAuthor() {
        return this.author;
    }
    setAuthor (newAuthor) { 
        this.author = newAuthor;
    }

    getPublishedDate() {
        return this.publishedDate;
    }
    setPublishedDate (newPublishedDate) { 
        this.publishedDate = newPublishedDate;
    }

    getImg() {
        return this.img;
    }
    setImg (newImg) { 
        this.img = newImg;
    }

    getContent() {
        return this.content;
    }
    setContent (newContent) { 
        this.content = newContent;
    }

    getResumes() {
        return this.resumes;
    }
    setResumes (newResumes) { 
        this.resumes = newResumes;
    }

    getTags() {
        return this.tags;
    }
    setTags (newTags) { 
        this.tags = newTags;
    }
}


function readFile(file, done) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    var value;
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4) {
            if(rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                value = JSON.parse(allText);
                done(value);
            }
        }
    }
    rawFile.send(null);
}

// Fonctions Création Article

function bloc(parent, child, functionGet){ 
    child.classList.add("article-preview");
    child.setAttribute("data-id", functionGet);
    parent.appendChild(child);
};

function title(parent, child, functionGet){
    child.innerText = functionGet;
    parent.appendChild(child);
};

function body(parent, child){
    child.classList.add("article-preview-body");
    parent.appendChild(child);
};

function image(parent, child){
    child.classList.add("article-preview-img");
    parent.appendChild(child);
};

function setImg(parent, child, functionGetId, functionGetImg){
    child.setAttribute("alt", "miniature article " + functionGetId);
    child.setAttribute("src", functionGetImg);
    parent.appendChild(child);
};

function cont(parent, child){
    child.classList.add("article-preview-content");
    parent.appendChild(child); 
};

function setContent(parent, child, functionGet){
    child.innerText = functionGet;
    parent.appendChild(child);
};

function tag(parent, child){
    child.classList.add("article-preview-tags");
    parent.appendChild(child);
};

function setTags(parent, child, functionGet){
    child.innerText = functionGet;
    parent.appendChild(child);
};

