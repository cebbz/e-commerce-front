<script setup lang="ts">
import type { ProductInterface } from '@/interfaces/Product.interface';
import ShopProduct from './ShopProduct.vue';

defineProps<{
  products: ProductInterface[];
}>();
</script>

<template>
  <div class="grid p-20">
    <ShopProduct v-for="product in products" :product="product" :key="product.id" />
  </div>
</template>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-rows: 400px;
  gap: 20px;
}
</style>
