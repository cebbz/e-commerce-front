<script setup lang="ts">
import TheHeader from './components/Header.vue';
import TheFooter from './components/Footer.vue';
import Shop from './components/Shop/Shop.vue';
import Cart from './components/Cart/Cart.vue';
import data from './data/product';

import { reactive } from 'vue';
import type { ProductInterface, ProductCartInterface } from '@/interfaces';

const state = reactive<{
  products: ProductInterface[];
  cart: ProductCartInterface[];
}>({
  products: data,
  cart: []
});

function addProductToCart(productId: number): void {
  const product = state.products.find((product) => product.id === productId);
  if (product) {
    const productCart = state.cart.find((productCart) => productCart.id === productId);
    if (productCart) {
      productCart.quantity++;
    } else {
      state.cart.push({
        ...product,
        quantity: 1
      });
    }
  }
}

function removeProductFromCart(productId: number) {
  const productCart = state.cart.find((productCart) => productCart.id === productId);
  if (productCart) {
    if (productCart.quantity > 1) {
      productCart.quantity--;
    } else {
      state.cart = state.cart.filter((productCart) => productCart.id !== productId);
    }
  }
}
</script>
  
<template>
  <div class="app-container">
    <TheHeader class="header" />
    <Shop :products="state.products" @add-product-to-cart="addProductToCart" class="shop" />
    <Cart :cart="state.cart" @remove-product-from-cart="removeProductFromCart" class="cart" />
    <TheFooter class="footer" />
  </div>
</template>
  
<style lang="scss">
@import './assets/base.scss';
@import './assets/debug.scss';

.app-container {
  min-height: 100vh;
  display: grid;
  grid-template-areas: 'header header' 'shop cart' 'footer footer';
  grid-template-columns: 75% 25%;
  grid-template-rows: 48px auto 48px;
}

.header {
  grid-area: header;
}

.shop {
  grid-area: shop;
}

.cart {
  grid-area: cart;
  border-left: var(--border);
  background-color: white;
}

.footer {
  grid-area: footer;
}
</style>