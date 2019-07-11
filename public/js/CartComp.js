Vue.component('cart', {
    props: ['cartItems', 'visibility'],
    template: `<div class="drop-cart" v-show="visibility">
                <h3 v-if="!cartItems.length" class="tovar">Cart is empty</h3>
                <cart-item 
                v-for="product of cartItems"  
                :key="product.id_product"
                :cart-item="product"></cart-item>
                <div class="total-cart-flex">
                    <span class="total">TOTAL</span>
                    <span class="total">$ {{$parent.totalAll}}</span>
                </div>
                <div class="cart-drop-buttons">
                    <a href="checkout.html"><input class="cart-drop-button1" type="submit" value="CHECKOUT"></a>
                    <a href="cart.html"><input class="cart-drop-button2" type="submit" value="GO TO CART"></a>
                </div>
            </div>`
});
Vue.component('cart-item', {
    props: ['cartItem'],
    computed: {
    imgCart() {
        return `img/item${this.cartItem.id_product}.jpg`
        },
    },
    template: `<div class="tovar">
                 <div class="tovar-bottom">
                    <img class="drop-cart-img" :src="imgCart" alt="Some image">
                        <div class="tovar1-text">
                    <h3>{{cartItem.product_name}}</h3>
                    <h6 class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</h6>
                    <h6 class="price-cart-drop">{{cartItem.quantity}} x $ {{cartItem.price}}</h6>
                         </div>
                <input @click="$parent.$emit('remove', cartItem)" class="close-button" value=" " type="submit">
                   </div>
               </div>`
});
Vue.component('cart-item-incart', {
    props: ['cartItem'],
    computed: {
        // Задать путь к изображениям товаров помещенных в корзину
        imgCartInCart() {
            return `img/item${this.cartItem.id_product}.jpg`;
        },
        // Задать путь к изображениям товаров на странице cart.html
        classCartInCart() {
            return `cart-box${this.cartItem.id_product}`;
        },
        // Подсчет итоговой суммы в элементе subtotal на странице cart.html
        subtotal() {
            return this.cartItem.price * this.cartItem.quantity;
        }
    },
    template: `<div :class="classCartInCart">
                <ul class="cart-box">
                    <li class="product-details">
                        <div class="product-details-flex">
                            <div class="cart-img"><img :src="imgCartInCart" alt="cart-item"></div>
                            <div class="cart-text">
                                <h3><a href="#">{{cartItem.product_name}}</a></h3>
                                <p>Color: <span class="cart-ptext">Red</span></p>
                                <p>Size: <span class="cart-ptext">Xll</span></p>
                            </div>
                        </div>
                    </li>
                    <li class="unite-price table-text">$ {{cartItem.price}}</li>
                    <li class="quantity table-text"><input v-model="cartItem.quantity" class="quantity-text" type="text" value=""></li>
                    <li class="shipping table-text">FREE</li>
                    <li class="subtotal table-text">$ {{subtotal}}</li>
                    <li class="action table-text"><input @click="$parent.remove(cartItem)" class="close-button" value=" " type="submit"></li>
                </ul>
            </div>`
});
Vue.component('subtotal', {
    props: ['cartItems'],
    template: `<div class="cart-contacts-right">
                <p>SUB TOTAL $ {{$parent.totalAll}}</p>
                <h3>GRAND TOTAL <span class="pink">$ {{$parent.totalAll}}</span></h3>
                <a href="checkout.html"><input type="submit" value="PROCEED TO CHECKOUT"></a>
            </div>`
});
