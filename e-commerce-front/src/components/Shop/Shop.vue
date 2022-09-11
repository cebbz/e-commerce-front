<script setup lang="ts">
import type { ProductInterface } from '@/interfaces/Product.interface';
import ShopProductList from "./ShopProductList.vue";

defineProps<{
    products: ProductInterface[];
}>();

const emit = defineEmits<{
    (event: 'add-product-to-cart', productId: number): void;
}>();
</script>

<template>
    <div>
        <ShopProductList :products="products" @add-product-to-cart="emit('add-product-to-cart', $event)" />
    </div>
</template>

<style lang="scss" scoped>

</style>