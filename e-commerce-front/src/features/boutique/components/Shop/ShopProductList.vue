<script setup lang="ts">
import type { ProductInterface } from '@/interfaces/Product.interface';
import ShopProduct from './ShopProduct.vue';

defineProps<{
  products: ProductInterface[];
}>();

const emit = defineEmits<{
  (event: 'add-product-to-cart', productId: string): void;
}>();

</script>

<template>
  <div class="grid p-20">
    <ShopProduct @add-product-to-cart="emit('add-product-to-cart', $event)" v-for="product in products"
      :product="product" :key="product._id" />
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
