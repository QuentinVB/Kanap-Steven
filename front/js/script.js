const api = "http://localhost:3000/api/products"

const items = document.getElementById("items");

fetch(api)
    .then(response => response.json())
    .then(data => {
        for (let product of data) {
            console.log(product)

            const article = document.createElement("article");
            const productLink = document.createElement("a");
            const productImg = document.createElement("img");
            const productTitle = document.createElement("h3");
            const productDesc = document.createElement("p");

            items.appendChild(productLink).appendChild(article);//Quentin : joli :) 

            article.append(productImg, productTitle, productDesc);//Quentin : js peut faire ça mais c'est risqué d'assigner avant d'avoir fini de setter les attributs

            productLink.href = "../html/product.html?id=" + product._id; //Quentin : suggestion : chaine interpolée ? `foo {product._id}`;
            productImg.src = product.imageUrl;
            productImg.alt = product.altTxt;
            productTitle.setAttribute("class", "productName");
            productTitle.textContent = product.name;
            productDesc.setAttribute("class", "productDescription");
            productDesc.textContent = product.description;

            /*  
              items.innerHTML += 
              `<a href="../html/product.html?id=${product._id}">
              <article>
              <img src="${product.imageUrl}" alt="${product.altTxt}">
              <h3 class="productName">${product.name}</h3>
              <p class="productDescription">${product.description}</p>
              </article>
              </a>
  */

        }
    }
    )