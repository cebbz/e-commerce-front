<script setup lang="ts">
import CartProductList from './CartProductList.vue';
import type { ProductCartInterface } from '@/interfaces';

const props = defineProps<{
    cart: ProductCartInterface[];
}>();

const emit = defineEmits<{
    'remove-product-from-cart': (productId: number) => void;
}>();
</script>
    
<template>
    <div class="p-20">
        <h2 class="mb-10">Panier</h2>
        <CartProductList :cart="cart" @remove-product-from-cart="$emit('remove-product-from-cart', $event)" />
    </div>
</template>
    
<style lang="scss" scoped>

</style>