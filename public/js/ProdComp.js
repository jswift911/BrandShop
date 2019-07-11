Vue.component('products', {
    props: ['products'],
    template: `<div class="featured-items-img">
            <product 
            v-for="product of products" 
            :key="product.id_product"
            :product="product"></product>
              </div>`
});

Vue.component('product', {
    props: ['product'],
    computed: {
        // Создать класс для отображения товаров на index.html
        generatedClassIndex(){
            if (this.product.id_product <= 8) {
                return `item${this.product.id_product}`;
            }
        }
    },
    template: `<div v-if="generatedClassIndex" :class="generatedClassIndex">
                    <a @click="$parent.$emit('add-product', product)">
                        <h4>{{ product.product_name }}</h4>
                        <p class="pink">$ {{ product.price }}</p>
                    </a>
               </div>`
});

Vue.component('products-in', {
    props: ['products'],
    template: `<div class="featured-items-img">
            <product-in 
            v-for="product of products" 
            :key="product.id_product"
            :product="product"></product-in>
              </div>`
});

Vue.component('product-in', {
    props: ['product'],
    computed: {
        // Создать класс для отображения товаров на product.html
        generatedClassProduct(){
            if (this.product.id_product > 8 && this.product.id_product <= 17) {
                return `item${this.product.id_product}-prod`;
            }
        }
    },
    template: `<div v-if="generatedClassProduct" :class="generatedClassProduct">
                    <a @click="$parent.$emit('add-product', product)">
                        <h4>{{ product.product_name }}</h4>
                        <p class="pink">$ {{ product.price }}</p>
                    </a>
               </div>`
});

Vue.component('products-single', {
    props: ['products'],
    template: `<div class="women-items-img">
            <product-single 
            v-for="product of products" 
            :key="product.id_product"
            :product="product"></product-single>
              </div>`
});

Vue.component('product-single', {
    props: ['product'],
    computed: {
        // Создать класс для отображения товаров на single.html
        generatedClassSingle(){
            if (this.product.id_product > 17) {
                return `women-item${this.product.id_product}`;
            }
        }
    },
    template: `<div v-if="generatedClassSingle" :class="generatedClassSingle">
                    <a @click="$parent.$emit('add-product', product)">
                        <h4>{{ product.product_name }}</h4>
                        <p class="pink">$ {{ product.price }}</p>
                    </a>
               </div>`
});