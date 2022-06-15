
const productInCart = JSON.parse(localStorage.getItem("cart"));


if (productInCart) { //Quentin : bien le guard :) 

  productInCart.forEach(dataCart => {

    const productInApi = "http://localhost:3000/api/products/" + dataCart.id;

    console.log(productInApi)

    fetch(productInApi)
      .then(res => res.json())
      .then(product => {
        const productCart = document.getElementById("cart__items");

        const productCartArticle = document.createElement("article");
        const productImgContainer = document.createElement("div");
        const productImg = document.createElement("img");
        const productItemContainer = document.createElement("div");
        const productItemDescription = document.createElement("div");
        const productItemSettings = document.createElement("div");
        const productItemSettingsQuantity = document.createElement("div");
        const productQuantity = document.createElement("p");
        const productInputQuantity = document.createElement("input");
        const productItemDelete = document.createElement("div")
        const productDelete = document.createElement("p")
        const productTitle = document.createElement("h2");
        const productColor = document.createElement("p");
        const productPrice = document.createElement("p");

        const totalQuantity = document.getElementById("totalQuantity")
        const totalPrice = document.getElementById("totalPrice")

        productCart.appendChild(productCartArticle);
        productCartArticle.className = "cart__item";
        productCartArticle.setAttribute("data-id", dataCart.id);
        productCartArticle.setAttribute("data-color", dataCart.color);

        productCartArticle.append(productImgContainer, productItemContainer);

        productImgContainer.className = "cart__item__img";
        productImgContainer.appendChild(productImg);
        productImg.src = product.imageUrl;


        productItemContainer.append(productItemDescription, productItemSettings, productItemDelete);
        productItemContainer.className = "cart__item__content";
        /*productItemDescription.textContent =  productData.description;*/
        productItemDescription.append(productTitle, productColor, productPrice);
        productTitle.textContent = product.name
        productColor.textContent = dataCart.color
        productPrice.textContent = product.price * dataCart.quantity + "€"; 
        

        productItemSettings.className = "cart__item__content__settings";
        productItemSettings.append(productItemSettingsQuantity);
        productItemSettingsQuantity.className = "cart__item__content__settings__quantity";
        productItemSettings.append(productQuantity, productInputQuantity)
        productQuantity.innerHTML = "Qté :"
        productInputQuantity.className = "itemQuantity";
        productInputQuantity.type = "number";
        productInputQuantity.name = "itemQuantity";
        productInputQuantity.min = "1";
        productInputQuantity.max = "100";
        productInputQuantity.value = dataCart.quantity;



        productItemDelete.className = ("cart__item__content__settings__delete");
        productItemDelete.appendChild(productDelete)
        productDelete.className = "deleteItem";
        productDelete.innerHTML = "Supprimer";

        
        for (let i = 0; i < productInCart.length; i++) {
          productDelete.addEventListener("click", (event) => {
            console.log(productInCart.length)
            if (dataCart.id == dataCart.id && dataCart.color == dataCart.color) { //Quentin : c'est un peu redondant non ? Et ça pète des erreurs consoles
              productCart.removeChild(productCartArticle); 
              productInCart.splice(i, 1);
            }
            localStorage.setItem('cart', JSON.stringify(productInCart));
          }
          )
        }

        productInputQuantity.addEventListener("change",(event)=>{
          if (localStorage.getItem('cart')) {
              if (product !== -1) {
                  dataCart.quantity = productInputQuantity.value;
                  console.log(productInputQuantity)
              }
          }
          localStorage.setItem('cart', JSON.stringify(productInCart));
      })


        let priceTotal = 0
        for (let i = 0; i < productInCart.length; i += 1) { //Quentin : i+=1 peut se simplifier avec i++
          priceTotal += product.price * dataCart.quantity //Quentin : ha il y a un piège ici, on en parle demain ;) 
          //indice : le javascript à un typage 'dynamique', c'est à dire que le moteur du javascript "décide tout seul comme un grand" le type des entités et les conversions à la volé (mais parfois, pas celle souhaité). 
          totalPrice.textContent = priceTotal; 
          console.log(product.price)

          //



          const firstName = document.getElementById('firstName');
          const lastName = document.getElementById('lastName');
          const address = document.getElementById('address');
          const city = document.getElementById('city');
          const email = document.getElementById('email')


        }
      }


      )

  }
  )
}





/*
<section class="cart">
<section id="cart__items">
 <!--  <article class="cart__item" data-id="{product-ID}" data-color="{product-color}">
    <div class="cart__item__img">
      <img src="../images/product01.jpg" alt="Photographie d'un canapé">
    </div>
    <div class="cart__item__content">
      <div class="cart__item__content__description">
        <h2>Nom du produit</h2>
        <p>Vert</p>
        <p>42,00 €</p>
      </div>
      <div class="cart__item__content__settings">
        <div class="cart__item__content__settings__quantity">
          <p>Qté : </p>
          <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
        </div>
        <div class="cart__item__content__settings__delete">
          <p class="deleteItem">Supprimer</p>
        </div>
      </div>
    </div>
  </article> -->
</section>
<div class="cart__price">
  <p>Total (<span id="totalQuantity"><!-- 2 --></span> articles) : <span id="totalPrice"><!-- 84,00 --></span> €</p>
</div>


//
   <div class="cart__order">
              <form method="get" class="cart__order__form">
                <div class="cart__order__form__question">
                  <label for="firstName">Prénom: </label>
                  <input type="text" name="firstName" id="firstName" required>
                  <p id="firstNameErrorMsg"><!-- ci est un message d'erreur --></p>
                </div>
                <div class="cart__order__form__question">
                  <label for="lastName">Nom: </label>
                  <input type="text" name="lastName" id="lastName" required>
                  <p id="lastNameErrorMsg"></p>
                </div>
                <div class="cart__order__form__question">
                  <label for="address">Adresse: </label>
                  <input type="text" name="address" id="address" required>
                  <p id="addressErrorMsg"></p>
                </div>
                <div class="cart__order__form__question">
                  <label for="city">Ville: </label>
                  <input type="text" name="city" id="city" required>
                  <p id="cityErrorMsg"></p>
                </div>
                <div class="cart__order__form__question">
                  <label for="email">Email: </label>
                  <input type="email" name="email" id="email" required>
                  <p id="emailErrorMsg"></p>
                </div>
                <div class="cart__order__form__submit">
                  <input type="submit" value="Commander !" id="order">
                </div>
*/