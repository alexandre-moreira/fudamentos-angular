class CardNews extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card")

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left")

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonimous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);


        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "./assets/foto-default.jpeg";
        newsImage.alt = "Foto da Noticia"
        cardRight.appendChild(newsImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot
    }

    styles(){
        const style = document.createElement("style");
        style.textContent = `
        .card{
            width: 80%;
            border: 1px solid gray;
            display: flex;
            flex-direction: row;
        }
        
        .card{
            box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
            -webkit-box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
            justify-content: space-between;
        }
        
        .card__left{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 10px;
        }
        
        .card__left > a{
            margin-top: 15px;
            font-size: 24px;
            text-decoration: none;
            font-weight: bold;
            color: black;
        }
        
        .card__left > span{
            font-weight: 700;
        }
        
        img{
            width: 350px;
            height: 200px;
        }
        `
        return style;
    }
}

customElements.define("card-news", CardNews);